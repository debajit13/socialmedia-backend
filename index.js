const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
const format = require('date-format');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');
const file = fs.readFileSync('./swagger.yml', 'utf8');
const swaggerDocument = YAML.parse(file);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'hello OneApp',
  });
});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocials = {
    username: 'debajit13',
    followers: 66,
    following: 70,
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  };
  res.status(200).json(instaSocials);
});

app.get('/api/v1/facebook', (req, res) => {
  const facebookSocials = {
    username: 'debajit-mallick',
    followers: 2000,
    following: 1000,
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  };
  res.status(200).json(facebookSocials);
});

app.get('/api/v1/linkedin', (req, res) => {
  const linkedinSocials = {
    username: 'debajitmallick',
    followers: 2400,
    following: 60,
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  };
  res.status(200).json(linkedinSocials);
});

app.get('/api/v1/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    params: req.params.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
