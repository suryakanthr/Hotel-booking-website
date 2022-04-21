var view = false;
function viewMore(){
    if(view == false){
        document.getElementById("city-cards-2").style.display = "flex";
        document.getElementById("viewmore").innerText = "View Less";
        view = true;
    }
    else{
        view = false;
        document.getElementById("viewmore").innerText = "View More";
        document.getElementById("city-cards-2").style.display = "none";
    }
    
}