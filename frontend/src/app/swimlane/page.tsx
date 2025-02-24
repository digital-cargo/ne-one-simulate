'use client';

import { useCallback } from 'react';
import type { Node, Edge } from '@xyflow/react';
import { ReactFlow, Background, MarkerType, Position, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const LANE_HEIGHT = 300;
const NODE_HEIGHT = 60;
const NODE_WIDTH = 200;

// Custom node styles
const laneStyle = {
  background: '#f8f9fa',
  padding: '20px',
  borderBottom: '1px solid #e9ecef',
};

const nodeStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  background: 'white',
  fontSize: '12px',
};

// Initial nodes setup
const initialNodes: Node[] = [
  // Lane Headers
  {
    id: 'ff-lane',
    position: { x: 0, y: 0 },
    data: { label: 'Freight Forwarder' },
    style: { ...laneStyle, width: 800, height: LANE_HEIGHT },
    draggable: false,
    selectable: false,
  },
  {
    id: 'carrier-lane',
    position: { x: 0, y: LANE_HEIGHT },
    data: { label: 'Carrier' },
    style: { ...laneStyle, width: 800, height: LANE_HEIGHT },
    draggable: false,
    selectable: false,
  },

  // Freight Forwarder Nodes
  {
    id: 'n1',
    type: 'default',
    position: { x: 50, y: 50 },
    data: { label: 'ne-one-simulate (FWD)' },
    style: nodeStyle,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'fwd',
    type: 'default',
    position: { x: 300, y: 50 },
    data: { label: 'FWD 1R Server' },
    style: nodeStyle,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  // Carrier Nodes
  {
    id: 'carrier',
    type: 'default',
    position: { x: 300, y: LANE_HEIGHT + 50 },
    data: { label: 'Carrier 1R Server' },
    style: nodeStyle,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'n2',
    type: 'default',
    position: { x: 550, y: LANE_HEIGHT + 50 },
    data: { label: 'ne-one-simulate (Carrier)' },
    style: nodeStyle,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
];

// Initial edges setup
const initialEdges: Edge[] = [
  {
    id: 'e1',
    source: 'n1',
    target: 'fwd',
    label: 'Subscribe Carrier 1R server',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: '#666' },
  },
  {
    id: 'e2',
    source: 'fwd',
    target: 'n1',
    label: '201 Created',
    type: 'smoothstep',
    style: { stroke: '#22c55e' }, // green for success
  },
  {
    id: 'e3',
    source: 'n2',
    target: 'carrier',
    label: 'Check Notifications',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    animated: true,
  },
  {
    id: 'e4',
    source: 'n2',
    target: 'fwd',
    label: 'Change Route-Origin',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e5',
    source: 'fwd',
    target: 'n2',
    label: '201 Created',
    type: 'smoothstep',
    style: { stroke: '#22c55e' }, // green for success
  },
];

function SwimlaneFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onInit = useCallback(() => {
    console.log('Flow initialized');
  }, []);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        fitView
        attributionPosition="bottom-left"
       />
        
    </div>
  );
}

export default SwimlaneFlow;
