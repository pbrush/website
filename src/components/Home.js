// components/Home.js
import React from 'react';
import './Home.css';
import CardSlider from './CardSlider'; // Import the CardSlider component
import me from "../images/me.jpg";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <img src={me} alt="No load :(" className="landing-image" />
        <div className="text-content">
          <h1>Howdy!</h1>
          <h2>My name is Phil, welcome to my portfolio!</h2>
          <p>I am a Master's student at WPI. I am studying Robotics Engineering with a specialization in perception. I am a student researcher in the PeAR Group, and a member of the Robotics Engineering Honor Society.</p>
        </div>
      </div>
      <CardSlider />
    </div>
  );
}

export default Home;

