const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const { username, password } = require("./env");
const app = express();

app.use(cors);

mongoose.connect(
  `mongodb://${username}:${password}@ds159489.mlab.com:59489/gql-react-project`
);
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening at 4000");
});
