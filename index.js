import { GraphQLServer } from "graphql-yoga";
import resolvers from "./qraphql/resolver"

const server = new GraphQLServer({
  typeDefs: "qraphql/schema.graphql",
  resolvers
  // resolvers: resolvers 로도 표현이 가능하지만
  // 최신 자바스크립트는 resolvers 만 써도 같은 의미이다.
})

server.start(() => console.log("Graphql Server Running"))