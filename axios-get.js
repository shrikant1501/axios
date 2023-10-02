const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => {

// console.log(resp.status);
// console.log(resp.statusText);
// console.log(resp.body);
console.log(resp.data);

});