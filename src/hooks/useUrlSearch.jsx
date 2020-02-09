import { useEffect, useState } from 'react';

const useUrlSearch = (text, searchType) => {
  const [url, setUrl] = useState('random.php');

  const settingUrl = () => {
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
        setUrl('random.php');
    }
  }


  useEffect(() => {
    settingUrl();
  }, [text, searchType])

  return url;
}

export default useUrlSearch;
