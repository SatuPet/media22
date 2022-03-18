import React from 'react';
import PropTypes from 'prop-types';

const MediaRow = ({file}) => {
  return (
    <>
      <tr>
        <td>
          <img src={file.thumbnails.w160} alt="kisu"></img>
        </td>
        <td>
          <h1>{file.title}</h1>
          <p>{file.description}</p>
        </td>
        <td>
          <a href="https://metropolia.fi">Link</a>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://placekitten.com/180/100" alt="kisu"></img>
        </td>
        <td>
          <h1>Title</h1>
          <p>jtnjtnjtnjtn</p>
        </td>
        <td>
          <a href="https://metropolia.fi">Link</a>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://placekitten.com/180/100" alt="kisu"></img>
        </td>
        <td>
          <h1>Title</h1>
          <p>jtnjtnjtnjtn</p>
        </td>
        <td>
          <a href={file.filename}>Link</a>
        </td>
      </tr>
    </>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;
