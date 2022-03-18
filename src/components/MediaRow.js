import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';

const MediaRow = ({file}) => {
  console.log('MediaRow');
  return (
    <tr>
      <td>
        <img src={mediaUrl + file.thumbnails.w169} alt="kissa" />
      </td>
      <td>
        <h4>{file.title}</h4>
        <p>{file.description}</p>
      </td>
      <td>
        <a href={file.filename}>View</a>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
