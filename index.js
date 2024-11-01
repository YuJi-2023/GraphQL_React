const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userData = require("./MOCK_DATA.json");

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
