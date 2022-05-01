$( function ()  {
    'use strict';

    $("textarea").val("")
    var formErrors = true;
    var usererror = true;
    var emailerror = true;
    var msgerror = true;

    // check errors function
    function checkErrors(p) {
        if (formErrors == true) {
            $(p).css('border-color','red');
            $(p).next().fadeIn("300");
        } else {
            $(p).next().fadeOut("300");
            $(p).css('border-color','#ffd700');
        }
    }

    // check if length of the name is great than 8 charcters
    $("#name").blur( () => {
        if ( $("#name").val().length < 8 ){
            formErrors = true;
            usererror = true
        } else { 
            usererror = false
            formErrors = false;
        }
        checkErrors("#name");
    });

    // check if the email is not empty
    $("#mail").blur( () => {
        if ( $("#mail").val() === "" ){
            emailerror = true
            formErrors = true;
        }else  { 
            emailerror = false
            formErrors = false;
        }
        checkErrors("#mail");
    });

    // text area check after the blur
    $("textarea").blur( () => {
        if ( $("textarea").val().length < 20 ){
            msgerror = true
            formErrors = true;
        } else { 
            msgerror = false
            formErrors = false;
        }
        checkErrors("textarea");
    });

  
// submit form validation 

$("#form-contact").submit( (e) => {
    if (msgerror === true || emailerror === true || usererror === true){
        e.preventDefault();
    } 
})

})