import React from 'react';
import {Box} from "@mui/material";

export interface CircleProps {
    size: number;
    color: string;
}

function Circle({size, color}: CircleProps){
    return(
        <Box sx={{
            backgroundColor: color,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${4 * size}px`,
        }}/>
    )
}

export default Circle;
