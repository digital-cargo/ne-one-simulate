import React from 'react';
import { ReactFlow, Background, Controls, MiniMap, Node, Edge } from "@xyflow/react";
export interface PostmanAction {
    id: string;
    actor: string;
    name: string;
    status: 'default' | 'success' | 'failed';
}

export interface SwimLaneData {
    actions: PostmanAction[];
}

interface SwimLaneProps {
    data: SwimLaneData;
}

const SwimLaneDiagram: React.FC<SwimLaneProps> = ({ data }) => {
    // Get unique actors to define lanes
    const actors = Array.from(new Set(data.actions.map(action => action.actor)));
    const laneHeight = 100;
    const laneSpacing = 50;

    // Create nodes for each action
    const nodes: Node[] = data.actions.map((action, index) => {
        const laneIndex = actors.indexOf(action.actor);
        return {
            id: action.id,
            data: { label: action.name },
            position: { x: index * 150, y: laneIndex * (laneHeight + laneSpacing) },
            style: {
                backgroundColor:
                    action.status === 'success'
                        ? 'green'
                        : action.status === 'failed'
                            ? 'red'
                            : 'lightgray',
                padding: 10,
                border: '1px solid #222',
                borderRadius: 5,
                color: 'white'
            },
        };
    });

    // Optionally, connect sequential actions for the same actor
    const edges: Edge[] = [];
    actors.forEach(actor => {
        const actionsForActor = data.actions
            .filter(action => action.actor === actor)
            .sort((a, b) => a.id.localeCompare(b.id));
        for (let i = 1; i < actionsForActor.length; i++) {
            edges.push({
                id: `e-${actionsForActor[i - 1].id}-${actionsForActor[i].id}`,
                source: actionsForActor[i - 1].id,
                target: actionsForActor[i].id,
            });
        }
    });

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <ReactFlow nodes={nodes} edges={edges}>
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    );
};

export default SwimLaneDiagram;