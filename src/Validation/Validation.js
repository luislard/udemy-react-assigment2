import React from 'react';

const validation = (props) => {
    return (
      <div className="Validation">
        <p>{props.length}</p>
        <p>{props.length > 5 ? 'Text too long...' : 'Text too short...'}</p>
      </div>
    )
  };
  
  export default validation;