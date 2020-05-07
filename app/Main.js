import React, { Component } from 'react';

class Main extends Component {
    render(){
        return(
            <div>
                <input type="text" placeholder="2*4-(67+5)" />
                <a class="waves-effect waves-light btn">Calculate</a>
                <div id="result" class="col l4 m4 s4 offset-l4">
                    <h7>Result: </h7>
                </div>
            </div>
        )
    }
}

export default Main;