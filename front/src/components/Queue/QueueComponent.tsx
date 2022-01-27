import React from 'react';
import {Box, Typography} from "@mui/material";

export interface QueueComponentProps {
}

function QueueComponent({}: QueueComponentProps){
    return(
        <Box sx = {{
            minWidth: '250px',
            backgroundColor: 'rgba(9, 26, 178, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            padding: 1,
        }}>
            <Typography color={'text.light'} fontWeight={900} align={'center'} fontSize={'size.large'}
            sx={{marginTop: 1}}
            >
                DAILY QUEUE
            </Typography>
        </Box>
    )
}

export default QueueComponent;
