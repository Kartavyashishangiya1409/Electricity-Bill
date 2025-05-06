function billCheck(){

    let Unit = document.getElementById("units").value;
    let Ammount = document.getElementById("Ammount");
    let x;
    let tax;
    let totalCharge;

    if (Unit <= 50) {
        x = +Unit * 0.5;
        tax = +x * 0.2;
        totalCharge = +x + +tax;
        Ammount.innerText = Math.ceil(totalCharge).toLocaleString("en-IN");
    }
    if (Unit > 50 && Unit <= 150){
        x = ((+Unit - 50) * 0.75) + 25;
        tax = +x * 0.2;
        totalCharge = +x + +tax;
        Ammount.innerText = Math.ceil(totalCharge).toLocaleString("en-IN");
    }
    if (Unit > 150 && Unit <= 250){
        x = ((+Unit - 150) * 1.2) + 100;
        tax = +x * 0.2;
        totalCharge = +x + +tax;
        Ammount.innerText = Math.ceil(totalCharge).toLocaleString("en-IN");
    }
    if (Unit > 250){
        x = ((+Unit - 250) * 1.5) + 220;
        tax = +x * 0.2;
        totalCharge = +x + +tax;
        Ammount.innerText = Math.ceil(totalCharge).toLocaleString("en-IN");
    }
}