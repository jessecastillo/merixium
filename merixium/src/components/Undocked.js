import React, { useState } from 'react';
import '../components/Undocked.css'

const FloatingComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div className='main' style={{ width: '225px', height: '155px', position: 'fixed', top: '100px', right: '50px' }}>
          I am so glad you made it here :-)

          Verse of the week:

          "Consider the ravens: They do not sow or reap, they have no storeroom or barn; yet God feeds them. 
          And how much more valuable you are than birds!" - Luke 12:24
          <button className='btn' onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default FloatingComponent;