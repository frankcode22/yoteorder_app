import React from 'react';
import {usePosition} from './usePosition';
export const UsePositions = () => {
    const {latitude, longitude} = usePosition();
    return (
        <code>
            My position,<br/>
            latitude: {latitude}<br/>
            longitude: {longitude}<br/>
        </code>
    );
};