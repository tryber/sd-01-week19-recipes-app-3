import { useEffect, useState } from 'react';

const settingUrl = (text, searchType, setUrl) => {
  const isTextEmpty = text === '';
  const objSwitch = {
    ingredient: () => setUrl(`filter.php?i=${text}`),
    name: () => setUrl(`search.php?s=${text}`),
    letter: () => setUrl(`search.php?f=${text}`)
  }
  if (!isTextEmpty) {
    const func = objSwitch[searchType]
    return func();
  }
  setUrl('random.php');
};

const useUrlSearch = (text, searchType) => {
  const [url, setUrl] = useState('random.php');
  useEffect(() => {
    settingUrl(text, searchType, setUrl);
  }, [text, searchType]);

  return url;
};

export default useUrlSearch;
