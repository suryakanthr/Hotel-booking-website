const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
		"X-RapidAPI-Key": "6168ab4efdmshcfc49d6e3154a40p109001jsn8cd3c6b8d322"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

let headerTemplate = `<a href="./index.html"><img id="logo"  src="./assests/images/logo.png" alt="logo"></a>
    <button id="login-bt" type="button" onclick="loginFunc() ,disablePayNowBt()" class="btn btn-light" data-toggle="modal" data-target="#exampleModal">LOGIN</button>`
document.getElementById("header-div").innerHTML = headerTemplate;

let footerTemplate = `<button id="contact-us" type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-contact-us">Contact Us</button>
    <p id="copyright">&#169; 2020 ROOM SEARCH PVT. LTD.</p>
    <div id="socialmedia-links">
        <a  href="https://www.facebook.com/" target="_blank"><img class="socialmedia" src="./assests/images/facebook.png" alt="facebook"></a>
        <a  href="https://www.instagram.com/" target="_blank"><img class="socialmedia" src="./assests/images/instagram.png" alt="instagram"></a>
        <a  href="https://twitter.com/explore" target="_blank"><img class="socialmedia" src="./assests/images/twitter.png" alt="twitter"></a>
    </div>`
document.getElementById("footer-div").innerHTML = footerTemplate;

var loggedin = false;
var username,password;

function storeCredentials(){
    if(loggedin==false){
        alert('Successfully loggedin');
        document.getElementById("login-bt").innerText = "LOGOUT";
        username = document.getElementById('name').value;
        password = document.getElementById('pwd').value;
        localStorage.setItem("currentloggedin",username);
        localStorage.setItem("userPassword",password);
        loggedin=true;
    }
    else{
        loggedin=false;
        localStorage.clear();
    }
}
function loginFunc(){
    if(loggedin==false){
        document.getElementById("login-bt").setAttribute("data-toggle","modal");
        document.getElementById("login-bt").setAttribute("data-target","#exampleModal");
        loggedin = true;
    }
    else{
        localStorage.clear();
        document.getElementById("login-bt").removeAttribute("data-toggle");
        document.getElementById("login-bt").removeAttribute("data-target");
        document.getElementById("exampleModal").modal = "hide";
        document.getElementById("login-bt").innerText = "LOGIN";
        loggedin = false;
    }
}

function enablePayNowBt(){
    if(loggedin==true)
        document.getElementById("paynow-bt").disabled = false;
}

function disablePayNowBt(){
    if(loggedin==false)
        document.getElementById("paynow-bt").disabled = true;
}