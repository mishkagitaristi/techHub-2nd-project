let Registration = {
    button: document.getElementById("registration"),
    mail: document.getElementById("mail"),
    mailCheck: true,
    name: document.getElementById("name"),
    lastName: document.getElementById("lastName"),
    birthYear: document.getElementById("year"),
    birthMonth: document.getElementById("month"),
    birthDay: document.getElementById("day"),
    gender: "",
    genderRender: function(){
        let element = document.getElementsByName("gender");
        for(let i = 0; i < element.length; i++){
            if(element[i].checked){
                Registration.gender = element[i].value;
                break;
            }
        }
    },
    password: document.getElementById("password"),
    action: function(){
        let item = Registration.button;
        item.addEventListener("click", function(){
            Registration.genderRender();
            for(let i = 0; i < Users.storage.length; i++){
                if(Registration.mail.value == Users.storage[i].eMail){
                   Registration.mailCheck = false;
                   break;
                }
            }
            if(Registration.mailCheck !== false){
                Users.storage.push(
                    {
                        name: Registration.name.value,
                        lastName: Registration.lastName.value,
                        eMail: Registration.mail.value,
                        password: Registration.password.value,
                        birthDay: {
                            year: Registration.birthYear.value,
                            month: Registration.birthMonth.value,
                            day: Registration.birthDay.value
                        },
                        gender: Registration.gender,
                        friends: [],
                        profilePicture: "",
                        coverPicture: "",
                        posts: []
                    }
                );
                Registration.mailCheck = true;
                Users.resetStorage();
                alert("You are now registred");
            }else{
                alert("registration wend wrong");
            }
        });
    }
}
Registration.action();