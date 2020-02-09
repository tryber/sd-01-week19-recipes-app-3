import { useEffect, useState } from 'react';

const useUrlSearch = (text, searchType) => {
  const [url, setUrl] = useState('random.php');

  const settingUrl = () => {
    if (text !== '' && searchType === 'ingredient') {
      setUrl(`filter.php?i=${text}`);
    } else if (text !== '' && searchType === 'name') {
      setUrl(`search.php?s=${text}`);
    } else if (text !== '' && searchType === 'letter') {
      setUrl(`search.php?f=${text}`);
    } else {
      setUrl('random.php');
    }
  }

  useEffect(() => {
    settingUrl();
  }, [text, searchType])

  return url;
}

export default useUrlSearch;