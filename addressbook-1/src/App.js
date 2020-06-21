import React, { Component } from 'react';
import './App.css';
import UserPanel from './UserPanel.js'

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      theUsers: [],
      likes: null
    };
  }

  //get the data

  fetchData(){
    //use fetch funtion and callback to transform the data to the JSON structure
    fetch("https://randomuser.me/api?results=25")
    .then(response => response.json())      //transform the text data to json which comes back as a promise use then() to continue
    .then((theseUsers) => {                 // store json data in state
      this.setState({
        theUsers: theseUsers.results,
      },
    ()=> {
      //for checking purposes, use optional second argument ot pass a funtion to see if state changed
      console.log(`the users retrieved are ${this.state.theUsers[0]}`);
      console.log("results length is " + this.state.theUsers.length);

    });
  });
  }

  //use the react method componetdidmoutn() for retrieving data
  componentDidMount(){
    // call you fetchdata()
    this.fetchData();
  }

  render(){
    
    //console.log(console.log(this.state.theUsers[0]));

    let theUsersPanels = [];
    for(let i = 0; i < this.state.theUsers.length; i++){
    theUsersPanels.push(<div className="eachPanel"><UserPanel key={this.state.theUsers[i]} user={this.state.theUsers[i]} /></div>);
    }

    // console.log(theUsersPanels[4]);
    // console.log(theUsersPanels.length);

    return (
      <div className="App">

      {theUsersPanels}

      </div>
    );
  }

}

export default App;
