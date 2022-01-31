import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface SidebarButtonProps extends ButtonProps{
    isSelected?: boolean
    children?: React.ReactNode
}

function SidebarButton({children, isSelected, ...rest}: SidebarButtonProps){
    return(
        <Button {...rest} sx={{
            color: isSelected ? 'primary' : 'text.secondary',
            justifyContent: 'left',
            gap: 0.5,
            px: 2,
            py: 1.5,
            textTransform: 'none',
            borderRadius: 2,
        }}>
            {children}
        </Button>
    )
}

export default SidebarButton;
