import React from 'react';

const UserName = (props) => {
    let userNameJSX = null;
    //console.log(props.name);
    if(props.name !== null && typeof props.name === 'object'){
        userNameJSX = <p key={props.name.title}>{props.name.title} {props.name.first} {props.name.last}</p>
    }
    
    return userNameJSX;
}

const UserDOB = (props) => {
    let userDOBJSX = null;
    //console.log(props);
    if(props.dob !== null && typeof props.dob === 'object'){
    userDOBJSX = <p key={props.dob.date} >Age: {props.dob.age} Born on: {props.dob.date} </p>
    }
    return userDOBJSX;
}

const UserPic = (props) =>{
    let userPicJSX = null;

    if(props.picture !== null && typeof props.picture === 'object'){
    userPicJSX = <img src={props.picture.thumbnail} alt="user"></img>

    }
    return userPicJSX;
}

const UserID = (props) => {
    let userIdJsx = null;
    if(props.id !== null && typeof props.id === 'object'){
    userIdJsx = <p key={props.id.name}>User ID: {props.id.name} {props.id.value}</p>
    }

    return userIdJsx
}

const UserRegistered = (props) => {
    let userRegisteredJSX = null;
    if(props.registered !== null && typeof props.registered === 'object'){
    userRegisteredJSX = <p>Registered at the age of {props.registered.age} on {props.registered.date}</p>
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

const change = (e) =>{

    console.log("button clicked");
}

const UserPanel = (props) => {

    if(props.user !== null){
        let topLevelListItem = [];

         console.log(props.user);
         //console.log(props.user.dob);

        for (let [key, value] of Object.entries(props.user)) {
            if(typeof value !== 'object'){
                topLevelListItem.push(<li key={key}>{key}: {value}</li>)
            }

        }

        
    return <div>
    <ul><h1 className="headers1">The User Info</h1></ul>
        <UserName className="users" name={props.user.name}/>
        <UserPic className="picture" picture={props.user.picture}/>
        <UserDOB className="dob" dob={props.user.dob}/>
        <UserID className="userId" id={props.user.id}/>
        <UserRegistered className="registered" registered={props.user.registered}/>
        <UserLogin className="login" login={props.user.login}/>
        <UserLocation className="location" location={props.user.location} />
        <button key="props.user" onChange={e => this.change(e)}>show details</button>
        
        <ul>{topLevelListItem}</ul>
    </div>

    }

}

export default UserPanel;