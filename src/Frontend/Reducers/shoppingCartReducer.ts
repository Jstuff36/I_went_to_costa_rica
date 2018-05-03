import { Item } from './galleryReducer';

export interface ShoppingCartStore {
    selectedItems: Item[];
}

export const shoppingCartInitialState: ShoppingCartStore = {
    selectedItems: [
        {
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523711934/necklace_1_n5rmdd.png'],
            description: 'earew',
            price: 25
        }
    ]
};

// FIXME change action type when creating them
export default function shoppingCartReducer(state: ShoppingCartStore = shoppingCartInitialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}