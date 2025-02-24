interface ActorConfig {
    serverEndpoint: string;
    name: string;
    color: string;
}

const actors: ActorConfig[] = [
    {
        serverEndpoint: 'http://localhost:8080',
        name: 'Forwarder',
        color: '#008274',
    },
    {
        serverEndpoint: 'http://localhost:8081',
        name: 'Carrier',
        color: '#EC0016',
    },
    {
        serverEndpoint: 'http://localhost:8082',
        name: 'ULD Management Provider',
        color: '#ec6802',
    },
];

export default actors;