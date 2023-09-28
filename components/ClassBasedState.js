import React from "react";

export default class Counter extends React.Component{

    state={
        num:0
    }

    handleIncrement=()=>{
        this.setState({
            num : this.state.num+1
        })

    }

    handleDecrement=()=>{
        this.setState({
            num : this.state.num-1
        })
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>

                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
                
            </div>
        )
    }
    
}