import { Item } from './galleryReducer';
import { createAction, Action } from 'redux-actions';

export interface CartItem {
    item: Item;
    quantity: number;
}

export interface ShoppingCartStore {
    cartItems: CartItem[];
}

export const shoppingCartInitialState: ShoppingCartStore = {
    cartItems: []
};

type AddItems = 'addItems';
const AddItems: AddItems = 'addItems';

interface AddItemAction extends Action<CartItem> {
    type: AddItems;
}

export const addItems = createAction<CartItem>(AddItems);

export type ShoppingCartActions = AddItemAction;

export const shoppingCartActions = {
    addItems
};

// FIXME change action type when creating them
export default function shoppingCartReducer(state: ShoppingCartStore = shoppingCartInitialState, action: ShoppingCartActions) {
    const {type, payload} = action;
    switch (type) {
        case AddItems:
           return {
            cartItems: [
                ...state.cartItems.filter(cartItem => cartItem.item.id !== payload!.item.id),
                payload
            ]               
           };
        default:
            return state;
    }
}