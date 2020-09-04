import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import back from './images/background6.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
{/*Website Key: 9393762294242856*/}

var Background = {
    backgroundImage: `url(${back})`,
    backgroundRepeat  : 'round',
    backgroundSize: "cover"
}


const Homepage = () =>{
   
    function getAddress()
    {
        var data;
        console.log("getAddress called")

        {/*Add error handling to catch invalid addresses
           i.e. if status code isn't 200, throw error */}
        
        fetch('https://us-street.api.smartystreets.com/street-address?street=2611+Creek+Manor+Drive&city=Waxhaw&state=NC&candidates=10&key=9393762294242856')
        .then(function(u)
        {
            return u.json();
        })
        .then(function(json)
        {
              data = json;
              var county = data[0]["metadata"]["county_name"];
              var district = data[0]["metadata"]["congressional_district"];
              console.log("county is: " + JSON.stringify(county));
              console.log("district is: " + JSON.stringify(district));

        })

    }
   
    return (
        <div >
            <div style={Background}>
            <h3 style={{color: "#0015bc", textAlign: "center"}}>
                <br></br>
                <br></br>    
                Welcome to <span style={{color: "#ff3333"}}> BeInformedNC! </span>
                Our goal is to help you learn about the candidates that will be
                <br></br>
                on your ballot in November. Enter your address to start reading!
                <br></br>
                </h3>
                <br></br>
                <br></br>

                <h4 style={{color: "#0015bc", textAlign: "center"}}>
                    Find the candidates on your ballot...
                    <br></br>
                    <br></br>
                <Form>
                <Form.Group className="formAddress">
                    <Form.Control type="input" placeholder="Your Address Here" style={{width: 400}}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={getAddress()}>
                    Submit
                </Button>
                 </Form>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </h4>
                <br></br>
            </div>
        </div>
    );
}

export default Homepage;