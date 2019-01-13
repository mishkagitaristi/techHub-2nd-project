let LogOut = {
    button: document.getElementById("logOut"),
    action: function(){
        LogOut.button.addEventListener("click", function(){
            localStorage.removeItem("userIndex");
            window.location.replace( "index.html");
        });
    }
};

LogOut.action();