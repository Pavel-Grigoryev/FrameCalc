import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useActions} from '../../../hooks/useAction';
import {appActions} from '../../../app';
import s from './CartIcon.module.css';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {cartSelectors} from '../index';

export const CartIcon = () => {

    const {openCart} = useActions(appActions);

    const items = useAppSelector(cartSelectors.selectItems);

    const cartOpenHandler = () => {
        openCart(true);
    };

    return (
        <div className={s.cartBlock}>
            {!!items.length && (<div className={s.cartBuble}>
                <span>{items.length}</span>
            </div>)}
            <IconButton onClick={cartOpenHandler} sx={{color: '#FFF'}}>
                <ShoppingCartOutlinedIcon/>
            </IconButton>
        </div>
    );
};

export default CartIcon;