export interface HomePageStore {
    title: string;
}

export const homePageInitialState: HomePageStore = {
    title: 'hello world'
};

// FIXME change action type when creating them
export default function homePageReducer(state: HomePageStore = homePageInitialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
