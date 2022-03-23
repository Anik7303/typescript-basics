"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var data = response.data;
    var id = data.id;
    var title = data.title;
    var finished = data.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The Todo with ID: ".concat(id, "\n  Has a title of: ").concat(title, "\n  Is it finished: ").concat(completed, "\n  "));
};
