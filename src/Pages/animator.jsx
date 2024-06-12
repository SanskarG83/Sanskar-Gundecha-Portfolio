import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation/Animation - 1718173947864.json';

const AnimationLoader = ({ onEnd }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (animationComplete) {
      onEnd();
    }
  }, [animationComplete, onEnd]);

  const welcomeText = "Welcome to my Portfolio";
  const welcomeTextSpans = welcomeText.split('').map((char, index) => (
    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className={`animation-wrapper ${animationComplete ? 'move-to-top' : ''}`}>
      <div className="floating-code">
        {Array.from({ length: 250 }).map((_, i) => (
          <div
            key={i}
            className="code-line"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            {"<code />"}
          </div>
        ))}
      </div>
      <div className="welcome-text">
        {/* <hr /> */}
        <h1>{welcomeTextSpans}</h1>
        <br />
        {/* <hr /> */}
        <p className='welcome-shortline'>Explore my skills, projects, and experiences</p>
      </div>
      <Lottie
        animationData={animationData}
        loop={false}
        speed={1.5} // Adjust animation speed as needed
        onComplete={() => setAnimationComplete(true)}
      />
      <hr />
    </div>
  );
};

export default AnimationLoader;
