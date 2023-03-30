import React, {FC, ReactNode} from 'react'
import {FormLabel} from '@mui/joy'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

type PropsType = {
    children: ReactNode
    label: string
    formikGetFieldProps: any
}

export const SyperSelect: FC<PropsType> = ({label, children, formikGetFieldProps}) => {
    return (
        <FormControl sx={{width: '100%'}}>
            <FormLabel sx={{marginBottom: '7px'}}>
                {label}
            </FormLabel>
            <Select
                placeholder={label}
                {...formikGetFieldProps}
                sx={{borderRadius: '8px', height: '40px'}}
            >
                {children}
            </Select>
        </FormControl>
    );
};

