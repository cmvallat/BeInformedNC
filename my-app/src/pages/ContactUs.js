import React from 'react';
import insta from './images/insta_logo.png'
import fb from './images/fb.png'
import mail from './images/mail.png'
import back from './images/background6.png'

var contactStyle = {
    color: "#0015bc",
    fontSize: 30,
    textAlign: "center"
};

var headerStyle = {
    color: "#ff3333",
    textAlign: "center"
}

var imageStyle = {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center"
    
}

const ContactUs = () => {
    return (
        <div>
            {/*this code is so disgusting, but it simulates spacing until I can implement justifyContent*/}
            <div  style={{backgroundImage: `url(${back})`, backgroundRepeat: "round", backgroundSize: "cover"}}>
                <br></br>
                <br></br>
                
                <h2 style={headerStyle} >
                Are you a candidate or voter who wants to get in touch? Click below to DM us on social media, or email us at the address below!
                </h2>
                
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={insta} alt="instaLogo"  style={imageStyle}/>

                <span  > 
                <a href="http://instagram.com/kingjames" style={contactStyle}>
                &nbsp;&nbsp;&nbsp;Instagram: @BeInformedNC
                </a> 
                </span>

                <br></br>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={fb} alt="fbLogo" width="75" height="75" />

                <span style={contactStyle}> 
                <a href="http://facebook.com/LeBron" style={contactStyle}>
                &nbsp;&nbsp;&nbsp;Facebook: @Be_Informed_NC 
                </a>
                </span>

                <br></br>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={mail} alt="emailLogo" width="75" height="75"/>
                <span style={contactStyle}> &nbsp;&nbsp;&nbsp;Email: @beinformednc@gmail.com </span>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </div>    
        </div>
    );
}

export default ContactUs;