import React from 'react';

const TabComponent = () => {
  return (
    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabComponent;
