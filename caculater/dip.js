function getadd() {
    let term1, term2, result;
    term1 = parseInt(document.getElementById('term1').value);
    term2 = parseInt(document.getElementById('term2').value);
    result = term1 + term2;
    document.getElementById('result').value = result;


}
function getsub(){
    let term1,term2,result;
    term1 = parseInt(document.getElementById('term1').value);
    term2 = parseInt(document.getElementById('term2').value);
    result = term1 - term2;
    document.getElementById('result').value = result;

}

function getmul() {
    let term1,term2,result;
    term1 = parseInt(document.getElementById('term1').value);
    term2 = parseInt(document.getElementById('term2').value);
    result = term1 * term2;
    document.getElementById('result').value = result;


}
function getdivi() {
    let term1, term2, result;
    term1 = parseInt(document.getElementById('term1').value);
    term2 = parseInt(document.getElementById('term2').value);
    result = term1 / term2;
    document.getElementById('result').value = result;


}