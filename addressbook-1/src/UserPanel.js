import React, { Component } from 'react';

const UserName = (props) => {
    let userNameJSX = null;
    //console.log(props.name);
    if(props.name !== null && typeof props.name === 'object'){
        userNameJSX = <p className="group1" key={props.name.title}>{props.name.title} {props.name.first} {props.name.last}</p>
    }
    
    return userNameJSX;
}

const UserDOB = (props) => {
    let userDOBJSX = null;
    //console.log(props);
    if(props.dob !== null && typeof props.dob === 'object'){
    userDOBJSX = <p className="group1" key={props.dob.date} >Age: {props.dob.age} Born on: {props.dob.date} </p>
    }
    return userDOBJSX;
}

const UserPic = (props) =>{
    let userPicJSX = null;

    if(props.picture !== null && typeof props.picture === 'object'){
    userPicJSX = <div className="pictures"><img src={props.picture.thumbnail} alt="user"></img></div>

    }
    return userPicJSX;
}

const UserID = (props) => {
    let userIdJsx = null;
    if(props.id !== null && typeof props.id === 'object'){
    userIdJsx = <p className="group1" key={props.id.name}>User ID: {props.id.name} {props.id.value}</p>
    }

    return userIdJsx
}

const UserRegistered = (props) => {
    let userRegisteredJSX = null;
    if(props.registered !== null && typeof props.registered === 'object'){
    userRegisteredJSX = <p className="group1">Registered at the age of {props.registered.age} on {props.registered.date}</p>
    }
    return userRegisteredJSX;
}

const UserLogin = (props) => {
    let userLoginJSX = null;
    if(props.login !== null && typeof props.login === 'object'){

    userLoginJSX = <ul><h3>Login Info</h3>
    <li>md5: {props.login.md5}</li>
    <li>password: {props.login.password}</li>
    <li>salt: {props.login.salt}</li>
    <li>sha1: {props.login.sha1}</li>
    <li>sha256: {props.login.sha256}</li>
    <li>username: {props.login.username}</li>
    <li>uuid: {props.login.uuid}</li>
    </ul>;

    return userLoginJSX;

    }
}

const UserLocation = (props) => {
    let userLocationJSX = null;
    if(props.location !== null && typeof props.location === 'object'){
    let cityJSX = <li>City: {props.location.city}</li>;
    let coordinatesJSX = <li>Latitude: {props.location.coordinates.latitude} Longitude: {props.location.coordinates.longitude}</li>;
    let countryJSX = <li>Country: {props.location.country}</li>;
    let postcodeJSX = <li>Postcode: {props.location.postcode}</li>;
    let stateJSX = <li>State: {props.location.state}</li>;
    let streetJSX = <li>Street: {props.location.street.number} {props.location.street.name}</li>
    let timezoneJSX = <li>Timezone: {props.location.timezone.offset} {props.location.timezone.description}</li>


    userLocationJSX = <ul><h3>Location Info</h3>
        {cityJSX}
        {coordinatesJSX}
        {countryJSX}
        {postcodeJSX}
        {stateJSX}
        {streetJSX}
        {timezoneJSX}
    </ul>
    }

    return userLocationJSX;
}



class UserPanel extends Component{

    constructor(props){
        super(props);
    
        this.state= {
        isClicked: false
        };
      }


      change = (e) =>{

        // console.log("button clicked");
        // let index = e.target.getAttribute("index");
        // console.log(index);
        // //let userDiv = e.target.closest(`#${index}`);
        // let userDiv = e.target.closest("div");
        //console.log(userDiv)
        //userDiv should be the div with the id of the assigned uuid retieved from the button clicked
        // if(!this.state.clicked){
    
        // }
        console.log(this.state.isClicked);
        this.setState({isClicked: !this.state.isClicked});

    
    }
 
       render() {

        if(this.props.user !== null){
            let topLevelListItem = [];
    
             console.log(this.props.user);
             //console.log(props.user.dob);
    
            for (let [key, value] of Object.entries(this.props.user)) {
                if(typeof value !== 'object'){
                    topLevelListItem.push(<ul><li key={key}>{key}: {value}</li></ul>)
                }
    
            }
    
        let panelInfo = null;
        if(this.state.isClicked === true){
            panelInfo = (<div id={this.props.user.login.uuid} className="fullUserInfo">
                <ul><h1 className="headers1">The User Info</h1></ul>
                    
                    <UserPic className="picture" picture={this.props.user.picture}/>
                    <UserName className="users" name={this.props.user.name}/>
                    <UserDOB className="dob" dob={this.props.user.dob}/>
                    <UserRegistered className="registered " registered={this.props.user.registered}/>
                    {topLevelListItem}
                    <UserID className="userId" id={this.props.user.id}/>
                    <UserLocation className="location" location={this.props.user.location} />
                    <UserLogin className="login" login={this.props.user.login}/>
                    <button key="props.user" index={this.props.user.login.uuid} onClick={() => this.change("props.user")}>show details</button>      
                   
                </div>)
        }else{
            panelInfo = (<div id={this.props.user.login.uuid}>
                <ul><h1 className="headers1">The User Info</h1></ul>
                    <UserPic className="picture" picture={this.props.user.picture}/>    
                    <UserName className="users" name={this.props.user.name}/>
                    
                    <div className="center"><button key="props.user" index={this.props.user.login.uuid} onClick={() => this.change("props.user")}>show details</button></div>  
                </div>)
                  
        }
        return panelInfo;
   
       }

    }

}

export default UserPanel;