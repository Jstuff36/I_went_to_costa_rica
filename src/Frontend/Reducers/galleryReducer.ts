export interface GalleryStore  {
    necklaces: string[];
}

export const galleryInitialState: GalleryStore = {
    necklaces: [
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523711934/necklace_1_n5rmdd.png',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712009/necklace_2_gk3fzf.jpg',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712075/necklace_3_glom7r.jpg',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712040/necklace_4_x9dtq3.jpg',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712132/necklace_5_ccqbny.jpg',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523712099/Necklace_6_iinpoc.jpg'
    ] 
};

// FIXME change action type when creating them
export default function galleryReducer(state: GalleryStore = galleryInitialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}