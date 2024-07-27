function formValidation(){

    var username = documents.registration.userid;
    var password = documents.registration.passid;
    var agenumber = documents.registration.age;
    var pincodeid = documents.registration.pincode;
    var pannum = documents.registration.panid;
    var mobilenum = documents.registration.phonenumber;

    if(username_validation(username,7,10)){
        if(password_Validation(password)){
            if(age_validation(agenumber,1,2)){
                if(pincode_Validaton(pincodenum)){
                    if(pannum_Validation()){
                        if(mobilenum_Validaton()){

                        }
                    }
                }
            }
        }
    }
    return false;
}
functon usernameValidation(username,mx,my){
    if(username == ''|| username<mx || username>my){
        alert('username must be len'+mx")
    }
}