const uuid = require('uuid-v4');

export interface Item {
    id: number;
    url: string[];
    name: string;
    description?: string;
    price: number;
}

export interface GalleryStore  {
    necklaces: Item[];
}

export const galleryInitialState: GalleryStore = {
    necklaces: [
        {
            id: uuid(),
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523711934/necklace_1_n5rmdd.png'],
            name: 'necklace1',
            description: 'earew',
            price: 25
        },
        {
            id: uuid(),
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712009/necklace_2_gk3fzf.jpg'],
            name: 'necklace2',
            description: 'earew',
            price: 25
        },
        {
            id: uuid(),
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712075/necklace_3_glom7r.jpg'],
            name: 'necklace3',
            description: 'earew',
            price: 25
        },
        {
            id: uuid(),
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712040/necklace_4_x9dtq3.jpg'],
            name: 'necklace4',
            description: 'earew',
            price: 25
        },
        {
            id: uuid(),
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712132/necklace_5_ccqbny.jpg'],
            name: 'necklace5',
            description: 'earew',
            price: 25
        },
        {
            id: uuid(),
            url: ['https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712099/Necklace_6_iinpoc.jpg'],
            name: 'necklace6',
            description: 'A necklace',
            price: 69
        }
    ] 
};

// FIXME change action type when creating them
export default function galleryReducer(state: GalleryStore = galleryInitialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}