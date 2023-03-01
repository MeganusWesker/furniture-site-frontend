export const passwordToggle =(passwordFiled)=>{
  
       passwordFiled.forEach(pwField =>{ 
         if(pwField.type ==="password"){
           pwField.type = "text";
         }else{
           pwField.type = "password";
         }
     }) 
}
