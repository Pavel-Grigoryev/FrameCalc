import React from 'react';
import Typography from "@mui/material/Typography";
import {CalculationTable} from "./CalculationTable/CalculationTable";

export const CalcOutput = () => {
    return (
        <div>
            <Typography variant="h6" color="inherit" component="div">
                Расчет стоимости
            </Typography>
            <CalculationTable/>
        </div>
    );
};

