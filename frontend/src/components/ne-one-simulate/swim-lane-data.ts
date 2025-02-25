import { type Node, type Edge } from "@xyflow/react";

export const initialNodes: Node[] = [
    // Development Lane Background
    {
        id: 'development-lane',
        type: 'group',
        position: { x: 80, y: 0 }, // Increased x offset for label space
        data: { 
            label: 'Forwarder',
            color: 'rgba(255, 0, 0, 0.30)'  // Solid red color
        },
        style: {
            width: 1920,
            height: 200,
            backgroundColor: 'rgba(255, 0, 0, 0.05)',
            border: '2px dashed rgba(255, 0, 0, 0.3)',
            padding: '20px',
        },
        // Add label styling for group
        dragHandle: '.custom-drag-handle',
        className: 'light',
        expandParent: true,
        draggable: false        
    },
    // Testing Lane Background
    {
        id: 'testing-lane',
        type: 'group',
        position: { x: 80, y: 250 }, // Increased x offset for label space
        data: { 
            label: 'Carrier',
            color: 'rgba(22, 236, 0, 0.3)'  // Solid color matching the border
        },
        style: {
            width: 1920,
            height: 200,
            backgroundColor: 'rgba(22, 236, 0, 0.05)',
            border: '2px dashed rgba(22, 236, 0, 0.3)',
            padding: '20px',
        },
        // Add label styling for group
        dragHandle: '.custom-drag-handle',
        className: 'light',
        expandParent: true,
        draggable: false
    },
    // Development Tasks
    {
        id: 'design',
        data: { label: 'Subscribe Carrier to Waybill' },
        position: { x: 180, y: 50 }, // x increased by 80
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        },
        {
        id: 'implement',
        data: { label: 'Implementation' },
        position: { x: 480, y: 50 }, // x increased by 80
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    {
        id: 'review',
        data: { label: 'Code Review' },
        position: { x: 780, y: 50 }, // x increased by 80
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    // Testing Tasks
    {
        id: 'unit',
        data: { label: 'Unit Tests' },
        position: { x: 180, y: 300 }, // x increased by 80
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #22c55e 0%, #84cc16 100%)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    {
        id: 'integration',
        data: { label: 'Integration Tests' },
        position: { x: 480, y: 300 }, // x increased by 80
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #f59e0b 0%, #facc15 100%)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    {
        id: 'bugfix',
        data: { label: 'Bug Fixing' },
        position: { x: 780, y: 300 }, // x increased by 80
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
];

export const initialEdges: Edge[] = [
    {
        id: 'design-unit',
        source: 'design',
        target: 'unit',
        animated: true,
        style: { stroke: '#64748b', strokeWidth: 2 },
    },
    {
        id: 'implement-integration',
        source: 'implement',
        target: 'integration',
        animated: true,
        style: { stroke: '#64748b', strokeWidth: 2 },
    },
    {
        id: 'review-bugfix',
        source: 'review',
        target: 'bugfix',
        animated: true,
        style: { stroke: '#64748b', strokeWidth: 2 },
    },
];