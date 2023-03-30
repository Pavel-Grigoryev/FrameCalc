import React from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Наименование</TableCell>
                <TableCell align="left">ед.</TableCell>
                <TableCell align="left">кол-во</TableCell>
                <TableCell colSpan={2} align="left">сумма</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;