const script = process.script.slice(2);

if (scriptLength === 0) {
    console.log("No argument");
} else if (scriptLength === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
