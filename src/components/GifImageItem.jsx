import React from 'react'

export const GifImageItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img alt={title} src={url} />
            <p>{title}</p>
        </div>
    )
}
