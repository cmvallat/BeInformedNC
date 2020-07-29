import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import back from './images/background6.png'

var Background = {
    backgroundImage: `url(${back})`,
    backgroundRepeat  : 'round',
    backgroundSize: "cover"
}
const Homepage = () =>{
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
                <Button variant="primary" type="submit">
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