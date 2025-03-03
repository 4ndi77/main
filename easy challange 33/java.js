function validation(){
    var username=document.getElementById("username").value;
    var valid_username_regex=/^[A-Za-z]+$/;

    if(!(username.match(valid_username_regex))){
        if(!(username.match(valid_username_regex))){
            document.getElementById("username_error").style.visibility="visible"
            document.getElementById("username").style.borderColor="red";
        }
        else{
            document.getElementById("username_error").style.visibility="hidden"
            document.getElementById("username").style.borderColor="black";
        }
        return false;

    }else{
        document.getElementById("username_error").style.visibility="hidden"
        document.getElementById("username").borderColor="black";
        return true;
    }
}