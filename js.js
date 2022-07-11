function cong(){
    let nb1=Number(document.getElementById('num1').value)
    let nb2=Number(document.getElementById('num2').value)
    // let result=Number('nb1') + Number('nb2')
    document.getElementById("result").innerHTML= nb1 + nb2
}
function tru(){
    let nb1=Number(document.getElementById('num1').value)
    let nb2=Number(document.getElementById('num2').value)
    document.getElementById("result").innerHTML=nb1-nb2
}
function nhan(){
    let nb1=Number(document.getElementById('num1').value)
    let nb2=Number(document.getElementById('num2').value)
    document.getElementById("result").innerHTML=nb1*nb2
}
function chia(){
    let nb1=Number(document.getElementById('num1').value)
    let nb2=Number(document.getElementById('num2').value)
    document.getElementById("result").innerHTML=nb1/nb2
}
