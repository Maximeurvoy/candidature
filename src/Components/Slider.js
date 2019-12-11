import React from 'react';
import Slider from 'infinite-react-carousel';
import Pourquoi from './Pourquoi';
import EtAvant from './EtAvant';
import CeQueJaime from './CeQueJaime';
import CeQuiMeTouche from './CeQuiMeTouche';
import CeQueJeDetesteFaire from './CeQueJeDetesteFaire';
import CeQuiMagace from './CeQuiMagace';

const CvSlider = () => (
  <Slider classname='slider' dots>
    <div>
      <Pourquoi/>
    </div>
    <div>
      <EtAvant/>
    </div>
    <div>
      <CeQueJaime/>
    </div>
      <CeQuiMeTouche/>
    <div>
      <CeQueJeDetesteFaire/>
    </div>
    <div>
      <CeQuiMagace/>
    </div>
  </Slider>
);

export default CvSlider;