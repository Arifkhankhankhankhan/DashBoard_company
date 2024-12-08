import React from 'react';
import './Style/Dropsize.css';

const DropSize = () => {
  return (
    <div className="card">
      <h3>Drop Size (AOV)</h3>
      <div className="drop-size">
        <div className="circle"><p>40%</p><p>&lt;250</p></div>
        <div className="circle"><p>64%</p><p>250-500</p></div>
        <div className="circle"><p>79%</p><p>500-750</p></div>
        <div className="circle"><p>97%</p><p>&gt;751</p></div>
      </div>
    </div>
  );
};

export default DropSize;
