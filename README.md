#Simple Books API using Next.js 13 and Neon
Developed a REST API that allows you to reserve a book. This API is fully founctional with SQL calls to Neon Database.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Endpoints
Status
GET /status

Returns the status of the API.

List of books
GET /books

Returns a list of books.

Optional query parameters:

type: fiction or non-fiction
limit: a number between 1 and 20.
Get a single book
GET /books/:bookId

Retrieve detailed information about a book.

Submit an order
POST /orders

Allows you to submit a new order. Requires authentication.

The request body needs to be in JSON format and include the following properties:

bookId - Integer - Required
customerName - String - Required
Example

POST /orders/
Authorization: Bearer <YOUR TOKEN>

{
  "bookId": 1,
  "customerName": "John"
}
The response body will contain the order Id.

Get all orders
GET /orders

Allows you to view all orders. Requires authentication.

Get an order
GET /orders/:orderId

Allows you to view an existing order. Requires authentication.

Update an order
PATCH /orders/:orderId

Update an existing order. Requires authentication.

The request body needs to be in JSON format and allows you to update the following properties:

customerName - String
Example

PATCH /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>

{
  "customerName": "John"
}
Delete an order
DELETE /orders/:orderId

Delete an existing order. Requires authentication.

The request body needs to be empty.

Example

DELETE /orders/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>
API Authentication
To submit or view an order, you need to register your API client.

POST /api-clients/

The request body needs to be in JSON format and include the following properties:

clientName - String
clientEmail - String
Example

{
   "clientName": "Postman",
   "clientEmail": "valentin@example.com"
}
The response body will contain the access token. The access token is valid for 7 days.

Possible errors

Status code 409 - "API client already registered." Try changing the values for clientEmail and clientName to something else.
