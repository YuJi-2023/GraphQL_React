const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");

app.use(cors());


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
