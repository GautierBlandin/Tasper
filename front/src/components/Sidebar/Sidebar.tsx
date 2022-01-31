import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FolderIcon from '@mui/icons-material/Folder';
import Link from 'next/link';

export interface SidebarProps {
}

function Sidebar({}: SidebarProps){
    return(
    <Drawer variant={'permanent'} sx={{width: '200px', flexShrink: 0}}>
        <Typography align='center' sx={{fontFamily: 'Poller One', fontSize: '35px', width: '100%', padding: '10px 0'}}>TASPER</Typography>
        <Divider/>
        <List sx={{width: '200px'}}>
            <Link href={'/queue'}>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Queue'} sx={{color: 'text.primary'}}/>
                </ListItem>
            </Link>
            <Link href={'/projects'}>
                <ListItem button>
                    <ListItemIcon>
                        <ListItemIcon>
                            <FolderIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Projects'} sx={{color: 'text.primary'}}/>
                    </ListItemIcon>
                </ListItem>
            </Link>
        </List>
    </Drawer>
    )
}

export default Sidebar;
