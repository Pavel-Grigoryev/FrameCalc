import React from 'react';
import Typography from '@mui/material/Typography';
import {useAppSelector} from '../../../hooks/useAppSelector';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useActions} from '../../../hooks/useAction';
import {cartActions, cartSelectors} from '../../Cart';
import TableHeader from '../../../common/TableHeader/TableHeader';
import s from './CalculationTable.module.css';
import {calculationSelectors} from '../../Calculator';


const createData = (
    name: string,
    unit: string,
    quantity: number,
    cost: number
) => {
    return {name, unit, quantity, cost};
};

export const CalculationTable = () => {

    const calculation = useAppSelector(calculationSelectors.selectCalculation);
    const items = useAppSelector(cartSelectors.selectItemsWithoutId);
    console.log(items);

    const {addItem} = useActions(cartActions);

    const rows = [
        createData(calculation.listName, calculation.listUnit, calculation.quantityLists, calculation.costLists),
        createData(calculation.pipeName, calculation.pipeUnit, calculation.totalPipesLength, calculation.costPipes),
        createData(calculation.fixName, calculation.fixUnit, calculation.quantityFixes, calculation.costFixes)
    ];

    const totalCost = (items: RowType[]) => {
        const sum = items.map(({cost}) => cost).reduce((sum, i) => sum + i, 0);
        return sum ? `${sum}` : '0';
    };

    const addItemHandler = (item: RowType) => {
        addItem({item});
    };
    return (
        <div className={s.tableBlock}>
            <Typography>
                Площадь изделия: {calculation.area} {calculation.listUnit}
            </Typography>
            <Typography>
                Расчетный размер ячейки: {calculation.stepFrameLength} x {calculation.stepFrameWidth}
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHeader/>
                    <TableBody>
                        {rows.map((row, index) => {
                            const isInCart = !!items.find(el => JSON.stringify(el) === JSON.stringify(row));
                            return (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.unit}</TableCell>
                                    <TableCell align="left">{row.quantity}</TableCell>
                                    <TableCell align="left">{row.cost}</TableCell>
                                    <TableCell align="right">
                                        <Button type={'button'} size={'small'}
                                                disabled={isInCart} variant={'outlined'}
                                                color={'primary'} sx={{fontSize: 11}}
                                                onClick={() => addItemHandler(row)}>
                                            {isInCart ? 'Добавлено' : 'Добавить в корзину'}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                        }

                        <TableRow>
                            <TableCell colSpan={3}>Итого</TableCell>
                            <TableCell align="left">{totalCost(rows)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

// Types 

export type RowType = ReturnType<typeof createData>