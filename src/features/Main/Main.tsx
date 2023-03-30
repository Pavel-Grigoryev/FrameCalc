import React from "react";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import s from "./Main.module.css"
import {Calculator} from "../Calculator/Calculator";
import {CalcOutput} from "../CalcOutput/CalcOutput";
import {CartDrawer} from "../Cart/CartDrawer";

const paperStyleRigth = {
    width: "300px",
    padding: '20px'
}

const paperStyleLeft = {
    width: "500px",
    padding: '20px'
}

export const Main = () => {

    return (
        <main className={s.main}>
            <Container style={{paddingTop: 70}}>
                <CartDrawer/>
                <Grid container spacing={2} style={{marginTop: 160}}>
                    <Grid item xs={6}>
                        <Paper style={paperStyleRigth} elevation={8}>
                            <Calculator/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={paperStyleLeft}
                               elevation={8}>
                            <CalcOutput/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

