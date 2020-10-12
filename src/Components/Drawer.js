import React, { useState } from 'react';

export function Drawer( { title, z, children } ) {
    const [ isOpen, open ] = useState(false);
    
    function doOpen() {
        open(!isOpen);
    }
    
    return (
        <div style={{ zIndex : z }} className={'drawer ' + (isOpen ? 'open' : 'closed')}>
            <div className={'contents'}>
                <div className={'content-input'}>
                    {children}
                </div>
                <div className={'shadow'}>
                
                </div>
            </div>
            <div className={'face'}>
                <div className={'title-label'}>
                    {title}
                </div>
                <div className={'handle'} onClick={doOpen}>
                
                </div>
            </div>
        </div>
    );
}

export function Slot( { children } ) {
    return (
        <div className={'drawer-slot'}>
            {children}
        </div>
    );
}
