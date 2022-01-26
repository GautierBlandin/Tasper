import React from 'react';
import {
    Box,
    Button,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Sidebar from "../src/components/Sidebar";
import ProjectRow from "../src/components/Project/ProjectRow";
import AddIcon from '@mui/icons-material/Add';
import {projects} from "../mock-data/projects";

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
                <Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography sx={{textTransform: 'uppercase'}}>
                                            Project
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography align={'center'} sx={{textTransform: 'uppercase'}}>
                                            Workload
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography align={'center'} sx={{textTransform: 'uppercase'}}>
                                            Next Deadline
                                        </Typography>
                                    </TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map((project, i) => <ProjectRow project={project} key={i}/>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

        </Box>
    )
}

export default Projects;
