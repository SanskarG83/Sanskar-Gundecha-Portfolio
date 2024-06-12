import React, { useState } from 'react';
import './App.css'; // Ensure you import your CSS file

const ImageLoader = ({ src, alt, loader }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="image-loader-wrapper">
      {loading && <div className="image-loader">{loader}</div>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageLoader;
