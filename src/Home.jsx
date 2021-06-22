import React from 'react';
import web from './images/web.jpg';

import Common from './Common';

 const Home = () => {
    return (
        <>
        <Common 
             name="Grow your buisness" 
             imgsrc={web} 
             visit='/service' 
             btnname="Get Started"
          />
        </>
    )
}

export default Home;
