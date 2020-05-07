module.exports = {

    calc_without_brackets: function (expresion, operador) {
        let posI, posF, posI2, posF2;
    let num1, num2, num3;
    var final;


    for(i=0;i<expresion.length;i++){
    
        if(expresion[i]==operador){

            posF=i-1;
            //alert("posF: "+posF);
            posI2=i+1;
            //alert("posI2: "+posI2);

            for(j=posF;j>=0;j--){
                if( isNaN(expresion[j]) ){
                    posI=j+1;
                    //alert("posI: "+posI);
                    break;
                }
                else{
                    posI=j;
                    //alert("posI else: "+posI);
                }
            }

            for(p=posI2;p<expresion.length;p++){
                if( isNaN(expresion[p]) ){
                    posF2=p-1;
                    //alert("posF2: "+posF2);
                    break;
                }
                else{
                    posF2=p;
                    //alert("posF2 else: "+posF2);
                }
            }

            num1=expresion.slice(posI,posF+1);
            //alert("num1= "+ num1);
            num2=expresion.slice(posI2,posF2+1);
            //alert("num2= "+ num2);

            switch(operador){
                case "/":
                    num3 = parseInt(num1) / parseInt(num2);
                    break;
                case "+":
                    num3 = parseInt(num1) + parseInt(num2);
                    break;
                case "-":
                    num3 = parseInt(num1) - parseInt(num2);
                    break;
                case "*":
                    num3 = parseInt(num1) * parseInt(num2);
                    break;
                 
            }

            let parte1 = expresion.slice(0,posI);

            let parte2 = expresion.slice(posF2+1, expresion.length);
     
            final = parte1 + num3 + parte2;
        
            break;  
        }
        else{
            final=expresion;
            //alert("entro else");
        }
    }

    for(i=0;i<final.length;i++){
        if(final[i]==operador){
            return calc_without_brackets(final,operador);
        }

    }

    return final;
    },
    bar: function (name) {
      return name;
    }
};
