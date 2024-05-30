## Technology Stack
The PMANIA web app utilizes a modern tech stack to power its online ordering platform. This stack likely includes technologies such as React, Next.js for server-side rendering, Prisma with PostgreSQL for database management, authentication libraries like Auth.js or JWT for user authentication, Stripe for payment processing, Docker for containerization, and state management solutions like React Query or Zustand.

## User-Friendly Interface
PMANIA prioritizes a user-friendly interface to ensure a seamless ordering experience for its customers. Leveraging React and Next.js, developers craft intuitive interfaces that enable users to browse menus, customize orders, and complete transactions with ease.

## Authentication and User Profiles
The PMANIA web app allows users to create accounts and log in to the platform to place orders. Robust authentication features are implemented using libraries like Auth.js or JWT, enabling secure user authentication and profile management.

## Database Management
PMANIA relies on Prisma with PostgreSQL to manage crucial data related to restaurant menus, user profiles, orders, and transactions. The database infrastructure ensures efficient storage, retrieval, and management of data to support the smooth operation of the online ordering platform.

## Payment Integration
To facilitate seamless transactions, PMANIA integrates with payment gateways such as Stripe. This integration enables secure and reliable processing of payments, allowing users to make purchases using various payment methods with confidence.

## State Management
Efficient state management is essential for PMANIA to handle the complexities of the ordering process. Solutions like React Query or Zustand are utilized to manage application state, ensuring real-time updates and a responsive user experience throughout the ordering journey.

In summary, the PMANIA web app is an online ordering platform for fast food that leverages a modern tech stack to deliver a user-friendly interface, robust authentication, efficient database management, seamless payment integration, and effective state management for an exceptional ordering experience.

## Running Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Prisma

pnpm install -g prisma

npx prisma init

npx prisma migrate deploy

npx prisma generate

