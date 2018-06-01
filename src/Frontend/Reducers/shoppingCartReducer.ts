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

type RemoveItem = 'removeItem';
const RemoveItem: RemoveItem = 'removeItem';

interface RemoveItemAction extends Action<number> {
    type: RemoveItem;
}

export const removeItem = createAction<number>(RemoveItem);

export type ShoppingCartActions = AddItemAction | RemoveItemAction;

export const shoppingCartActions = {
    addItems,
    removeItem
};

// FIXME change action type when creating them
export default function shoppingCartReducer(state: ShoppingCartStore = shoppingCartInitialState, action: ShoppingCartActions) {  
    switch (action.type) {
        case AddItems:
           return {
            cartItems: [
                ...state.cartItems.filter(cartItem => cartItem.item.id !== action.payload!.item.id),
                action.payload
            ]               
           };
        case RemoveItem:
           return {
               cartItems: [
                   ...state.cartItems.filter(cartItem => cartItem.item.id !== action.payload)
               ]
           };
        default:
            return state;
    }
}