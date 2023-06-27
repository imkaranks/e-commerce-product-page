import React, { useState } from 'react';

function Image({ src, alt, contentCss, imgCss }) {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className={`${contentCss} bg-gray-200 ${imgLoading ? 'animate-pulse' : ''}`}>
      <img src={src} alt={alt} className={`${imgCss} ${imgLoading && 'hidden'}`} onLoad={() => setImgLoading(false)} />
    </div>
  );
}

export default Image;