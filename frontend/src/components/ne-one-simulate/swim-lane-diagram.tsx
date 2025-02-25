"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ReactFlow,
  ConnectionLineType,
  type Node,
  type Edge,
  useReactFlow,
  type OnInit
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { GroupNode } from './group-node';
import { CustomNode } from "./custom-node";
import actors from "@/config/actors";

interface Assertion {
  assertion: string;
  passed: boolean;
}

interface RequestDetails {
  method: string;
  url: string;
  headers: Record<string, string>;
  body: string;
  client_logistics_agent_uri: string;
}

interface Request {
  name: string;
  assertions: Assertion[];
  request: RequestDetails;
  response: Record<string, any>;
  actor: {
    name: string;
    color: string;
    serverEndpoint: string;
  };
}

interface TestCase {
  test_case: string;
  overall_passed: boolean;
  requests: Request[];
}

function getActorFromUri(uri: string) {
  const serverEndpoint = new URL(uri).origin;
  return actors.find(actor => actor.serverEndpoint === serverEndpoint) || {
    name: 'Unknown',
    color: '#666666',
    serverEndpoint
  };
}

// Custom node component for the dashed line.
const DashedLineNode = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "2px",
        borderTop: "2px dashed #000",
        pointerEvents: "none",
      }}
    />
  );
};

export function SwimlaneDiagram() {
  const nodeTypes = {
    group: GroupNode,
    custom: CustomNode,
    dashedLine: DashedLineNode,
  };

  // Initialize state with empty arrays.
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const originalNodesRef = useRef<Node[]>([]);

  // Generate nodes for requests with proper data for CustomNode.
  const generateNodes = (requests: Request[] = []) => {
    return requests.map((request, index) => {
      const actorName = request.actor.name.toLowerCase();
      // Decide y position based on actor type.
      const y = actorName === "forwarder" ? 100 : actorName === "carrier" ? 300 : 300;
      // Compute overallPass based on assertions (default true if none)
      const overallPass =
        request.assertions && request.assertions.length > 0
          ? request.assertions.every(a => a.passed)
          : true;
      return {
        id: `node-${index}`,
        type: "custom",
        data: { 
          label: request.name,
          actorColor: request.actor.color,
          // Initially set all nodes to gray
          overallPass: null,
          finalState: overallPass,
          index: index // Store index for animation ordering
        },
        position: { x: index * 320, y },
        style: { padding: 10, borderRadius: 8, backgroundColor: "#d1d5db" }
      } as Node;
    });
  };

  // Generate sequential edges between request nodes.
  const generateEdges = (nodes: Node[]): Edge[] => {
    return nodes
      .map((node, index) => {
        if (index < nodes.length - 1) {
          return {
            id: `edge-${index}`,
            source: node.id,
            target: nodes[index + 1].id,
            animated: true,
            type: ConnectionLineType.SmoothStep,
          } as Edge;
        }
        return null;
      })
      .filter((edge): edge is Edge => edge !== null);
  };

  // Generate label nodes for each unique actor (swimlane) using GroupNode.
  const generateLabelNodes = (requests: Request[] = []) => {
    const actorMap = new Map<string, { name: string; color: string }>();
    // Gather unique actor details.
    requests.forEach((r) => {
      const key = r.actor.name.toLowerCase();
      if (!actorMap.has(key)) {
        actorMap.set(key, { name: r.actor.name, color: r.actor.color });
      }
    });
    const labelNodes: Node[] = [];
    actorMap.forEach(({ name, color }, key) => {
      let y: number;
      if (key === "forwarder") y = 80;
      else if (key === "carrier") y = 300;
      else y = 300;
      labelNodes.push({
        id: `label-${key}`,
        type: "group", // reuse GroupNode for label rendering
        data: { label: name, color },
        // Position the label to the left of the request nodes.
        position: { x: -200, y },
        style: { background: "transparent", border: "none" }
      });
    });
    return labelNodes;
  };

  // Start the sequential animation of nodes
  const startAnimation = (requestNodes: Node[]) => {
    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    // Sort request nodes by their index for proper animation sequence
    const sortedNodes = [...requestNodes].sort((a, b) => a.data.index - b.data.index);

    // Animate each node one at a time
    const animateNode = (index: number) => {
      if (index >= sortedNodes.length) return;

      const currentNode = sortedNodes[index];

      setNodes(prevNodes => {
        return prevNodes.map(node => {
          if (node.id === currentNode.id) {
            return {
              ...node,
              data: {
                ...node.data,
                overallPass: node.data.finalState
              }
            };
          }
          return node;
        });
      });

      // Schedule next node animation
      animationRef.current = setTimeout(() => {
        animateNode(index + 1);
      }, 400);
    };

    // Start the animation sequence after a small delay
    animationRef.current = setTimeout(() => {
      animateNode(0);
    }, 500);
  };

  useEffect(() => {
    // Get test data from localStorage (adjust index as needed).
    const runCollectionResponse = JSON.parse(localStorage.getItem("runCollectionResponse") || "[]");
    const url = window.location.href;
    const index = parseInt(url.charAt(url.length - 1), 10) - 1;
    const testData: TestCase = runCollectionResponse[index] || {};

    // Enhance test data with actor information.
    const enhancedTestData = {
      ...testData,
      requests: testData.requests?.map((request: any) => ({
        ...request,
        actor: getActorFromUri(request.request.client_logistics_agent_uri)
      }))
    };

    if (enhancedTestData.requests) {
      const labelNodes = generateLabelNodes(enhancedTestData.requests);
      const requestNodes = generateNodes(enhancedTestData.requests);
      // Create a dashed line node positioned between the swim lanes.
      const dashedLineNode: Node = {
        id: "dashed-line",
        type: "dashedLine",
        data: {},
        position: { x: -300, y: 240 },
        style: { width: 4000, pointerEvents: "none" }
      };

      const combinedNodes = [...labelNodes, ...requestNodes, dashedLineNode];
      originalNodesRef.current = combinedNodes;
      
      // Generate edges only between the request nodes.
      const newEdges = generateEdges(requestNodes);
      setNodes(combinedNodes);
      setEdges(newEdges);
      
      // Start the animation sequence
      startAnimation(requestNodes);
    }

    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const onInit: OnInit = useCallback((reactFlowInstance) => {
    reactFlowInstance.setViewport({ x: 100, y: -10, zoom: 0.5 });
  }, []);

  return (
    <div style={{ height: '30vh', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: -900, y: 0, zoom: 1 }}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={true}
        selectionOnDrag={false}
        panOnScroll={false}
        panOnScrollSpeed={0.5}
        zoomOnDoubleClick={true}
        preventScrolling={true}
        zoomActivationKeyCode="Meta"
        panActivationKeyCode="Space"
        onInit={onInit}
      >        
      </ReactFlow>
    </div>
  );
}