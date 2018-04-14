import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Reducers/rootReducer';
import { RouteProps } from 'react-router';
import '../Styles/Gallery.css';

interface OwnProps {
    itemTypeToDisplay: string;
}

interface StateProps {
    galleryUrls: string[];
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
                    {
                        galleryUrls.map(url => (
                            <div key={url} className="image" style={this.getImage(url)}>
                                test
                            </div>
                        ))   
                    }
                </div>
            );
        }
    }
);