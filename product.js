// selecting Navbar, selecting Menu

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right =0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Search Functionality
var productlist = document.getElementById("productlist")
var search = document.getElementById("search")
var searchlist = productlist.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    for(count =0; count<searchlist.length; count=count+1){
        var checkeditem = searchlist[count].querySelector("h1").textContent
        if(checkeditem.toUpperCase().indexOf(enteredvalue)<0){
            searchlist[count].style.display ="none"
        }
        else{
            searchlist[count].style.display="block"
        }
    }
})