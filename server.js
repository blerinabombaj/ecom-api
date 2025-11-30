const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Ecom API Live!'));
app.get('/metrics', (req, res) => {
  res.send('# HELP requests_total Total requests\n# TYPE requests_total counter\nrequests_total 123');
});
app.listen(3000, () => console.log('Running on 3000'));
