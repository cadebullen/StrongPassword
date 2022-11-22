function validPW() {
    let pwregex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@.|`~<>()#^*+=\/\-\[\]$!%*?&]).{0,10}$/;

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let passWord = document.getElementById("password").value;

    if (!firstName){
        alert("Please enter a first name, so your password can be graded.");
        firstName.focus();
        firstName.select();
        return false;
   }

   
   // Check if last name is empty:
   if (!lastName){
      alert("Please enter a last name, so your password can be graded.");
      lastName.focus();
      lastName.select();
      return false;
    }

    if (!passWord){
        alert("Please enter a password, there is no value.");
        passWord.focus();
        passWord.slect();
        return false;
    }
    else{
        let checkNum_re = /(?=.*\d)/;
        let checkUpperL_re = /(?=.*[A-Z])/;
        let checkLowerL_re = /(?=.*[a-z])/;
        let specialChar_re = /(?=.*[@.|`~<>()#^*+=\/\-\[\]$!%*?&])/; 
        let fName_re = /firstName/;
        let lName_re = /lastName/;
        if (passWord.length < 10){
            alert("Password does not exceed the minimum of 10 characters. A strong password should be greater than 10 characters, however, it is common for websites to ask for at least 8.");
            passWord.focus();
            passWord.select();
            return false;
         }
        else if (passWord.search(checkNum_re) == -1){
            alert("Password does not contain a number. Please add a number to your password to increase its strength.");
            passWord.focus();
            passWord.select();
            return false;
        }
        else if (passWord.search(checkUpperL_re) == -1){            
            alert("Password does not contain an uppercase letter. Please add an uppercase letter to your password to increase its strength");
            passWord.focus();
            passWord.select();
            return false;
        }
        else if (passWord.search(specialChar_re) == -1){
            alert("Password does not contain a special character. Please add a special character to your password to increase its strength.");
            passWord.focus();
            passWord.select();
            return false;
        }
        else if (passWord.search(checkLowerL_re) == -1){
            alert("Password does not contain a lowercase letter. Please add a lowercase letter to your password to increase its strength.");
            passWord.focus();
            passWord.select();
            return false;
        }
        else if (passWord.search(fName_re) == -1){
            alert("Password should not contain your first name. Having your first name in your password makes it easier to guess.");
            passWord.focus();
            passWord.select();
            return false;
        }
        else if (passWord.search(lName_re) == -1){
            alert("Password should not contain your last name. Having your last name in your password makes it easier to guess.");
            passWord.focus();
            passWord.select();
            return false;
        }
        else{
            alert("This was a good password. Great Job!!");
        }
    }
}