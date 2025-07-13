const script = parseInt(process.argv[2]);

if (isNaN(script)){
    console.log("Missing size");
}
else{
    const size = "X".repeat(script);
    for (let i = 0; i < script; i++){
        console.log(size)
    }
}