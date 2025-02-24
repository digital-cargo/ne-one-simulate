import { ReactFlow, Background, ConnectionLineType, type Node, type Edge, BackgroundVariant } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges } from './swim-lane-data';

export function SwimlaneDiagram() {
  return (
    <div style={{ height: '90vh', backgroundColor: '#f8fafc' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
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
        <Background variant={BackgroundVariant.Dots} gap={32} size={1} color="#cbd5e1" />
      </ReactFlow>
    </div>
  );
}
