import React from 'react';
import headshot from './images/headshot.png'
import back from './images/background6.png'

var imageStyle = {
    width: 135,
    height: 175,
    justifyContent: "left",
    alignItems: "left"
}

var Background = {
    backgroundImage: `url(${back})`,
    backgroundRepeat: "round",
    backgroundSize: "cover",
}

const Candidate = () => {
    return (
        <div style={Background}>
            
            <br></br>
            <br></br>
            
            <img src={headshot} alt="Headshot" style={{ width: 135, height: 175, float: "left"}}/>
           <p style={{textAlign: "left"}}>
            <br></br>
            <span style={{fontSize: 50}}>&nbsp;&nbsp;&nbsp;John A. Smith</span>
            <br></br>
            <span style={{fontSize: 25}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Board of Commissioners</span>
            </p>
            

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Candidate;