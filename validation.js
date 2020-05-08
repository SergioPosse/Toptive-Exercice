module.exports = {
            validate_operation: function (expresion){

                    let check_letters = expresion.match(/[a-z]/i);

                    console.log("check_letters: "+check_letters);

                    if (check_letters===null){
                        return 0;
                        console.log("error: "+error);
                    }
                    else{
                        return 1;
                    }
                
            
        } 
};