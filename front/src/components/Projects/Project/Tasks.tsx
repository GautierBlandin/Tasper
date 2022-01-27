import React from 'react';
import {Task} from "../project.inteface";
import {Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export interface TasksProps {
    tasks: Task[];
}

function Tasks({tasks}: TasksProps){
    return(
    <Table>
        {/*Tasks Table Head*/}
        <TableHead>
            <TableRow>
                <TableCell>
                    <Typography fontSize={'size.medium'} fontWeight={700}>
                        TASK
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography align={'center'} fontSize={'size.medium'} fontWeight={700}>
                        WORKLOAD
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography align={'center'} fontSize={'size.medium'} fontWeight={700}>
                        DEADLINE
                    </Typography>
                </TableCell>
                <TableCell align={'center'}>
                    <Button variant={'contained'} color={'success'} startIcon={<AddIcon/>}>Add Task</Button>
                </TableCell>
            </TableRow>
        </TableHead>
        {/*Tasks Table Body*/}
        <TableBody>
            {tasks.map((task, index) =>
                <TableRow key={index}>
                    <TableCell>
                        <Typography>
                            {task.name}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography align={'center'}>
                            {task.workload}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography align={'center'}>
                            {task.deadline}
                        </Typography>
                    </TableCell>
                    <TableCell align = {'center'}>
                        <IconButton color={'error'}><DeleteIcon/></IconButton>
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
    )
}

export default Tasks;
