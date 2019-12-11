import React from 'react';

const Contact = () => (
  <>
  <h2>Mieux me connaitre</h2>
    <p><a href="mailto:maxime.urvoy@gmail.com">maxime.urvoy@gmail.com</a></p>
    <p>06.85.12.16.56</p>
    <p><a href={('/Maxime_Urvoy.pdf')}
   download="Maxime_Urvoy.pdf">Télécharger mon CV</a></p>
    <a href='https://www.linkedin.com/in/maxime-urvoy-093577196/' target="_blank" rel="noopener noreferrer"><img className='icon'  src={('/linkedin.png')} alt='linkedin icon'/></a>
  </>
);

export default Contact;



