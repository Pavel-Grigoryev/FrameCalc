import React from 'react';
import {Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import s from './Main.module.css';
import {Calculator} from '../Calculator/Calculator';
import {CalcOutput} from '../CalcOutput/CalcOutput';
import {CartDrawer} from '../Cart/CartDrawer';

const paperStyle = {
    padding: '20px'
};


export const Main = () => {

    return (
        <main className={s.main}>
            <Container style={{paddingTop: 70}}>
                <CartDrawer/>
                <Grid container spacing={2} style={{marginTop: 120, justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Grid item xs={4}>
                        <Paper style={paperStyle} elevation={8}>
                            <Calculator/>
                        </Paper>
                    </Grid>
                    <Grid item xs={7}>
                        <Paper style={paperStyle}
                               elevation={8}>
                            <CalcOutput/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

