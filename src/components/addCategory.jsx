import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

      const onInputChange = (event) => {
          setInputValue( event.target.value )
      };

      const onSumit = ( event ) => {
        event.preventDefault();
          if ( inputValue.trim().length <= 1 ) return;
          onNewCategory(inputValue.trim());
              setInputValue('');
        };

  return (
    <form onSubmit={ onSumit }>
        <input
        type="text"
        value={ inputValue }
        onChange={ onInputChange }
        placeholder={ 'Buscar gifs' }
        />
    </form>
  )
}
