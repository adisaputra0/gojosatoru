let page = 0;
function nextPage(){
    if(page == 0){
        document.querySelector("body>div").style.backgroundPosition="70%";
        document.querySelector(".btn-page").style.right="80%";
        document.querySelector(".btn-page").style.transform="rotatey(180deg)";
        document.querySelector(".page-1").style.opacity = "0%";
        document.querySelector(".page-2").style.opacity = "0%";
        setTimeout(function() {
            document.querySelector(".page-1").classList.toggle("hidden");
            document.querySelector(".page-2").classList.toggle("hidden");
            document.querySelector(".page-2").style.display = "grid";
            console.log("hello world");
        }, 500);          
        setTimeout(function(){
        document.querySelector(".page-2").style.opacity = "100%";
        }, 600);

        page = 1;
    }else{
        document.querySelector("body>div").style.backgroundPosition="30%";
        document.querySelector(".btn-page").style.right="0%";
        document.querySelector(".btn-page").style.transform="rotatey(0deg)";
        document.querySelector(".page-1").style.opacity = "0%";
        document.querySelector(".page-2").style.opacity = "0%";
        setTimeout(function() {
            document.querySelector(".page-1").classList.toggle("hidden");
            document.querySelector(".page-2").classList.toggle("hidden");
            document.querySelector(".page-2").style.display = "";
            console.log("hello world");
        }, 500);          
        setTimeout(function(){
        document.querySelector(".page-1").style.opacity = "100%";
        }, 600);

        page = 0;
    }
}