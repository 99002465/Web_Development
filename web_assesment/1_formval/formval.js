function validationForm(){
    if(document.getElementById("name").value==""){
        alert("Enter your name");
        document.myform.username.focus();
    }else if(document.getElementById("password").value==""){
        alert("Enter your password");   
        document.myform.password.focus();
    }
    else if(validatePass()){
        alert("Enter correct password");
        document.myform.password.focus();
    }
    else if(document.getElementById("email").value==""){
        alert("Enter your Email id");
        document.myform.emailID.focus();}
    else if(validateEmail()){
        alert("Enter valid email id");
        document.myform.emailID.focus();
    }
    else if(document.getElementById("pnum").value==""){
        alert("Enter Phone Num");
        document.myform.phone.focus();}
    else if(validatePhone()){
        alert("Enter correct phone number");
        document.myform.phone.focus();
    }
    else{
       // alert("Registration successfull")
        validateUser();
        
     } 
}
function validateUser(){
    var nameslist = ["akshata@123","sam@12","tom@543"];
        urname = document.getElementById("name").value;
        flag = 0;
        for(var i in urname)
        {
            if (!urname.localeCompare(nameslist[i])){
            alert("Username already exist, please give another one");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            //namelist.push(urname);
           alert("Registration is successful");
            document.myform.Submit();
        } 
   }
   function validatePass(){
    
    var str = document.getElementById("password").value
    if (str.match(/[a-z]/g) && str.match( 
            /[A-Z]/g) && str.match( 
            /[0-9]/g) && str.match( 
            /[^a-zA-Z\d]/g)) 
        return false

    else 
        return true 

}

function validateEmail()  
{
var str = document.getElementById("email").value
    if (str.match(/@/g)  )
        return false

    else 
        return true 
} 
function validatePhone(){
    var num=document.getElementById("pnum").value
    
        if(num.length==10)

            return false

        else 
            return true

}