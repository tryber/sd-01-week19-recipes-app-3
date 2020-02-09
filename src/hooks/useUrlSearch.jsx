import { useEffect, useState } from 'react';

const settingUrl = (text, searchType, setUrl) => {
  const isTextEmpty = text !== '';
  if (isTextEmpty !== '' && searchType === 'ingredient') {
    setUrl(`filter.php?i=${text}`);
  } else if (isTextEmpty !== '' && searchType === 'name') {
    setUrl(`search.php?s=${text}`);
  } else if (isTextEmpty !== '' && searchType === 'letter') {
    setUrl(`search.php?f=${text}`);
  } else {
    setUrl('random.php');
  }
};

const useUrlSearch = (text, searchType) => {
  const [url, setUrl] = useState('random.php');

  useEffect(() => {
    settingUrl(text, searchType, setUrl);
  }, [text, searchType]);

  return url;
};

export default useUrlSearch;
