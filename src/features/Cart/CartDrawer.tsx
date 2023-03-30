import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {useAppSelector} from "../../hooks/useAppSelector";
import {appActions, appSelectors} from "../../app";
import {useActions} from "../../hooks/useAction";


export const CartDrawer = () => {

    const isCartOpen = useAppSelector(appSelectors.selectisCartOpen)

    const {openCart} = useActions(appActions)

    const cartCloseHandler = () => {
        openCart(false)
    }

    return (
        <div>


            <Drawer
                anchor={'right'}
                open={isCartOpen}
                onClose={cartCloseHandler}
            >
                Listf fdffffffffffffffffffffffffffffffffffffffffff
            </Drawer>
        </div>
    );
}