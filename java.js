/**
 * Created by Gintarė on 2017-07-13.
 */
function convertToF(celsius) {
    return celsius * 9/5 + 32;
}
document.getElementById("cel").innerHTML = "60<sup>o</sup>C is " + convertToF(60) + " <sup>o</sup>F";

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("far").innerHTML = "45<sup>o</sup>F is " +  toCelsius(45) + "<sup>o</sup>C";