import React, {useState} from 'react';
import {Box, Collapse, Divider, IconButton, TableCell, TableRow, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Project} from "../project.inteface";
import Tasks from "./Tasks";

export interface ProjectRowProps {
    project: Project
}

function ProjectRow({project}: ProjectRowProps){
    const [open, setOpen] = useState<boolean>(false);

    return(
    <>
        <TableRow onClick={() => setOpen(!open)} sx={{
            cursor: 'pointer',
            '&:hover':{
                backgroundColor: 'rgba(40, 20, 20, 0.05)'
            }
        }}>
            {/*Project Name */}
            <TableCell sx={{borderBottom: 'none'}}>
                <Box sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    {/* Dot before project name*/}
                    <Box sx={{
                        backgroundColor:project.color,
                        width: '20px',
                        height: '20px',
                        borderRadius: '40px',
                    }}/>
                    <Typography sx={{color: project.color}}>
                        {project.name}
                    </Typography>
                </Box>
            </TableCell >
            {/*Project Workload*/}
            <TableCell sx={{borderBottom: 'none'}}>
                <Typography align={'center'}>
                    {project.tasks.reduce((total: number, element) => {
                        return total + element.workload;
                    }, 0)}
                </Typography>
            </TableCell>
            {/*Project Deadline*/}
            <TableCell sx={{borderBottom: 'none'}}>
                <Typography align={'center'}>
                    {project.tasks[0].deadline}
                </Typography>
            </TableCell>
            {/*Expand button */}
            <TableCell sx={{borderBottom: 'none'}}>
                <IconButton
                    aria-label="expand row"
                    size="small"
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Divider/>
                    <Tasks tasks={project.tasks}/>
                </Collapse>
            </TableCell>
        </TableRow>

    </>
    )
}

export default ProjectRow;
