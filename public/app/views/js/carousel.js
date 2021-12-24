var cont = 0;

function change(CurrentSlide, NextSlide, CurrentButton, NextButton){
    $(CurrentSlide).fadeOut(400);
    $(NextSlide).delay(400).fadeIn(400);
    $(CurrentButton).removeClass("bg-blue-800");
    $(NextButton).addClass("bg-blue-800");
}

function loopSlider() {
    var xx = setInterval(function () {
        switch (cont) {
            case 0: {
                change('#s1', '#s2', '#b1', '#b2');
                cont += 1;
                break;
            }
            case 1:{
                change('#s2', '#s3', '#b2', '#b3');
                cont += 1;   
                break;
            }
            case 2:{
                change('#s3', '#s4', '#b3', '#b4');
                cont += 1;
                break;
            }
            case 3: {
                change('#s4', '#s5', '#b4', '#b5');
                cont += 1;
                break;
            }
            case 4:{
                change('#s5', '#s6', '#b5', '#b6');
                cont += 1;   
                break;
            }
            case 5:{
                change('#s6', '#s1', '#b6', '#b1');
                cont = 0;
                break;
            }
        }
    }, 5000);
};

$(window).ready(function () {
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
    $("#b1").addClass("bg-blue-800");
    loopSlider();
});