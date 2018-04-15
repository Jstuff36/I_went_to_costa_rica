import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Reducers/rootReducer';
import { RouteProps } from 'react-router';
import { Item } from '../Reducers/galleryReducer';
import '../Styles/Gallery.css';

interface OwnProps {
    itemTypeToDisplay: string;
}

interface StateProps {
    galleryUrls: Item[];
}

type ComponentProps = OwnProps & StateProps & RouteProps;

const mapStateToProps = (store: StoreState, props: ComponentProps): StateProps => {
    const itemTypeToDisplay = props.location!.state ? props.location!.state.itemTypeToDisplay : 'necklaces';
    const {
        galleryStore
    } = store;
    return {
        galleryUrls: galleryStore[itemTypeToDisplay]
    };
};

export const Gallery = connect(mapStateToProps)(
    class Gallery extends React.Component<ComponentProps> {

        getImage(imageUrl: string) {
            return { backgroundImage: `url(${imageUrl})` };
        }

        render() {
            const {galleryUrls} = this.props;
            return(
                <div className="galleryContainer">
                    <div className="centeringContainer">
                        {
                            galleryUrls.map(item => (
                                <div key={item.url} className="itemContainer">
                                    <div className="image" style={this.getImage(item.url)} />
                                    <div>{item.description}</div>
                                    <div>{item.price}</div>                                
                                </div>
                            ))   
                        }
                    </div>
                </div>
            );
        }
    }
);