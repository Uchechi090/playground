var fs = require("fs");

// var events = require("events");  - 10a
// var util = require("util");   -  b

//var stuff = require("./stuff");  - 9b

//var counter = require("./count");  - 9a

//1
//console.log("hey uche");

//2
// setTimeout(function () {
//     console.log("3 seconds have passed");
// }, 3000);

//3
// var time = 0;

// setInterval(() => {
//     time += 2;
//     console.log(time + " seconds have passed");
// }, 2000);

//4
// var time = 0;

// var timer = setInterval(() => {
//     time += 2;
//     console.log(time + " seconds have passed");

//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

//5
//console.log(__dirname);
//console.log(__filename);

//6 - normal function statement
// function sayHi() {
//     console.log("hi");
// };

// sayHi();

//7 - function expression
// var sayBye = function () {
//     console.log("bye");
// };

// sayBye();

//8 - function that takes a function as a parameter
// function callFunction(fun) {
//     fun();
// }

// var sayBye = function () {
//     console.log("bye");
// };

// callFunction(sayBye);

//9 - using Modules and require()
//a
//console.log(counter(["shaun", "crystal", "ryu"]));
//b - module patterns
// console.log(stuff.counter(["shaun", "crystal", "ryu"]));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));

//10 - the Node Event Emitter
//a
// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(msg){
//     console.log(msg);
// });

// myEmitter.emit("someEvent", "the event was emitted");

//b - using the util module to make an object to inherit the EventEmitter
// var Person = function (name) {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter); //here we want that the Person object
//inherits the eventEmitter so new Person objects
//can have their custom events

// var james = new Person("james");
// var mary = new Person("mary");
// var ryu = new Person("ryu");

// var people = [james, mary, ryu];

// people.forEach(function (person) {
//     person.on("speak", function (msg) {
//         console.log(person.name + " said: " + msg);
//     });
// });

// james.emit("speak", "hey you");
// mary.emit("speak", "I want an apple");

//11 - Reading and Writing files(fs)
//var readMe = fs.readFileSync("readMe.txt", "utf8"); //this is blocking code: it executes first before
//going to the next line(Sync = synchronous);
//function takes to arguments, file to be read and
//character encoding of file
//console.log(readMe);
//fs.writeFileSync("writeMe.txt", readMe);

// fs.readFile("readMe.txt", "utf8", function(err, data) { //this is non-blocking = asynchronous;without Sync
//     //console.log(data);
//     fs.writeFile("writeMe.txt", data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// });
//console.log("test");

//12 - Creating and Removing Directories
// fs.unlinkSync("play.txt"); //this is Synchronous code(blocking code) and deletes a file
//also make sure that the file exists

// fs.unlink('play.txt', function(err) { //while this is Asynchronous(non0blocking) and so requires a callback fn
//     if (err) throw err;
//     console.log('File deleted');
//    });

// fs.mkdirSync("sturvs"); //creates directories and is Synchronous
// fs.rmdirSync("sturvs"); //removes directories and is Synchronous

// fs.mkdir("sturvs", function () { //creates directories and is Asynchronous
//     fs.readFile("readMe.txt", "utf8", function (err, data) {
//         fs.writeFileSync("./sturvs/wrote.txt", data);
//     });
// });

// fs.rmdirSync("sturvs"); //will say the folder is not empty; better way is below
// fs.unlink("./sturvs/wrote.txt", function() {
//     fs.rmdirSync("sturvs")
// });

//another way(extra)
// var count = 0;
// fs.readdir('dirname',function(err,files){
//   count = files.length;
//   files.forEach(function(file){
//     fs.unlink('./dirname/'+file,function(err){
//       count = count - 1;
//       if(count == 0 ){
//         console.log("no files in the directory");
//         fs.rmdir('dirname',function(err){
//           if(err){throw err;}else{console.log("deleted directory");}
//         });
//       }else{
//         console.log("files remaining in the directory are "+count);
//       }
//     });
//   });
// });

