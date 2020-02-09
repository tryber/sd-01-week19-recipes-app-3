import { useEffect, useState } from 'react';

const settingUrl = (text, searchType, setUrl) => {
  const isTextEmpty = text !== '';
  if (isTextEmpty) {
    switch (searchType) {
      case 'ingredient':
        setUrl(`filter.php?i=${text}`);
        break;
      case 'name':
        setUrl(`search.php?s=${text}`);
        break;
      case 'letter':
        setUrl(`search.php?f=${text}`);
        break;
      default:
        break;
    }
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
