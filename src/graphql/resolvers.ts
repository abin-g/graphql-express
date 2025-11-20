import { User } from "./types";

let users: User[] = [
  { id: "1", name: "Abin", age: 25 },
  { id: "2", name: "Karthikeyan", age: 26 },
];

export const resolvers = {
  hello: () => "Hello GraphQL + TS!",

  users: (): User[] => users,

  user: ({ id }: { id: string }): User | undefined =>
    users.find((u) => u.id === id),

  addUser: ({ name, age }: { name: string; age: number }): User => {
    const user = { id: String(users.length + 1), name, age };
    users.push(user);
    return user;
  },
};