//13 - Creating a Server
var http = require("http"); //http is a module in nodejs

// var server = http.createServer(function (req, res) { //the method(function) for creating a server;takes a function with two arguments: req object(for hndling requests from a client) & res object(for sending a response to the client);both objects go with headers(e.g. content-type, status)- which are extra details about the req or res
//     console.log("request was made: " + req.url) //url is a property on the req object for getting the url of that particular request
//     //creating headers for the res object
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hey there!"); //this is to end the response(res) and send the data as plain text(as specified in the headers above)

// });

// server.listen(3000, "127.0.0.1") //specifying ports to listen for requests(this is localhost address & port though)
// console.log("now listening to port 3000"); //good to log a message when listening to a port

//14 - Streams and Buffers
//a - Readable and Writable Streams
var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readable.txt", "utf8") //createReadStream is the module for creating a readable stream
// var myWriteStream = fs.createWriteStream(__dirname + "/writable.txt");  //""""

// myReadStream.on("data", function (chunk) { //on() is an event emitter on createReadStream that listens for data
//     console.log("new chunk received:");   //and fires a function once the data is recieved
//     //console.log(chunk);
//     myWriteStream.write(chunk); //write() is for writing to a stream
// });

//b - Pipes: is more efficient that reading and writing streams manually like above
// myReadStream.pipe(myWriteStream); //pipe() is only used on Readable Stream because we read data to write to... maybe a client etc

// var server = http.createServer(function (req, res) { //here we are reading stream and sending to client via the res object
//     console.log("request was made: " + req.url)

//     res.writeHead(200, { "Content-Type": "text/plain" });
//     var myReadStream = fs.createReadStream(__dirname + "/readable.txt", "utf8")
//     myReadStream.pipe(res);

// });

// server.listen(3000, "127.0.0.1")
// console.log("now listening to port 3000");

//15 - Serving HTNL Pages
// var server = http.createServer(function (req, res) {
//     console.log("request was made: " + req.url)

//     res.writeHead(200, { "Content-Type": "text/html" });
//     var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8")
//     myReadStream.pipe(res);

// });

// server.listen(3000, "127.0.0.1")
// console.log("now listening to port 3000");

//16 - Serving JSON Data
// var server = http.createServer(function (req, res) {
//     console.log("request was made: " + req.url)

//     res.writeHead(200, { "Content-Type": "application/json" }); //change here
//     //we won't be reading or writing streams here; rather we send the data to the res object
//     var myObj = {
//         name: "Uche",
//         job: "Developer",
//         age: 30
//     }
//     res.end(JSON.stringify(myObj))    //here we can't just pass in the myObj because end() takes only streams and buffers; so we have to make the object a stream and that has to be in json format
// });

// server.listen(3000, "127.0.0.1")
// console.log("now listening to port 3000");

//17 - Basic Routing : basically creating urls
// var server = http.createServer(function (req, res) {
//     console.log("request was made: " + req.url)
//     if (req.url === "/home" || req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" })
//         fs.createReadStream(__dirname + "/index.html").pipe(res)
//     } else if (req.url === "/contact") {
//         res.writeHead(200, { "Content-Type": "text/html" })
//         fs.createReadStream(__dirname + "/contact.html").pipe(res)
//     } else if (req.url === "/api/devs") {
//         var devs = [{ name: "Uche", age: "30" }, { name: "Samuel", age: "32" }]
//         res.writeHead(200, { "Content-Type": "application/json" })
//         res.end(JSON.stringify(devs))
//     }else{
//         res.writeHead(404, { "Content-Type": "text/html" })
//         fs.createReadStream(__dirname + "/404.html").pipe(res)
//     }
// });

// server.listen(3000, "127.0.0.1")
// console.log("now listening to port 3000");

//18 - Package.json : it is to be created by you; which then creates the node modules
//"npm init" is the command to use; follow the prompt and provide the necessary details as you hit "enter"

//19 - Introduction to Express
var express = require("express");

var app = express();

