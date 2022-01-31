import React from 'react';
import {
    Box,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Sidebar from "../src/components/Sidebar/Sidebar";
import QueueComponent from "../src/components/Queue/QueueComponent"
import ProjectRow from "../src/components/Projects/Project/ProjectRow";
import {projects} from "../mock-data/projects";
import ProjectsComponent from "../src/components/Projects/ProjectsComponent";
export interface QueueProps {
}

function Queue({}: QueueProps){
    return (
        // The main page container
        <Box sx = {{
            display: 'flex',
            minHeight: '100vh'
        }}>
            {/*The sidebar drawer*/}
            <Sidebar/>
            {/*The queue container component*/}
            <QueueComponent/>
            {/*The main body containing the projects*/}
            <Box sx = {{
                flexGrow: 1,
            }}>
                <Box sx = {{
                    display: 'flex',
                    gap: '40px',
                    padding: '10px 20px',
                    marginTop: '10px'
                }}>
                    <Typography color={'text.primary'}>Total Workload : 63</Typography>
                    <Typography color={'text.primary'}>Minimum Workload per day : 7</Typography>
                </Box>
                <Divider/>
                <ProjectsComponent/>
            </Box>

        </Box>
    )
}

export default Queue;
