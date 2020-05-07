import React, { Component } from 'react';

class Main extends Component {
    constructor(){
        super();
        this.state={
                expression:'',
                result:''
        };
        this.handleChange = this.handleChange.bind(this);//binding events
        this.calculateExpression = this.calculateExpression.bind(this);
    }

    calculateExpression(e){//here i do the request from the server
        e.preventDefault();
        fetch('api/calculate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            this.setState({result: data})
        })
        .catch(err => console.error(err));
    }

    handleChange(e){ 
        const { name, value} = e.target;
        this.setState(
            {
            [name]: value //with [name]: is compatible with every component that send name and value and have onChange event handler
            }
        )

    }

    render(){
        return(
            <div>
                 <form onSubmit={this.calculateExpression}>
                    <div className="input-field">
                        <input name="expression" onChange={this.handleChange} type="text" placeholder="2*4-(67+5)" />
                    </div>
                    <button type="submit"  className="waves-effect waves-light btn">Calculate</button>
                    <div id="result" className="col l4 m4 s4 offset-l4">
                        {this.state.result}
                    </div>
                </form>
            </div>
        )
    }
    
}

export default Main;