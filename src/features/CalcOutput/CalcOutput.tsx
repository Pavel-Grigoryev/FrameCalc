import React from 'react';
import Typography from '@mui/material/Typography';
import {CalculationTable} from './CalculationTable/CalculationTable';
import s from './CalcOutput.module.css';
import {useAppSelector} from '../../hooks/useAppSelector';
import {calculationSelectors} from '../Calculator';

export const CalcOutput = () => {

    const isCalcDone = useAppSelector(calculationSelectors.selectIsCalcDone)

    return (
        <div className={s.container}>
            <Typography variant="h6" color="inherit" component="div" sx={{marginBottom: '20px'}}>
                Расчет стоимости
            </Typography>
            {isCalcDone && <CalculationTable/>}
        </div>
    );
};

