function hello(name) {
   if (name === undefined) {
       name = "World";
   }

   if (name === "Lathan") {
    return "Hello, "+ name + ", you are the king of all";
   } else {
    return "Hello, " + name + "!";

   }

   //return "Hello, " + name + "!";
}

module.exports = hello;