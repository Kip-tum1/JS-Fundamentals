const script = parseInt(process.argv[2]);

if (isNaN(script)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${script}`);
}