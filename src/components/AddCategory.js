import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AddCategory.css'

export const AddCategory = ({ setAlbums }) => {
    const [inputValue, setInputValue] = useState( '' );
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2 ){
            setAlbums( cats => [ inputValue] );
            setInputValue( '' );
        }

    };
    return  <form onSubmit={ handleSubmit }>
                <input  type="text" 
                        value={ inputValue }
                        onChange={ handleInputChange }
                        placeholder="Ingrese el nombre del disco que desea"
                />
            </form>;
}

AddCategory.propTypes = {
    setAlbums : PropTypes.func.isRequired
}