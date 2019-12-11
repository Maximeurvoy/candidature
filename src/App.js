import React from 'react';
import './App.css';
import CvSlider from './Components/Slider';

function App() {
  return (
  <div>
    <h1>Maxime URVOY <small>Apprenant developpeur web Js/React</small></h1>
    <div className='wrapper'>
      <div className='divImage'>
        <img src={('me.jpg')} alt='me'></img>
      </div>
      <div className='whoIam'>
        <CvSlider className='containerOne'/>
      </div>
    </div>
  </div>
  );
}

export default App;
