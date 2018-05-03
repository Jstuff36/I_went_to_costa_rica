import { combineReducers } from 'redux';
import homePageReducer, { HomePageStore, homePageInitialState } from './homePageReducer';
import galleryReducer, { GalleryStore, galleryInitialState } from './galleryReducer';
import shoppingCartReducer, { ShoppingCartStore, shoppingCartInitialState } from './shoppingCartReducer';

export interface StoreState {
    homePageStore: HomePageStore;
    galleryStore: GalleryStore;
    shoppingCartStore: ShoppingCartStore;
}

export const initialState: StoreState = {
    homePageStore: homePageInitialState,
    galleryStore: galleryInitialState,
    shoppingCartStore: shoppingCartInitialState
};

const reducers = {
    homePageStore: homePageReducer,
    galleryStore: galleryReducer ,
    shoppingCartStore: shoppingCartReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;