// app.get("/", function(req, res){
//     res.send("this is the homepage")
// })
// app.get("/contact", function(req, res){
//     res.send("this is the contact page")
// })

//app.listen(3000)

//types of requests(http verbs or methods on express) & their responses
//- GET - app.get("route", fn) - route = url,
//- POST - app.post("route", fn),
//- DELETE - app.delete("route", fn),
//- PUT,

//20 - Express Route Parameter(Params)
// app.get("/profile/:id", function(req, res){ //could be :name or anything(param you like)
//     res.send("You requested to see a profile with the id of " + req.params.id)
// })

// app.listen(3000)

// //(21)Template Engines(1): view engine - e.g ejs
// //if you want to send files as a response instead: use the sendFile() like so
// app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", function(req, res) {
//   res.sendFile(__dirname + "/contact.html");
// });

// // app.get("/profile/:name", function (req, res) {
// //     res.send("You are viewing the profile of " + req.params.id)
// // })

// //to render a view
// app.get("/profile/:name", function(req, res) {
//   var data = { age: 29, job: "dev" };
//   res.render("profile", { person: req.params.name, data: data }); //to pass data to a view, we add anaobject as a second arg to the render()
// });

// app.listen(3000);

//(22)Template Engines(2):
// app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", function(req, res) {
//   res.sendFile(__dirname + "/contact.html");
// });

// //to render a view
// app.get("/profile/:name", function(req, res) {
//   var data = { age: 29, job: "dev", hobbies: ["eating", "fishing", "reading"] };
//   res.render("profile", { person: req.params.name, data: data });
// });

// app.listen(3000);

//(23)Partial template
// app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//   res.render("index");
// });

// app.get("/contact", function(req, res) {
//   res.render("contact");
// });

// app.get("/profile/:name", function(req, res) {
//   var data = { age: 29, job: "dev", hobbies: ["eating", "fishing", "reading"] };
//   res.render("profile", { person: req.params.name, data: data });
// });

//app.listen(3000);

//(24)Middleware & Static files
//Middleware is essentially the code that runs between the request and response
//app.set("view engine", "ejs");
// app.use("/assets", function(req, res, next) {
//   //writing a middleware
//   console.log(req.url);
//   next(); //must be inserted to say the next code should be run after this middleware is run
// });

//However, express has its method for writing a middleware instead of the above
// app.use("/stuff", express.static("stuff")); //here we don't need to use the next() because it is taken care of by express

// app.get("/", function(req, res) {
//   res.render("index");
// });

// app.get("/contact", function(req, res) {
//   res.render("contact");
// });

// app.get("/profile/:name", function(req, res) {
//   var data = { age: 29, job: "dev", hobbies: ["eating", "fishing", "reading"] };
//   res.render("profile", { person: req.params.name, data: data });
// });

// app.listen(3000);

//(25)Query Strings: are additional data added onto HTTP requests in the form of name-value pairs; starts with a question mark
//after the url and then add the name value pairs separated by ampersands(&) if there's more than one query
// app.set("view engine", "ejs");

// app.use("/stuff", express.static("stuff"));

// app.get("/", function(req, res) {
//   res.render("index");
// });

// //When using express, it parses queries out of the box for us; query is a property on the request object
// app.get("/contact", function(req, res) {
//   //console.log(req.query) //example
//   res.render("contact", {qs: req.query});
// });

// app.get("/profile/:name", function(req, res) {
//   var data = { age: 29, job: "dev", hobbies: ["eating", "fishing", "reading"] };
//   res.render("profile", { person: req.params.name, data: data });
// });

// app.listen(3000);

//(26)Handling POST requests
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false }); //a middleware

app.set("view engine", "ejs");

app.use("/stuff", express.static("stuff"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.render("contact", { qs: req.query });
});

app.post("/contact",urlencodedParser, function(req, res) {//used here; urlencodedParser gave us access to the data on the body
  console.log(req.body)                                   //property on the request object
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", function(req, res) {
  var data = { age: 29, job: "dev", hobbies: ["eating", "fishing", "reading"] };
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
