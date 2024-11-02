const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
