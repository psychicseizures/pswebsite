// src/components/Music.js
import React from 'react';
import './Music.css';

const Music = () => {
  return (
    <div className="music-container">
     
 

 <div className="bandcamp-embed-container">
     <h2>DOOM</h2>
      <iframe 
     style={{ border: "0", width: "350px", height: "720px" }}
      src="https://bandcamp.com/EmbeddedPlayer/album=1260994881/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" 
      seamless
      title="viralcontrol"
      allow="autoplay">
      <a href="https://psychicseizures.bandcamp.com/album/doom" 
      >DOOM</a>
      </iframe>
      </div>

     <div className="bandcamp-embed-container">
     <h2>Viral Control</h2>
      <iframe 
     style={{ border: "0", width: "350px", height: "720px" }}
      src="https://bandcamp.com/EmbeddedPlayer/album=3150600332/size=large/bgcol=ffffff/linkcol=e99708/package=974175079/transparent=true/"  
      seamless
      title="viralcontrol"
      allow="autoplay">
      <a href="https://psychicseizures.bandcamp.com/album/viral-control" 
      >Viral Control</a>
      </iframe>
      </div>

      <div className="bandcamp-embed-container">
      <h2>Mass For the Man Behind the Sun</h2>
      <iframe 
      style={{border: "0", width: "350px", height: "621px"}} 
      title="Mass-for-the-Man-Behind-the-Sun"
      src="https://bandcamp.com/EmbeddedPlayer/album=3201888771/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/" 
      seamless>
        <a href="https://psychicseizures.bandcamp.com/album/mass-for-the-man-behind-the-sun">Mass for the Man Behind the Sun</a>
        </iframe>
      </div>

      <div className="bandcamp-embed-container">
      <h2>Pandeharmonium</h2>
      <iframe 
      title='Pandeharmonium'
      style={{border: "0", width: "350px", height: "621px"}}  
      src="https://bandcamp.com/EmbeddedPlayer/album=1632651217/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/" seamless>
        <a href="https://psychicseizures.bandcamp.com/album/pandeharmonium">Pandeharmonium, 2020</a></iframe>
      </div>

      <div className="bandcamp-embed-container">
      <h2>Yellow Fever Pitch</h2>
      <iframe
      title="yellowfeverpitch" 
      style={{border: "0", width: "350px", height: "853px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2370472559/size=large/bgcol=ffffff/linkcol=e99708/package=307083095/transparent=true/" 
      seamless><a 
      href="https://psychicseizures.bandcamp.com/album/yellow-fever-pitch">Yellow Fever Pitch by Psychic Seizures</a>
      </iframe>
      </div>

      <div className="bandcamp-embed-container">
        <h2>Funny Farm</h2>
      <iframe
      title="funnyfarm" 
      style={{border: "0", width: "350px", height: "588px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1942988184/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/" 
      seamless><a 
      href="https://psychicseizures.bandcamp.com/album/funny-farm">Funny Farm</a>
      </iframe>
      </div>

      <div className="bandcamp-embed-container">
      <h2>Mascara Mandrill</h2>
      <iframe 
      title="mascaramandrill"
      style={{border: "0", width: "350px", height: "787px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2702651989/size=large/bgcol=ffffff/linkcol=e99708/package=1458013782/transparent=true/" 
      seamless><a 
      href="https://psychicseizures.bandcamp.com/album/mascara-mandrill">Mascara Mandrill by Psychic Seizures</a>
      </iframe>
      </div>

      <div className="bandcamp-embed-container">
      <h2>Five Songs for the Crocodiles</h2>
      <iframe
      title="fivesongs" 
      style={{border: "0", width: "350px", height: "688px"}}  
      src="https://bandcamp.com/EmbeddedPlayer/album=4138345961/size=large/bgcol=ffffff/linkcol=e99708/package=2153587032/transparent=true/" 
      seamless><a 
      href="https://psychicseizures.bandcamp.com/album/five-songs-for-the-crocodiles">Five Songs for the Crocodiles</a></iframe>
      </div>
        </div>
    
  );
};

export default Music;
