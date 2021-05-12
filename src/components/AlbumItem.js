import React from 'react'
import './MusicAlbums.css'

const comprar = (e) => {
    e.preventDefault();
    // alert('Confirmar')
    const cuenta = prompt('Ingrese su número de cuenta');
    console.log(cuenta)
};


export const AlbumItem = ( {id, title, artist, url} ) => {
    return (
        <div className="card" key={ id } >
            <img src={ url } alt="Carpicture"/>
            <div className="container2" >
                <h4><b>{ title }</b></h4><br/>
                <p>{ artist }</p><br/>
                
            </div>
            <form onSubmit={comprar}>
                    <input type="submit" value="Comprar"/>
                </form><br/>
        </div>
    )
}
