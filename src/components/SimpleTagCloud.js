import React from 'react';
import './SimpleTagCloud.css'; // Asegúrate de importar los estilos

const SimpleTagCloud = ({ tags }) => {
  return (
    <div className="tag-cloud-container">
      <div className="tag-cloud">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleTagCloud;
