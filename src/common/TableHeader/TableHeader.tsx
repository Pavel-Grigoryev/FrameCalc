import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{width: '35%'}}>Наименование</TableCell>
                <TableCell align="left" sx={{width: '12%'}}>ед.</TableCell>
                <TableCell align="left" sx={{width: '12%'}}>кол-во</TableCell>
                <TableCell colSpan={2} align="left"  sx={{width: '41%'}}>сумма</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;