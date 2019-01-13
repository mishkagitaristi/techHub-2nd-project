let LogIn = {
    button: document.getElementById("logInButton"),
    mail: document.getElementById("logInMail"),
    password: document.getElementById("logInPassword"),
    logOut: document.getElementById("logOut"),
    mailStatus: false,
    passwordStatus: false,
    userIndex: 0,
    action: function(){
        LogIn.button.addEventListener("click", function(){
            for(let i = 0; i < Users.storage.length; i++){
                if(LogIn.mail.value == Users.storage[i].eMail){
                    LogIn.mailStatus = true;
                    break;
                }
            }
            for(let i = 0; i < Users.storage.length; i++){
                if(LogIn.password.value == Users.storage[i].password){
                    LogIn.passwordStatus = true;
                    LogIn.userIndex = i;
                    break;
                }
            }
            if(LogIn.mailStatus == true && LogIn.passwordStatus == true){
                window.location.replace( "logined.html");
                LogIn.passwordStatus = false;
                LogIn.mailStatus = false;
                localStorage.setItem("userIndex", LogIn.userIndex);
            }else{
                alert("Wrong mail or password");
            }
        });
    },
}

LogIn.action();