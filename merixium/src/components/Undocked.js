import React, { useState } from 'react';
import '../components/Undocked.css'

const FloatingComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div className='main' style={{ width: '225px', height: '40px', position: 'fixed', top: '150px', right: '50px' }}>
          I am so glad you made it here :-)  
          <button className='btn' onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default FloatingComponent;