let ubicacionPrincipal = window.pageYOffset; //0
let $nav = document.querySelector('#nav'); //

window.addEventListener("scroll", function(){
    let ubicacionActual = window.pageYOffset; //180

    console.log(ubicacionActual)

    if(ubicacionPrincipal >= ubicacionActual){ // 200 > 180
        $nav.style.top = "0px"
    }else{
        $nav.style.top = "-100px"
    }
    ubicacionPrincipal= ubicacionActual; //200

})
