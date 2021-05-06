class Validator {

    /**
     * This function validates if the user type any name or not.
     * @param {string} name 
     */
    static validateName(name) {
        if (name == null || name == "") {
            alert("Name field cannot be empty");
            return false;
        }
        return true;
    }

    /**
     * This function checks the date of birth of the passenger with the pattern defined and returns true if it matches.
     * @param {string} dob 
     */
    static validateDOB(dob) {
        var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
        if (dob == null || dob == "" || !pattern.test(dob)) {
            alert("Invalid date of birth");
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * This function checks if the user selected any radio button or not.
     * @param {string} gender 
     */
    static validateGender(gender){
        if(gender == null || gender == "off" || gender == {}){
            alert("select your gender");
            return false;
        }
        else{
            return true;
        }
    }
}