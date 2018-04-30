import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from './Carousel';
import { Button } from 'semantic-ui-react';
import { Footer } from './Footer';
import { StoreState } from '../Reducers/rootReducer';

function mapStateToProps(store: StoreState) {
    const { homePageStore: { homeCarouselUrls }} = store;
    return {homeCarouselUrls};
}

interface StateProps {
    homeCarouselUrls: string[];
}

type ComponentProps = StateProps;

export const HomePage = connect(mapStateToProps)(
    class HomePage extends React.Component<ComponentProps> {
        render() {
            const { homeCarouselUrls } = this.props;
            return (
                <div>
                    <Carousel imgUrls={homeCarouselUrls}/>
                    <div>
                        <div>
                            Check out our collection                                
                        </div>
                        <Button>
                            Shop Now
                        </Button>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
);