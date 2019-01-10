let Users = [
    {
        name: "luka",
        lastName: "simonishvili",
        eMail: "luka",
        password: "luka",
        birthDay: {
            year: "1998",
            mont: "may",
            day: "11"
        },
        gender: "male",
        friends: [
            {
                name: "beqa",
                lastName: "revazishvili",
                chat: []
            }
        ],
        profilePicture: "",
        coverPicture: "",
        posts: [
            {
                date: "",
                content: "",
            }
        ]
    }
]

let Storage = {
    check = function(){
        
    }
}

let usersStorage = JSON.parse(localStorage.getItem("users"));
