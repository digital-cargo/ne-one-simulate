This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy with Docker

You can also deploy this application using Docker. Make sure you have Docker installed on your machine before proceeding.

### Building and Running the Docker Container

1. Build the Docker image:
```bash
docker build -t ne-one-simulate-web .
```

2. Run the container:
```bash
docker run -p 3000:3000 ne-one-simulate-web
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Docker Development Tips

- Use `docker ps` to see running containers
- Use `docker stop <container-id>` to stop a running container
- Use `docker-compose up` if you need to run multiple services together

Next.js through Docker supports all Next.js features including:
- Server-side rendering
- Static site generation
- API routes
- Image optimization
- and more

For more information about Docker deployment, check out the [Next.js Docker deployment documentation](https://nextjs.org/docs/deployment#docker-image).
