import React, { Component } from 'react';
import{Link} from "react-router-dom";
import './app.css';

import Routes from './routes';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            
         }
    }
    

    render(){
        return(
             <div className="app">
                 <Routes/>
             </div>
        );
    }
}

export default App;