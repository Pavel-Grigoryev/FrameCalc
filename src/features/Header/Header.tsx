import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import CartIcon from "../Cart/CartIcon/CartIcon";

export const Header = () => {
    return (
        <>
            <AppBar position="fixed" sx={{height: 70}}>
                <Toolbar variant="dense" sx={{minHeight: 70, justifyContent: "space-between"}} >
                    <Typography variant="h6" color="inherit" component="div">
                        Frame calculator
                    </Typography>
                    <CartIcon/>
                </Toolbar>
            </AppBar>

        </>
    );
};

