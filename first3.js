let New_password=String();
const Allchar = "abcdefghijklmnopqurstABCDEFGHIJKLMNOPQRSTUVWX1234567890!@#$_)(&";
const button_click = document.getElementById("generate");
const display = document.getElementById("password");
button_click.onclick = function(){
  
  for(let i =0; i<12;i++ ){
    let randomIndex = Math.floor(Math.random()* Allchar.length);
    New_password += Allchar[randomIndex];
    
  }
  display.value = New_password;
  New_password = "";
  
}

function pass_copy(){
    display.select() ;
    document.execCommand("copy");
}