import React, { useState, useEffect, useRef } from 'react'

import Playlists from './Playlists'

const Categories = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [musc] = useState(props);

    // useEffect(() => {
    //     console.log(musc)
    // });

    const dataCategories = [
        {
            id: 1,
            name: 'Musique Ivoirienne',
        },

        {
            id: 2,
            name: 'Musique Nigeriane',
        },

        {
            id: 3,
            name: 'Music Congolaise ',
        },

    ]

    useEffect(() => {
        console.log(musc);
    }, [musc]);

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }

    return (
        <div className="mainInner">
            {/* {musc.map((t) => (
                <li>{t.title}</li>
            ))} */}
             {dataCategories.map((category, id) => (
                <div className="cardWrap" key={id}>
                    <h2>{category.name}</h2>
                    <Playlists isPlaying={props.isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} category_id={category.id} />
                </div>
             ))}

        </div>
    )
}

export default Categories