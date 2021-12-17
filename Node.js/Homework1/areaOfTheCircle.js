const arguments = process.argv.slice(2)
function areaOfTheCircle(r){
    let area = ((Math.PI) * (r * r));
    console.log("Yarıçapı "+ r + " olan dairenin alanı: " +area);

}
areaOfTheCircle(arguments[0]*1);

// Ornek kullanim sekli : node areaOfTheCircle 3