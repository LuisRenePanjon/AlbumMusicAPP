import { useState, useEffect } from 'react';
import { AlbumItem } from './AlbumItem';
import './MusicAlbums.css'

const MusicAlbums = ({ albumes }) => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums()
    }, )
    const getAlbums = async () => {
        const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${ encodeURI(albumes) }&api_key=3759fdf56b4e19ee9daa38c1b158bc48&format=json&limit=14`
        const resp = await fetch( url );
        const  results  = await resp.json();
        const {album} = results.results.albummatches;
        const albums = album.map( song => {
            return {
                id      : song?.mbid,
                title   : song?.name,
                artist  : song?.artist,
                url     : song?.image[2]['#text'],
            }
        }); 
        // console.log(albums);
        setAlbums( albums )
    };
    // getAlbums();
    return  <>
            <h3>Resultados de: { albumes }</h3>
            <div className="container">    
                {
                    albums.map( album => (
                        <AlbumItem 
                        key={album.id}
                        {...album }
                        />   
                    ))
                }
            </div>
            </>;
}

export default MusicAlbums;