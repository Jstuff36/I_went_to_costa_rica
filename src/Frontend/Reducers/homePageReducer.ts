export interface HomePageStore {
    homeCarouselUrls: string[];
}

export const homePageInitialState: HomePageStore = {
    homeCarouselUrls: [
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210405/mal_image_1_tg3q41.jpg',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210412/mal_image_2_gasrnt.jpg',
        'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210416/mal_image_3_dstj40.jpg'
    ]
};

// FIXME change action type when creating them
export default function homePageReducer(state: HomePageStore = homePageInitialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
