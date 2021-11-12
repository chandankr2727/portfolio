document.getElementById("cancelicon").style.display="none"

function list(){
    var element=document.getElementById("menu").style
    element.display="flex"
    console.log(element);
    var nav = document.getElementsByClassName("navbar")[0].style;
    nav.height="80vh"
    nav.width="75%"
    nav.right="0px"
    document.getElementById("profile").style.display="none"
    document.getElementById("cancelicon").style.display="block"
    document.getElementById("menuicon").style.display="none"
    
}
function cancel(){
    var nav = document.getElementsByClassName("navbar")[0].style;
    nav.height="10vh"
    nav.position="fixed"
    nav.width="100%"
    document.getElementById("profile").style.display="block"
    document.getElementById("cancelicon").style.display="none"
    document.getElementById("menuicon").style.display="block"
    document.getElementById("menu").style.display="none"
}