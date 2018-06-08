import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from './Carousel';
import { Button } from 'semantic-ui-react';
import { Footer } from './Footer';
import { StoreState } from '../Reducers/rootReducer';
import { withRouter, RouteComponentProps } from 'react-router-dom';

function mapStateToProps(store: StoreState) {
    const { homePageStore: { homeCarouselUrls }} = store;
    return {homeCarouselUrls};
}

interface StateProps {
    homeCarouselUrls: string[];
}

type OwnProps = RouteComponentProps<{}>;
type ComponentProps = StateProps & OwnProps;

export const HomePage = withRouter(
    connect<StateProps>(mapStateToProps)(
        class HomePage extends React.Component<ComponentProps> {

            handleDropdownClick = (item) => {
                const { history } = this.props;
                history.push('/gallery');
            }

            render() {
                const { homeCarouselUrls, history } = this.props;
                return (
                    <div>
                        <Carousel imgUrls={homeCarouselUrls}/>
                        <div className={'homePageWorkSpace'}>
                            <div>
                                Check out our collection                                
                            </div>
                            <Button onClick={() => history.push('/gallery')}>
                                Shop Now
                            </Button>
                        </div>
                        <Footer/>
                    </div>
                );
            }
        }
    )
);