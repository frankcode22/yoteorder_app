import React from 'react';
import {usePosition} from './usePosition';
export const UsePositions = () => {
    const {latitude, longitude} = usePosition();
    return (
        <code>
        <p class="text-center"> <div class="me-4 text-center text-primary">
        <span><i class="fe fe-map-pin fs-20"></i></span>
    </div>{latitude} ::{longitude}</p>
        </code>
    );
};