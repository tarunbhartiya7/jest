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

function runCallback(num, callback) {
  const result = num * 5;

  if (result < 100) {
    callback(result);
  }
}

module.exports = {
  sum,
  obj,
  api,
  runCallback,
};
