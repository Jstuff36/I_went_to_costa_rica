import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from './Carousel';
import { Button } from 'semantic-ui-react';
import { Footer } from './Footer';
import { StoreState } from '../Reducers/rootReducer';

function mapStateToProps(store: StoreState) {
    return {};
}

export const HomePage = connect(mapStateToProps)(
    class HomePage extends React.Component {
        render() {
            return (
                <div>
                    <Carousel/>
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