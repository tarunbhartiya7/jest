const axios = require("axios");

function sum(a, b) {
  return a + b;
}

function obj(name) {
  return { name };
}

function api() {
  try {
    return axios.get("https://jsonplaceholder.typicode.com/todos/1");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  sum,
  obj,
  api,
};
