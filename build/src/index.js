const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3000;

app.get(`/health`, (req, res) => {
  res.send({
    healthy: true
  }).status(200);
});

app.get(`/hello`, (req, res) => {
  console.log(`Greeting user!`);
  res.send("Hello new driver!").status(200);
});

app.get(`/hello/:user`, (req, res) => {
  let user = req.params.user;
  console.log(`Greeting ${user}!`);
  res.send(`Hello, ${user}!`).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
