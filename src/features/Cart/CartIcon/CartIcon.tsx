import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useActions} from "../../../hooks/useAction";
import {appActions} from "../../../app";

export const CartIcon = () => {

    const {openCart} = useActions(appActions)


    const cartOpenHandler = () => {
        openCart(true)
    }

    return (
        <div>
            <IconButton onClick={cartOpenHandler}>
                <ShoppingCartOutlinedIcon/>
            </IconButton>
        </div>
    );
};

export default CartIcon;