import express, { Request, Response } from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server";

const app = express();
const port = 3000;

const typeDefs = gql`
  type User {
    name: string
    email: string
    phone: string
    avatar: string
    userId: string
  }

  type Posts {
    title: string
    description: string
    time: string
  }
`;

app.use(cors());

app.get("/", (_req: Request, res: Response): Response => {
  return res.send("Hello Earth!");
});

app.get("/user", (_req: Request, res: Response): Response => {
  return res.send({
    name: "Erika",
    email: "evig@gmail.com",
    phone: "+18888888888",
    avatar: "logo.svg",
    userId: "1",
  });
});

app.get("/user/:user/posts", (req: Request, res: Response): Response => {
  const userId = req.params.user;

  if (userId === "1") {
    return res.send({
      posts: [
        {
          title: "hello world 1",
          description: "some description in here",
          time: "2010-01-01",
        },
        {
          title: "hello world 2",
          description: "some description in here",
          time: "2011-01-01",
        },
      ],
    });
  }
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
