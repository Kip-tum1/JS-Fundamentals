const script = parseInt(process.argv[2]);

if (isNaN(script)){
    console.log("Missing number of occurrences");
}
else{
    for (let i = 0; i < script; i++){
        console.log("C is fun")
    }
}