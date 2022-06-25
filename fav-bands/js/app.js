$(document).ready(function() {
    $("#light").on("click", function(){

       if ($("body").hasClass("light")){
        $("body").removeClass("light");
        $("#light").text("OFF");

       } else {
        $("body").addClass("light");
        $("#light").text("ON");
       }
        
    });


    $("#dark").on("click", function() {
        if ($("body").hasClass("dark")){
        $("body").removeClass("dark");
        $("#dark").text("OFF");

        } else {
            $("body").addClass("dark");
            $("#dark").text("ON");
        }

    });


    $("#normal").on("click", function() {
        if ($("body").hasClass("green")){
            $("body").removeClass("green");
            $("#normal").text("NaN");

        } else {
            $("body").adClass("green");
            $("#normal").text("On-Nan");
        }
        
    });

    
        
    

  

});