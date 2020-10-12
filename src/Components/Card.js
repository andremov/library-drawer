import React, { useState } from 'react';

export function Card( { title } ) {
    const [ isSelected, select ] = useState(false);
    
    function doSelect() {
        select(!isSelected)
    }
    
    return (
        <div className={'card' + (isSelected ? ' selected' : '')}>
            <div className={'card-content'} onClick={doSelect}>
                {title}
            </div>
        </div>
    );
}

