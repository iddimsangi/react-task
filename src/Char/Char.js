import React from 'react'

function Char(props) {
    const style = {
        display:'inline-block',
        padding:'16px',
        border:'1px solid orange',
        textAlign:'center',
        margin:'16px'
    }
    return (
        <div style={style}>
            {props.character}
        </div>
    )
}

export default Char


