
import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import MusicAlbums from './MusicAlbums';

export const MusicMarket = () => {
    const [albums, setAlbums] = useState(['Believe']);

    return (
        <>
            <h1>ESB App con React</h1>
            <AddCategory setAlbums={ setAlbums }/>
            <hr/>

            <ol>
                {
                    albums.map( album => (
                        <MusicAlbums 
                            key={ album }
                            albumes={ album }
                        />
                    ))
                }
            </ol>
        </>
    );
}
