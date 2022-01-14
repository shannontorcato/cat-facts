import React from 'react';
import './Card.css'
import 'tachyons';

const Card = () => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-2'>
            <img alt="pixelated cat" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F259-2598654_cat-pixel-art-png-download-simple-cat-pixel.png&f=1&nofb=1'/>
            <div>
                <h2>Fact</h2>
                <p>Some random facts abouts cats</p>
            </div>
        </div>
    )
}

export default Card;