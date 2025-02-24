import { type Node, type Edge } from "@xyflow/react";

export const initialNodes: Node[] = [
    // Development Lane Background
    {
        id: 'development-lane',
        type: 'group',
        position: { x: 0, y: 0 },
        data: { label: 'Forwarder' },
        style: {
            width: 2000,
            height: 200,
            backgroundColor: 'rgba(6, 182, 212, 0.05)',
            border: '2px dashed rgba(6, 182, 212, 0.3)',
        },
    },
    // Testing Lane Background
    {
        id: 'testing-lane',
        type: 'group',
        position: { x: 0, y: 250 },
        data: { label: 'Carrier' },
        style: {
            width: 2000,
            height: 200,
            backgroundColor: 'rgba(34, 197, 94, 0.05)',
            border: '2px dashed rgba(34, 197, 94, 0.3)',
        },
    },
    // Development Tasks
    {
        id: 'design',
        data: { label: 'Design' },
        position: { x: 100, y: 50 },
        style: {
            width: 180,
            height: 60,
            background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
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
        position: { x: 400, y: 50 },
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
        position: { x: 700, y: 50 },
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
        position: { x: 100, y: 300 },
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
        position: { x: 400, y: 300 },
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
        position: { x: 700, y: 300 },
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