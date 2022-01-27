import React from 'react';
import {Box, Typography} from "@mui/material";
import Circle from "../Circle";

export interface QueueItemProps {
    projectColor: string,
    name: string,
    plannedWorkload: number
}

function QueueItem({projectColor, name, plannedWorkload}: QueueItemProps){
    return(
    <Box sx={{
        borderRadius: 6,
        padding: 2,
        display: 'flex',
        border: 'solid 1px rgb(240, 240, 240)',
        '&:hover': {
            backgroundColor: 'rgb(240, 240, 240)',
            cursor: 'pointer'
        }
    }}>
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center'
        }}>
            <Circle size={15} color={projectColor}/>
            <Typography sx={{
                color: projectColor,
                marginLeft: 1
            }}>
                {name}
            </Typography>
        </Box>
        <Box>
            <Typography color={'text.primary'}>
                Workload: {plannedWorkload}
            </Typography>
        </Box>

    </Box>
    )
}

export default QueueItem;
