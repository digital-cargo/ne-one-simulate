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

export default actors;