import React from 'react';

function Cards({image}) {
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
        <img src={image.urls.small} alt={image.alt_description} />
    </figure>
  </div> 
  </div>
  }

export default Cards;
