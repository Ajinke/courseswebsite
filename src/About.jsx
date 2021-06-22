import React from 'react'

import web2 from './images/web2.jpg';
import Common from './Common'

 const About = () => {
    return (
        <>
        <Common 
            name="Welcome to About page" 
            imgsrc={web2} 
            visit='/contact' 
            btnname="Contact Now" />
       </>
    )
}

export default About;
