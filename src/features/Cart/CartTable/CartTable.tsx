import React from 'react';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {cartActions, cartSelectors} from '../index';
import {useActions} from '../../../hooks/useAction';
import {RowCartType} from '../cartSlice';
import s from '../../CalcOutput/CalculationTable/CalculationTable.module.css';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHeader from '../../../common/TableHeader/TableHeader';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

export const CartTable = () => {

    const items = useAppSelector(cartSelectors.selectItems);

    const {deleteItem} = useActions(cartActions);

    const totalCost = (items: RowCartType[]) => {
        const sum = items.map(({cost}) => cost).reduce((sum, i) => sum + i, 0);
        return sum ? `${sum}` : '0';
    };

    const deleteItemHandler = (id: string) => {
        deleteItem({id});
    };
    return (
        <div className={s.tableBlock}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHeader/>
                    <TableBody>
                        {items.map((item) => {
                            return (
                                <TableRow
                                    key={item.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="left">{item.unit}</TableCell>
                                    <TableCell align="left">{item.quantity}</TableCell>
                                    <TableCell align="left">{item.cost}</TableCell>
                                    <TableCell align="right">
                                        <Button type={'button'} size={'small'}
                                                variant={'outlined'}
                                                color={'primary'} sx={{fontSize: 11}}
                                                onClick={() => deleteItemHandler(item.id)}>
                                            Удалить из корзины
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                        }

                        <TableRow>
                            <TableCell colSpan={3}>Итого</TableCell>
                            <TableCell align="left">{totalCost(items)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

