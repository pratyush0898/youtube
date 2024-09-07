import React from 'react';
import './Coreh.css';

const Coreh = ({ thumbnail, title, channel, channellogo}) => {
  return (
    <>
      <div className="feed-card">
        <div className="fc-thumbnail-wapper">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="fc-info">
          <div className="fc-logo-wapper">
            <img src={channellogo} alt={channel} />
          </div>
          <div className="fc-text">
            <div className="fc-head-wapper">
              <span>{title}</span>
            </div>
            <div className="fc-text-wapper">
              <p>{channel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coreh;
