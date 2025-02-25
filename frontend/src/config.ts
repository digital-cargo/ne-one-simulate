export interface Actor {
    displayName: string;
    serverEndpoint: string;
    color?: string;
}

export interface Config {
    actors: Actor[];
}

const config: Config = {
    actors: [
        {
            displayName: 'Forwarder',
            serverEndpoint: 'http://localhost:8080',
            color: '#FF0000'
        },
        {
            displayName: 'Carrier',
            serverEndpoint: 'http://localhost:8081',
            color: '#0000FF'
        },
        {
            displayName: "Jettainer",
            serverEndpoint: 'http://localhost:8082',
            color: '#ec6802'
        }
    ]
};

export default config;