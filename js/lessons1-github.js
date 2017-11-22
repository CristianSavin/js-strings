/**
 * Created by cristiansavin on 05.11.17.
 */

function validate_form(){
    var username_input = document.getElementById("userName").value.trim();
    var password_input =  document.getElementById("password").value.trim();
    var confirm__input = document.getElementById("repeatPassword").value.trim();

    if(username_input.length < 3 && password_input.length < 3 && confirm__input.length < 3){
        alert("Cimpurile trebuie sa contina nu mai putin de 3 caractere");
    }
    else{

        if(username_input.indexOf("@") < 1){
            alert("UserName trebuie sa fie sub forma de email Exemplu: \n" +
                "user@mymail.local");
        }
        if(username_input.indexOf(".") < 1){
            alert("UserName trebuie sa fie sub forma de email Exemplu: \n" +
                "user@mymail.local");
        }

        if(password_input.length == "" && confirm__input.length == ""){
            alert("Toate cimpurile sunt obligatiorii");
        }

        if(password_input != confirm__input){
            alert("Parole nu coincid");
        }
        else{
            var specialCharachter = /^(?=.*[0-9])(.*[a-z])(.*[A-Z])([a-zA-Z0-9])/;

            for(var i = 0; i < password_input.length; i++) {
                if (password_input.length >= 8 && password_input.match(specialCharachter)) {
                    alert("Your password is SECURE!");
                    break;
                }
                else{
                    alert("Your password is OK!");
                    break;
                }
            }
        }

    }

}





