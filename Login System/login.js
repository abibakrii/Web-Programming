
var objPeople = [
    {
        username:"sam",
        password:"sam123",
        role:"Resident"
    }
]

function getInfo(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    
    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password ){
            window.location.href = "http://127.0.0.1:5500/onlineCommunitySystem/home.html";
        }
    }
}
