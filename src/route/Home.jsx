import React, { useState } from 'react';
import './styleHome.css';
// import AppleMusicLogo from "../icons/Apple_music_logo.jpg";
import LogoIcon from '../icons/logoIcon';
import Image from '../icons/large.webp'
// import searchIcon from '../icons/searchIcon';
// import Signup from './Signup';

import Popup from '../components/Popup';
import Signin from './Signin';



const Home = () => {
  // const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);


  return (
    <div>
        <div className='rightSideContainer'>
          
          <div className='heroSection'>
            <div>
              <LogoIcon />
              {/* <img className='logoIcon' src={AppleMusicLogo} alt='Logo'/> */}
            </div>
            <div  className='headline'>
              Discover new music every day.
            </div>
            <div className='notes'>
              <span>Get playlists and albums inspired by the artists and</span>
              <span>genres you're listening to. 1 month free, then</span>
              <span>$10.99/month.</span>
            </div>
            <button className='tryButton' onClick={()=> {
              // setShowSignUp(true)
              setShowSignIn(true)
            }}>Try it Free</button>
            <div className='imageContainer'>
              <img className='image' src={Image} alt='image'/>
            </div>
          </div>
        </div>
        {/* <Popup show={showSignUp}  */}
        <Popup show={showSignIn} 
        onClose={()=>{
          // setShowSignUp(false) // if this onClose is not passed it will not work for the second time
          setShowSignIn(false) // if this onClose is not passed it will not work for the second time
        }}
        >
          {/* <Signup /> */}
          <Signin />
        </Popup>
        
        
    </div>
  )
}

export default Home;