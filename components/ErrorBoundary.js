import React from "react";

export default class ErrorBoundary extends React.components{

    state = {
        hasError:false
    };
    static getDerivedStateFromError(error){
        console.log('Error :${error}');
        return {hasError:true};
    }
    componentDidCatch(error , info){
        console.log('Error in ComponentDidCatch:${error}');
        console.log('${info}');
    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}