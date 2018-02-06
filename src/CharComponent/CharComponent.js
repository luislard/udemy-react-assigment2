import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
      <div className="CharComponent">
        <p>{props.length}</p>
        <p>{props.length > 5 ? 'Text too long...' : 'Text too short...'}</p>
      </div>
    )
  };
  
  export default charComponent;