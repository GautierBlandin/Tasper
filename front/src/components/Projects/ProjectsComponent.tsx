import React from 'react';
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {projects} from "../../../mock-data/projects";
import ProjectRow from "./Project/ProjectRow";

export interface ProjectsProps {
}

function ProjectsComponent({}: ProjectsProps){
    return(
        <Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography sx={{textTransform: 'uppercase'}} fontWeight={900} fontSize={'size.medium'}>
                                    Project
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography align={'center'} sx={{textTransform: 'uppercase'}} fontWeight={900} fontSize={'size.medium'}>
                                    Workload
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography align={'center'} sx={{textTransform: 'uppercase'}} fontWeight={900} fontSize={'size.medium'}>
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
    )
}

export default ProjectsComponent;
