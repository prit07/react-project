  // for Fortunata Window Hardware - Decorative Holdback - Mocha
  function changhmocha() {
    var mochaqty =parseFloat(document.getElementById("mochaqty").value);
    var mochaprice =parseFloat( document.getElementById("mochaprice").value);
    var mochasubtotle = mochaqty * mochaprice
   
    document.getElementById("mochasubtotle").value = mochasubtotle;



    var z = mochasubtotle + parseFloat(document.getElementById("bronzesubtotle").value);
    document.getElementById("totalprice").value= z;

}

// for Woven Trellies Window Hardware - Clip Rings - Bronze
function changbronze() {
    var bronzeqty = parseFloat(document.getElementById("bronzeqty").value);
    var bronzeprice = parseFloat(document.getElementById("bronzeprice").value);
    var bronzesubtotle = bronzeqty * bronzeprice

    document.getElementById("bronzesubtotle").value = bronzesubtotle;


    var z = bronzesubtotle + parseFloat(document.getElementById("mochasubtotle").value);
    document.getElementById("totalprice").value="$"+ z;
}
// total prize 


function removemocha(){
    document.getElementsByClassName("mocha").style.display="none"
}

function removebronze(){
    document.getElementsByClassName("bronze").style.display="none"
}

