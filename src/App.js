// import logo from './logo.svg';
import './App.css';
import React from "react";
import Counter from ".counter";
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }  
  }
   handleMinusClick = () =>{
    this.setState({count:this.state.count -1})
  }
  handlePlusClick =() =>{
    this.setState({count:this.state.count +1})
  }
 
  render(){
    return(
      <div>
      {counter}
      </div>
    )
  }
}

export default App;
