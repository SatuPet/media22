// TODO: add necessary imports
// import { useMedia } from '../hooks/ApiHooks';
import {baseUrl} from '../utils/variables';
import {useEffect, useState} from 'react';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error('response errerror');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const mediaResponse = await fetch(baseUrl + 'media');
      const media = await mediaResponse.json();
      const allFiles = await Promise.all(
        media.map(async (file) => {
          const fileResponse = await fetch(`${baseUrl}media/${file.file_id}`);
          return await fileResponse.json();
        })
      );
      setMediaArray(allFiles);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia, fetchJson};
