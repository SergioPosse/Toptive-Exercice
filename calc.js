module.exports = {
    //pass two pointers and the expresion to analize
                    calc_with_parentheses: function (posI,posF,expresion){     
    //search for a "(", and if there is then search for his respective closure ")"
    //and save both positions in posI and posF
                    for(i=posI; i<posF; i++){
                        if(expresion[i]=="("){
                            posI=i+1;
                            console.log("posI: "+posI)
                            for(j=posF; j>posI; j--){
                                if(expresion[j]==")"){
                                    posF=j;
                                    console.log("posF: "+posF)
                                }
                            }
                            //exit for because call again the recursive
                            //must use this for the return of a recursive
                            //this way the algoritm go to the most inner bracket and save the positions
                            return this.calc_with_parentheses(posI,posF,expresion);     
                        }
                    }
//Now slice the expresion with the positions finded before
//in this point, is possible that the positions have no change since was passed by params
//or change when we searched for the most inner bracket
//now i save the expresion between the positions y nueva_expresion
                    var nueva_expresion = expresion.slice(posI,posF);
                    console.log("nueva_expresion: "+nueva_expresion)
                    //patch no proffesional but work
                    //have a problem with slice with a negative number
//NOW need to save the left part of the nueva_expresion
                    let parte1;
                    //this condition is a dirty patch, need to look later but WORK
                    //the problem was that slice throw bug for negative positions
                    if(posI-1<0){
                        parte1=expresion.slice(0,posI);
                    }
                    else{
                        parte1=expresion.slice(0,posI-1);
                    }
                    console.log("parte1: "+parte1);
//NOW the right part...
                    let parte2=expresion.slice(posF+1, expresion.lenght);
                    console.log("parte2: "+parte2);
//resolve the expresion that i took from the nueva_expresion
                    let result = eval(nueva_expresion);
                    console.log("result: "+result);
//now put the parts and the result together...
//so the brackets go away!!
                    let expresion_final = parte1 + result + parte2;
                    console.log("expresion_final: "+expresion_final)
//now check if there is one more bracket in the expresion_final
//remember that was created with part1 and part2 that probably have some bracket
                    for(n=0; n < expresion_final.length; n++){
                        if(expresion_final[n]=="("){
//if there is bracket go to the function again
                            return calc_with_parentheses(0,expresion_final.length,expresion_final);
                        }
                    }
//there is no more brackets or never was
                    let resultado = eval(expresion_final);
                    return resultado;
    }
};
