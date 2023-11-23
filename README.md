This is a Next.js starter template/example of using next auth with postgres.

Check out the live app [here](https://next-auth-starter-theta.vercel.app)

## To make it work locally: 

- go to your Vercel Projects -> Storage -> Create database -> Postgres
- run `vercel link` in your project folder
- run `vercel env pull .env.development.local` in your project folder
- in your .env file: 
    - comment out `VERCEL=1` row
    - add `NEXTAUTH_URL=http://localhost:3000`
    - add `NEXTAUTH_SECRET=yoursecret`
- in your Project's Storage -> Data -> Query, Create a table with SQL

```
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
```

Install the dependencies:

```bash
npm install 
# or
yarn install 
# or
pnpm install
# or
bun install 
```

Then, run the development server:

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

## To make it work in production:

add env variables on Vercel:
- go to your Project -> Settings -> Environment Variables
    - create new Key:`NEXTAUTH_URL` & Value:`https://yourVercelUrlGoesHere`
    - create new Key:`NEXTAUTH_SECRET` & Value: `YourSecret123`
