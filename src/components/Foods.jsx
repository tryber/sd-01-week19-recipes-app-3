import React, { useEffect } from 'react';
import { getMeals } from '../service/FetchingAPI';

export default function Foods() {

  getMeals('random.php')

  useEffect(() => {
    const array = [];
    for (let i = 0; i < 12; i += 1) {
      getMeals('random.php')
      .then(
        (resolve) => {
          if(array.includes(resolve.meals[0])) {
            i -= 1
          } else {
            array.push(resolve.meals[0])
          }
        },
      )
    }

    console.log(array)
    
  }, []);
  return (
    <div>
      <h1> Comida </h1>
    </div>
  );
}
