import React from 'react';
import {Task} from "./project.inteface";
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

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
                    <Typography>
                        Name
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography align={'center'}>
                        Workload
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography align={'center'}>
                        Deadline
                    </Typography>
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
                </TableRow>
            )}
        </TableBody>
    </Table>
    )
}

export default Tasks;
