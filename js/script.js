let name = document.getElementById('name');
let surname = document.getElementById('surname');
let middlename = document.getElementById('middlename');
let email = document.getElementById('email');
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
let arr = [];
function passwordCheck(x, y){
    let similar;
    if(x == y){
        similar = true;
    }
    else{
        similar = false;
    }
    return similar;
}
function addToArray(nam, sur, mid, mail, pas1, pas2){
    arr.push({     
        n: nam,
        s: sur,
        m: mid,  
        e: mail,
        p1: pas1,
        p2: pas2 
  })
  return arr;
}
function sub(){
    if(passwordCheck(pass1.value, pass2.value)==true){
        window.alert(pass1.value);
        addToArray(name.value, surname.value, middlename.value,  email.value, pass1.value, pass2.value,);    
        console.log(arr);

        name.value='';
        surname.value='';
        middlename.value='';
        email.value='';
        pass1.value='';
        pass2.value='';
    }
    else{
        window.alert("Введенные пароли не совпадают")
    }
}

function script(a, b){
    return a + b
}
module.exports = passwordCheck