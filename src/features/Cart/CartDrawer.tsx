import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {useAppSelector} from '../../hooks/useAppSelector';
import {appActions, appSelectors} from '../../app';
import {useActions} from '../../hooks/useAction';
import {CartTable} from './CartTable/CartTable';
import s from './CartDrawer.module.css';
import {cartSelectors} from './index';
import Typography from '@mui/material/Typography';


export const CartDrawer = () => {

    const isCartOpen = useAppSelector(appSelectors.selectisCartOpen);
    const items = useAppSelector(cartSelectors.selectItems);

    const {openCart} = useActions(appActions);

    const cartCloseHandler = () => {
        openCart(false);
    };

    return (
        <Drawer
            anchor={'right'}
            open={isCartOpen}
            onClose={cartCloseHandler}
        >
            <div className={s.cartCont}>
                {!!items.length ? <CartTable/> :
                    <Typography variant="h6" align={'center'}>
                        В корзине нет товаров
                    </Typography>
                }
            </div>
        </Drawer>

    );
};