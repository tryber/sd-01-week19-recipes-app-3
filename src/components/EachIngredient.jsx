import React from 'react';

const EachIngredient = ({name, img}) => (
    <div>
        <img className="imgRecipe" src={img} alt="Foto Receita" data-testid={`${name}-card-img`}  width="100px" />
        <h4 className="titleRecipe" data-testid={`${name}-card-name`}  >{name}</h4>
    </div>
);

export default EachIngredient;
