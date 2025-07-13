const script = process.argv;

if (script[2] === undefined || script[3] === undefined) {
    console.log("No argument");
} else {
    console.log(`${script[2]} is ${script[3]}`);
}