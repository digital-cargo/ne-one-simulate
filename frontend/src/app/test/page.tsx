'use client';

import React, { useState, useEffect } from "react";
import { ReactFlow, Handle, Position } from "@xyflow/react";

import '@xyflow/react/dist/style.css';


const nodeTypes = {
  customNode: ({ data }) => (
    <div className="p-4 rounded-lg shadow-md text-white bg-blue-500">
      <Handle type="target" position={Position.Top} />
      <div className="text-center font-bold">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  ),
};

const nodes = [
  { id: '1', type: 'customNode', position: { x: 0, y: 0 }, data: { label: 'ne-one-simulate' } },
  { id: '2', type: 'customNode', position: { x: 250, y: 0 }, data: { label: 'forwarder' } },
  { id: '3', type: 'customNode', position: { x: 500, y: 0 }, data: { label: 'carrier' } },
  { id: '4', type: 'customNode', position: { x: 0, y: 100 }, data: { label: 'Create Waybill' } },
  { id: '5', type: 'customNode', position: { x: 0, y: 200 }, data: { label: 'Get Waybill' } },
];

const edges = [
  { id: 'e1-2', source: '4', target: '2', animated: true, label: 'Success' },
  { id: 'e2-1', source: '5', target: '2', animated: true, label: 'Success' },
];

const SequenceDiagram = () => {
  return (
    <div className="w-full h-screen">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
    </div>
  );
};

const WorkflowDiagram = () => {  

  return (
    <div className="w-full h-screen">      
      <SequenceDiagram />
    </div>
  );
};

export default WorkflowDiagram;