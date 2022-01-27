import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {queueItems} from "../../../mock-data/queue-items";
import QueueItem from "./QueueItem";

export interface QueueComponentProps {
}

function QueueComponent({}: QueueComponentProps){
    return(
        <Box sx = {{
            minWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 1,
            borderRight: 'solid 1px rgb(200, 200, 200)'
        }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 1,
            }}
            >
                <Typography color={'text.important'} fontWeight={900} fontSize={'size.xl'}>
                    DAILY QUEUE
                </Typography>
                <Button variant={'contained'} color="primary">
                    Generate my Queue
                </Button>
            </Box>
            {
                queueItems.map((item, index) => <QueueItem key={index} name={item!.name}
                                                           projectColor={item!.projectColor} plannedWorkload={item!.plannedWorkload}
                />)
            }
        </Box>
    )
}

export default QueueComponent;
