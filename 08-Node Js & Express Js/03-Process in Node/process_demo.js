
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Arguments:", process.argv);

// Example: node process_demo.js name=Prathamesh
const args = process.argv.slice(2);
console.log("Command Line Args:", args);
