import React from 'react';
import {
    Box,
    Button,
    Divider,
    Typography
} from "@mui/material";
import Sidebar from "../src/components/Sidebar";
import AddIcon from '@mui/icons-material/Add';
import ProjectsComponent from "../src/components/Projects/ProjectsComponent";

export interface ProjectsProps {
}

function Projects({}: ProjectsProps){
    return(
        // The main page container
        <Box sx = {{
            display: 'flex',
            minHeight: '100vh'
        }}>
            {/*The sidebar drawer*/}
            <Sidebar/>
            {/*The main area*/}
            <Box sx = {{
                flexGrow: 1,
            }}>
                {/*The project page header*/}
                <Box sx = {{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 20px'
                }}>
                    <Typography color={'black'} sx={{fontWeight: 'bold'}}>Projects</Typography>
                    <Button variant={'contained'} startIcon={<AddIcon/>}>Add Project</Button>
                </Box>
                <Divider/>
                {/*Summary panel*/}
                <Box sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                    padding: '10px 20px',
                }}>
                    <Typography color={'primary'}> SUMMARY: </Typography>
                    <Typography color={'text.primary'}>Total Workload : 63</Typography>
                    <Typography color={'text.primary'}>Minimum Workload per day : 7</Typography>
                </Box>
                <Divider/>
                <ProjectsComponent/>
            </Box>
        </Box>
    )
}

export default Projects;
