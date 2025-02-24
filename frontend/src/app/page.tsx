'use client';

import React, { useState, useEffect } from "react";
import { ReactFlow, Handle, Position, MiniMap } from "@xyflow/react";

import '@xyflow/react/dist/style.css';

interface WorkflowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: { label: string; status: string };
}

const WorkflowNodeComponent = ({ data }: { data: { label: string; status: string } }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md text-white ${
        data.status === "Success"
          ? "bg-green-500"
          : data.status === "Failure"
          ? "bg-red-500"
          : "bg-gray-500"
      }`}
    >
      <Handle type="target" position={Position.Top} />
      <div className="text-center font-bold">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const nodeTypes = { workflowNode: WorkflowNodeComponent };

const WorkflowDiagram = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([]);
  interface Edge {
    id: string;
    source: string;
    target: string;
    animated: boolean;
  }

  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    fetch("/api/run-collection") // Simulated API endpoint
      .then((response) => response.json())
      .then((data) => {
        interface WorkflowNodeData {
          request: string;
          status: string;
        }

        interface WorkflowNode {
          id: string;
          type: string;
          position: { x: number; y: number };
          data: { label: string; status: string };
        }

        interface Edge {
          id: string;
          source: string;
          target: string;
          animated: boolean;
        }

        const workflowNodes: WorkflowNode[] = data.map((item: WorkflowNodeData, index: number) => ({
          id: `node-${index}`,
          type: "workflowNode",
          position: { x: 250, y: index * 100 },
          data: { label: item.request, status: item.status },
        }));

        interface WorkflowEdge {
          id: string;
          source: string;
          target: string;
          animated: boolean;
        }

        interface WorkflowEdge {
          id: string;
          source: string;
          target: string;
          animated: boolean;
        }

        const workflowEdges: WorkflowEdge[] = data.slice(1).map((_: any, index: number) => ({
          id: `edge-${index}`,
          source: `node-${index}`,
          target: `node-${index + 1}`,
          animated: true,
        }));

        setNodes(workflowNodes);
        setEdges(workflowEdges);
      });
  }, []);

  return (
    <div className="w-full h-screen">      
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
      <MiniMap nodeStrokeWidth={3} />
        </ReactFlow>
    </div>
  );
};

export default WorkflowDiagram;