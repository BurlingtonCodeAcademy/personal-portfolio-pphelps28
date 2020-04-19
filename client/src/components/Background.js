import React from 'react'

function Background(props) {
    return (
        <div>
            <div id="background-layer" className={props.animation} style={{ 'backgroundImage': `url(${props.image})`}}></div>
        </div>
    )
}
export default Background