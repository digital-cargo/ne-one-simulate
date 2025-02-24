// frontend/src/components/ne-one-simulate/swim-lane-data.ts
import { Node, Edge } from "@xyflow/react";

interface Actor {
  serverEndpoint: string;
  action: string
}

interface ActorConfig {
    serverEndpoint: string;
    name: string;
    color: string;
}

const actors: ActorConfig[] = [
    {
        serverEndpoint: 'http://localhost:8080',
        name: 'Forwarder',
        color: 'red',
    },
    {
        serverEndpoint: 'http://localhost:8081',
        name: 'Carrier',
        color: '#0000FF',
    },
    {
        serverEndpoint: 'http://localhost:8082',
        name: 'ULD Management Provider',
        color: '#ec6802',
    },
];


  
  const actorData: Actor[] = [
    {
      serverEndpoint: "http://localhost:8080",
      action: "Subscribe Carrier to ShipmentRecord"
    },
    {
      serverEndpoint: "http://localhost:8080",
      action: "Create ShipmentRecord"
    },
    {
      serverEndpoint: "http://localhost:8081",
      action: "Received Notifications"
    },
    {
      serverEndpoint: "http://localhost:8081",
      action: "Get Shipment Record"
    },
    {
      serverEndpoint: "http://localhost:8081",
      action: "Change gross weight of Piece"
    },
    {
      serverEndpoint: "http://localhost:8080",
      action: "Received change request"
    },
    {
      serverEndpoint: "http://localhost:8080",
      action: "Accept change request"
    },
    {
      serverEndpoint: "http://localhost:8081",
      action: "Received Notifications about LO_Updated"
    },
    {
      serverEndpoint: "http://localhost:8081",
      action: "Check if object updated"
    }
  ];


const leftmostX = 100; // Fixed left position for labels

const groupedNodes: Record<string, number> = {}; // Track y positions per serverEndpoint

const initialNodes: Node[] = actorData.map((actor, index) => {
  const actorConfig = actors.find((config) => config.serverEndpoint === actor.serverEndpoint);
  const actorIndex = actors.findIndex((config) => config.serverEndpoint === actor.serverEndpoint);
  
  if (!actorConfig) return null; // Safety check

  // If this serverEndpoint is seen for the first time, store y position
  if (!(actor.serverEndpoint in groupedNodes)) {
    groupedNodes[actor.serverEndpoint] = 50 + actorIndex * 100;
  }

  return {
    id: (index + 1).toString(),
    type: "default",
    position: { x: leftmostX + index * 200, y: groupedNodes[actor.serverEndpoint] },
    data: { label: `${actorConfig.name}: ${actor.action}` },
  };
}).filter(Boolean); 

const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
    { id: "e5-6", source: "5", target: "6" },
    { id: "e6-7", source: "6", target: "7" },
    { id: "e7-8", source: "7", target: "8" },
    { id: "e8-9", source: "8", target: "9" },
  ];
  

export { initialNodes, initialEdges };

