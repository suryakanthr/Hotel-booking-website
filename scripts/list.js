var list = document.getElementById("list-view");
var map = document.getElementById("map-view");
var list_view_bt = document.getElementById("list-view-bt");
var map_view_bt = document.getElementById("map-view-bt");
      
function listView() {
    if(list.style.display === "none"){
        map_view_bt.classList.remove("btn-primary");
        map_view_bt.classList.add("btn-light");
        list_view_bt.classList.remove("btn-light");
        list_view_bt.classList.add("btn-primary");
        map.style.display = "none";
        list.style.display = "initial";
    }
}

function mapView() {
    if(map.style.display === "none"){
        list_view_bt.classList.remove("btn-primary");
        list_view_bt.classList.add("btn-light");
        map_view_bt.classList.remove("btn-light");
        map_view_bt.classList.add("btn-primary");
        list.style.display = "none";
        map.style.display = "initial";
    }
}