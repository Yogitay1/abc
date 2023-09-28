import React from "react";

export default class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);

        this.state={
            id:1,
            name:'yog'
        };
        
    }

    changeId=()=>{
        this.setState((prevState)=>{return {id:prevState.id+1}});
    }
    componentDidMount(){
        this.changeId=setInterval(this.changeId,100);
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component updated'+prevState.id);
    }
    render(){
        console.log('in render');
        return(
        <h1>{this.state.id}</h1>
        )

    }
}