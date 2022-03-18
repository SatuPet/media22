// import React from 'react'
import PropTypes from 'prop-types';
import MediaRow from './MediaRow';

const mediaTable = ({mediaArray}) => {
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow key={index} file={item} />;
        })}
        {/* <MediaRow /> */}
      </tbody>
    </table>
  );
};

mediaTable.propTypes = {
  mediaArray: PropTypes.array.isRequired,
};

export default mediaTable;
