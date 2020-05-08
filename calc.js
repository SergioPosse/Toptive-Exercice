module.exports = {
                    calc_with_brackets: function (posI,posF,expresion){
                        
                    //console.log("dentro de cal: "+expresion);

                    for(i=posI; i<posF; i++){
                        //console.log("expresion[]: "+expresion[i])
                        if(expresion[i]=="("){
                            //console.log("entro al if de parent");
                            posI=i+1;
                            for(j=posF; j>posI; j--){
                                if(expresion[j]==")"){
                                    posF=j;
                                    //alert("posF: "+posF);
                                }
                            }
                            //exit for because call again the recursive
                            console.log("posI: "+posI);
                            console.log("posF: "+posF);

                            //must use this for the return of a recursive
                            return this.calc_with_brackets(posI,posF,expresion);
                            
                        }
                    }
                    var nueva_expresion = expresion.slice(posI,posF);
                

                    //alert("posI: "+posI);
                    //alert("posF: "+posF);

                    //patch no proffesional but work
                    //have a problem with slice with a negative number
                    let parte1;

                    if(posI-1<0){
                        parte1=expresion.slice(0,posI);
                    }
                    else{
                        parte1=expresion.slice(0,posI-1);
                    }
                    //alert("parte 1: "+parte1);

                    let parte2=expresion.slice(posF+1, expresion.lenght);
                    //alert("parte 2: "+parte2);


                    let result = eval(nueva_expresion);


                    //alert("resultado calc without: "+result4);

                    //reemplazo en la expresion original
                   
                    let expresion_final = parte1 + result + parte2;
                    //alert("expre final: "+expresion_final);
                    //console.log("exp final en calc: "+expresion_final);

                    for(n=0; n < expresion_final.length; n++){

                        if(expresion_final[n]=="("){
                            //alert("entro al if que no debe");
                            return calc_with_brackets(0,expresion_final.length,expresion_final);
                        }
                    }

                    let resultado = eval(expresion_final);
                    //console.log("resultado en calc: "+resultado);
                    return resultado;        
    }
};
