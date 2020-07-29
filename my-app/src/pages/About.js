import React from 'react';
import headshot from './images/headshot.png'
import chris from './images/closeup.jpg'
import nick from './images/SeniorPicture.jpg'
import will from './images/will1.png'
import alan from './images/alan.jpg'
import back from './images/background6.png'



var imageStyle = {
    width: 135,
    height: 175,
    justifyContent: "center",
    alignItems: "center"
}

var HeadingStyle = {
    textAlign: "center", 
    color:"#ff3333",
}

var paragraphStyle = {
    textAlign: "left",
    fontSize: 25,
    color: "#0015bc"
}

var Background = {
    backgroundImage: `url(${back})`,
    backgroundRepeat: "round",
    backgroundSize: "cover",
    textAlign: "center", 
}

const About = () => {
    return (
        <div style={Background}>
            <br></br>
            <br></br>
            <h2 style={{textAlign: "center", color: "#ff3333",}}>About Us </h2>
            <br></br>
            
            <h3 style={{textAlign: "center", color: "#0015bc",}}> 
            Our mission at BeInformedNC is to help North Carolina residents of all ages be more
            informed of their electoral candidates at the state, district, and local level. 
            <br></br>
            <br></br>
            We have 3 main goals for this project:
            <br></br>
            <br></br>

            <h4 style={{textAlign: "left", color: "#0015bc",}}> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            1. Help NC residents to be more informed of their candidates
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2. Increase turn out rate for midterm and primary elections
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            3. Help NC residents register to vote
            </h4>
            </h3>
            <br></br>


            
            <h2 style={{textAlign: "center", color: "#ff3333",}}> 
            Our Team
            <br></br>
            </h2>

            <h4 style={{textAlign: "center", color: "#0015bc",}}>
            <br></br>
            We are a group of college students from universities such as UNC Chapel Hill, Purdue, etc.
            We get our information from reliable sources such as (insert sources here).
            We emphasized non-partisanship in creating this website - we want to inform voters, not sway them.
            <br></br>
            </h4>
            <br></br>
            <h2 style={HeadingStyle}> 
            Founder
            </h2>
            <br></br>

        
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <br></br>
            <p style={{textAlign: "center", fontSize: 25, color: "#0015bc"}}> Haley Rose </p>
            <br></br>

            <h2 style={HeadingStyle}> 
            Research Associates
            </h2>
            <br></br>

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <p style={paragraphStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;Alex Pinder &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp; Margaret Pinder &nbsp;&nbsp;&nbsp; 
                                    &nbsp;&nbsp;&nbsp;Andrés Otero
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Quynh Nguyen
                                    </p>
            <br></br>
            <br></br>
            
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={headshot} alt="Headshot" style={imageStyle}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

            <p style={paragraphStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;Lily Hornberger &nbsp;&nbsp;&nbsp;
                                
            <span style={{textAlign: "left", fontSize: 18}}>Mary Agnes Rothenberger </span>
            <span style={paragraphStyle}>&nbsp;&nbsp;&nbsp; Ashley Riley
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp; Holly Rose</span>
                                    </p>
                                    
                                

            <br></br>
            
            <br></br>
            
            <h2 style={HeadingStyle}> 
            Web Developers
            </h2>
            <br></br>

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={chris} alt="Christian" style={{width: 135, height: 175, justifyContent: "center", alignItems: "center"}}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={nick} alt="Nick" style={{width: 135, height: 175, justifyContent: "center", alignItems: "center"}}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={will} alt="Will" style={{width: 135, height: 175, justifyContent: "center", alignItems: "center"}}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src={alan} alt="Alan" style={{width: 135, height: 175, justifyContent: "center", alignItems: "center"}}/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

            <br></br>
            <p style={paragraphStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;Christian Vallat &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp; Nick Georgia &nbsp;&nbsp;&nbsp; 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Will Rogers
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Alan Patterson
                                    </p>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
        </div>
    );
}

export default About;