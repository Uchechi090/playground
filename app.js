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
var http = require("http");    //http is a module in nodejs

var server = http.createServer(function(req, res) { //the method(function) for creating a server;takes a function with two arguments: req object(for hndling requests from a client) & res object(for sending a response to the client);both objects go with headers(e.g. content-type, status)- which are extra details about the req or res
    console.log("request was made: " + req.url) //url is a property on the req object for getting the url of that particular request
    //creating headers for the res object
    res.writeHead(200, {"Content-Type": "text/plain"});                                                                                                        
    res.end("Hey there!"); //this is to end the response(res) and send the data as plain text(as specified in the headers above)

});

server.listen(3000, "127.0.0.1") //specifying ports to listen for requests(this is localhost address & port though)
console.log("now listening to port 3000"); //good to log a message when listening to a port
