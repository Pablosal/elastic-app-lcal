const some_data = require('./some_products.json');
var axios = require('axios');

some_data.forEach((data, idx) => {
  const newIdx = idx + 1;
  var config = {
    method: 'put',
    url: `http://localhost:9200/productos/_doc/${newIdx}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
