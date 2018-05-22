import { Item } from './galleryReducer';
import { createAction, Action } from 'redux-actions';

export interface ShoppingCartStore {
    [id: number]: Item;
}

export const shoppingCartInitialState: ShoppingCartStore = {};

type AddItems = 'addItems';
const AddItems: AddItems = 'addItems';

interface AddItemAction extends Action<{items: Item[]}> {
    type: AddItems
}

const addItems = createAction<{items: Item[]}>(AddItems)

type Actions = AddItemAction

// FIXME change action type when creating them
export default function shoppingCartReducer(state: ShoppingCartStore = shoppingCartInitialState, action: Actions) {
    switch (action.type) {
        case AddItems:
        
        default:
            return state;
    }
}