module.exports = {
            validate_operation: function (expresion){
                    //checking if there is letters in the expression
                    //return 0 errors
                    //return 1 everything its ok
                    let check_letters = expresion.match(/[a-z]/i);
                    if (check_letters===null){
                        return 0;
                    }
                    else{
                        return 1;
                    }     
        } 
};