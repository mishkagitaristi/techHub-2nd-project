let Posts = {
    box: document.getElementById("postBox"),
    area: document.getElementById("newPost"),
    share: document.getElementById("share"),
    makeElement: function(elementName, styleClass, content){
        let element = document.createElement(elementName);
        element.classList.add(styleClass);
        element.innerHTML = content;
        return element;
    },
    strucure: function(time, txt){
        let post = Posts.makeElement("div", "post", "");
        let img = Posts.makeElement("img", "post__img", "");
        img.src = Users.storage[Pictures.userIndex].profilePicture[Users.storage[Pictures.userIndex].profilePicture.length - 1];
        post.appendChild(img);
        post.appendChild(Posts.makeElement("p", "post__author", Users.storage[Pictures.userIndex].name + " " + Users.storage[Pictures.userIndex].lastName));
        post.appendChild(Posts.makeElement("p", "post__time", time));
        post.appendChild(Posts.makeElement("p", "post__content", txt));
        return post;
    },
    draw: function(){
        if(Users.storage[Pictures.userIndex].posts.length !== 0){
            Posts.box.innerHTML = "";
            for(let i = 0; i < Users.storage[Pictures.userIndex].posts.length; i++){
                Posts.box.appendChild(Posts.strucure(Users.storage[Pictures.userIndex].posts[i].date, Users.storage[Pictures.userIndex].posts[i].content));
            }
        }
    },
    getPostDate: function(){
        let postTime = new Date();
        let postMonth = postTime.getMonth();
        switch(postMonth){
            case 0: postMonth = "January"; break;
            case 1: postMonth = "February"; break;
            case 2: postMonth = "March"; break;
            case 3: postMonth = "April"; break;
            case 4: postMonth = "May"; break;
            case 5: postMonth = "June"; break;
            case 6: postMonth = "July"; break;
            case 7: postMonth = "August"; break;
            case 8: postMonth = "September"; break;
            case 9: postMonth = "October"; break;
            case 10: postMonth = "November"; break;
            case 11: postMonth = "December"; break;
        }
        let postDay = postTime.getDate();
        let postminutes = postTime.getHours() + ":" + postTime.getMinutes();
        let renderedDate = postMonth + " " + postDay + " at " + postminutes;
        return renderedDate;
    },
    deletePost: function(){
        if(Posts.box.childElementCount == 1){
            document.getElementsByClassName("post")[0].addEventListener("click", function(){
                Users.storage[Pictures.userIndex].posts = [];
                window.location.replace("logined.html");
            });
        }
        for(let i = 0; i < Posts.box.childElementCount; i++){
            let element = document.getElementsByClassName("post")[i];
            element.addEventListener("click", function(){
                let answer = confirm("Are you shure you want delete this post?");
                if(answer){
                    Users.storage[Pictures.userIndex].posts.splice(i, 1);
                    Users.resetStorage();
                    Posts.draw();
                    Posts.deletePost();
                }
            });
        }
    },
    new: function(){
        Posts.share.addEventListener("click", function(){
            if(Posts.area.value !== ""){
                Users.storage[Pictures.userIndex].posts.push(
                    {
                        date: Posts.getPostDate(),
                        content: Posts.area.value,
                    }
                );
                document.getElementById("newPost").value = "";
                Users.resetStorage();
                Posts.draw();
                Posts.deletePost();
            }
        })
    },
}
Posts.draw();
Posts.new();
Posts.deletePost();