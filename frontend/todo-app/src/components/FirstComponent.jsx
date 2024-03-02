import React from 'react';

const person = {
      name:"barath",
      location:"india",
      education : {college:"bit",work:"zoho"},
      profiles : ['linkedin','email'],
      printProfile:() => {
        person.profiles.map(
        (profile) => console.log(profile) 
      ) 
      }
};


export default function FirstComponent() {

    return (
    <div className="FirstComponent">
    <div>{person.name}</div>
    <div>{person.location}</div>
    <div>{person.profiles[0]} </div>
    <div>{person.printProfile()}</div>
    
    </div>
    );
    
  }