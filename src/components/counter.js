import React from "react";
import App from "./App";

class Counter extends React.Component{
    render(){
        return(
            <div>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick = {this.handlePlusClick}>+</button>
            <button onClick={this.handleMinusClick}>-</button>
          </div>
        )
    }
}
export default Counter;
