'use client';

import React, { useState, useEffect } from "react";
import { ReactFlow, Background, ConnectionLineType, type Node, type Edge, BackgroundVariant } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { initialNodes as rawNodes, initialEdges } from './swim-lane-data';
import { GroupNode } from './group-node';

export function SwimlaneDiagram() {
  const nodeTypes = {
    group: GroupNode,
  };

  const [nodes, setNodes] = useState<Node[]>(rawNodes);


const animationDuration = 1000; // 1 second per node

useEffect(() => {
  let currentIndex = 0;

  const interval = setInterval(() => {
    if (currentIndex >= rawNodes.length) {
      clearInterval(interval); // Stop the interval once all nodes are green
    } else {
      // Turn one node green at a time
      setNodes((prevNodes) =>
        prevNodes.map((node, i) =>
          i === currentIndex ? { ...node, style: { backgroundColor: "#86efac", padding: 10, borderRadius: 8 } } : node
        )
      );
      currentIndex++;
    }
  }, animationDuration);

  return () => clearInterval(interval);
}, []);

  return (
    <div style={{ height: '30vh', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <ReactFlow
        nodes={nodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
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
      >
        <Background variant={BackgroundVariant.Lines} gap={32} size={1} color="#cbd5e1" />
      </ReactFlow>
    </div>
  );
}
