import React, { Component } from 'react';

class Menu extends Component {

    render(){
        return(
            <div>
                <h5>TOPLIVE Calculator</h5>
                <ul id="nav-mobile">
                    <li name="current">Current Operation:</li>
                    <li><a href="badges.html">View History</a></li>
                </ul>
            </div>
        )
    }
}

export default Menu;