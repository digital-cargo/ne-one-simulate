import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface CustomNodeProps {
  data: {
    label: string;
    actorColor: string;
    overallPass: boolean | null;
    index?: number;
  };
}

export const CustomNode = memo(({ data }: CustomNodeProps) => {
  // Determine background color based on overallPass state
  let backgroundColor = '#d1d5db'; // Default gray
  
  if (data.overallPass === true) {
    backgroundColor = '#10b981'; // Green for success
  } else if (data.overallPass === false) {
    backgroundColor = '#ef4444'; // Red for failure
  }
  
  // Border color based on actor
const borderColor = data.overallPass === true ? '#10b981' : data.overallPass === false ? '#ef4444' : '#d1d5db';
  
  return (
    <div
      style={{
        padding: '10px',
        borderRadius: '8px',
        backgroundColor,
        border: `2px solid ${borderColor}`,
        transition: 'background-color 0.5s ease',
        minWidth: '150px',
        willChange: 'background-color', // Optimize for animation
      }}
    >
      <Handle type="target" position={Position.Left} />
      <div style={{ color: '#000', fontWeight: 'bold' }}>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
});

CustomNode.displayName = 'CustomNode';