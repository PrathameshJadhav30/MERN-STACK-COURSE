let tools = ["hammer", "wrench", "screwdriver"];
tools.splice(1, 1, "pliers");
console.log(tools);
console.log("First tool:", tools[0]);
console.log("Last tool:", tools[tools.length - 1]);