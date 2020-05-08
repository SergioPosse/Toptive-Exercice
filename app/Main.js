import React, { Component } from 'react';
const val = require('../validation.js');

class Main extends Component {
    constructor(){
        super();
        this.state={
                expression:'',
                result:'',
                current:'',
                history: []
        };
        this.handleChange = this.handleChange.bind(this);//binding events
        this.calculateExpression = this.calculateExpression.bind(this);
    }
//autoload histoy panel data
    componentDidMount(){    
        this.getHistory();
    }
//get all of history
    getHistory(){
        fetch('api/history')
            .then(res => res.json())
            .then(data => {
                this.setState({history: data});
            });
    }

//calculate and save in history
    calculateExpression(e){//here i do the request from the server

        e.preventDefault();
        let error = val.validate_operation(this.state.expression);
        console.log("error en main: "+error);
        if (error==1){
            M.toast({html: 'Syntax error in operation'})
        }
        if(error==0){
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
                this.setState({
                    result: data
                })
                fetch('api/history', {
                    method: 'POST',
                    body: JSON.stringify(this.state),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data =>{
                    M.toast({html: 'Saved in history'})
                    this.setState({expression: ''});
                    this.getHistory();//refresh the history panel
    
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err)); 
        }
    
    }

//update the Main component state on change
    handleChange(e){ 
        const { name, value} = e.target;
        this.setState(
            {
            [name]: value,//with [name]: is compatible with every component that send name and value and have onChange event handler
            current: value
            }
        )
    }
//render the html here
    render(){
        return(
            <div>
                <div className="col l6 m6 s6">
                <div id="menu" className="col l6 m6 s6 offset-l6">
                    <h5>TOPLIVE Calculator</h5>
                    <ul id="nav-mobile">
                    <li name="current">Current Operation: {this.state.current}</li>
                        <li><a href="/api/history">History.json</a></li>
                    </ul>
                </div>
                
                <div id="main" className="center col l6 s6 m6 offset-l6">
                    <form onSubmit={this.calculateExpression}>
                        <div className="input-field">
                            <input name="expression" onChange={this.handleChange} type="text" placeholder="2*4-(67+5)" value={this.state.expression} />
                        </div>
                        <button type="submit"  className="waves-effect waves-light btn">Calculate</button>
                        <div id="result" className="col l6 m6 s6 offset-l6">
                            {"Result: "+this.state.result}
                        </div>
                    </form>
                </div>

                <div id="footer" className="valign-wrapper col l6 s6 m6 offset-l6">       
                    Sergiodavidposse@gmail.com
                </div>

                </div>
                <div className="col l6 m6 s6">
                <div id="history" className="card-panel col l6 s6 m6">
                    <h5>Operation History</h5>
                    <table className="highlight centered stripped">
                        <thead>
                            <tr>
                                <th>Operation</th>
                                <th>Result</th>
                            </tr>  
                        </thead>
                        <tbody>
                            {
                                this.state.history.map(item => {
                                    return(
                                        <tr key={item._id}>
                                            <td>{item.expression}</td>
                                            <td>{item.result}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                </div>
                
            </div>
        )
    }
    
};

export default Main;