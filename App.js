import React from "react";
import Counter from "./components/ClassBasedState";
import Footer from "./components/Footer";
import Counter2 from "./components/FunctionBasedState";
import Header from "./components/Header";

class App extends React.Component{

  render(){

    return(
      <div>
        <Counter/>
        <Header title="Chapter 4"/>
        Thank you
        <Footer name="yog"/>
        //<Counter2/>
        <demop/>
        <bulb/>
      </div>
    )
  }
}

export default App;