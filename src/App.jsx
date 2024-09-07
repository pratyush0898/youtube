import React from 'react';
import { video } from './data/Video.jsx';
import Coreh from './Components/coreh/Coreh';
import NavBar from './Components/NavBar/NavBar.jsx';
import './App.css';

function App() {
  return (
    <>
    
      <NavBar />
      <br />
      <main id="main" className="main" title='main'>
      <div class="sidebar">
        <div class="shortcut-links">
          <div class="side-link active">
            
            <p>Home</p>
          </div>
          <div class="side-link">
            
            <p>Trending</p>
          </div>
          <div class="side-link">
            
            <p>Shopping</p>
          </div>
          <div class="side-link">
            
            <p>Music</p>
          </div>
          <div class="side-link">
            
            <p>Movies</p>
          </div>
          <div class="side-link">
            
            <p>Live</p>
          </div>
          <div class="side-link">
            
            <p>Gaming</p>
          </div>
          <div class="side-link">
            
            <p>News</p>
          </div>
          <div class="side-link">
            
            <p>Sports</p>
          </div>
          <div class="side-link">
            
            <p>Courses</p>
          </div>
          <div class="side-link">
            
            <p>Fashion & Beauty</p>
          </div>
          <div class="side-link">
            
            <p>Podcasts</p>
          </div>
        </div>
      </div>

        <div className="youtube-feed">
          {video.map((v, i) => (
            <Coreh
              thumbnail={v.thumbnail}
              title={v.title}
              description={v.description}
              channel={v.channel}
              channellogo={v.channellogo}
              key={i}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
