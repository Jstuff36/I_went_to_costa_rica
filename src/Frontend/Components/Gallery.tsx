import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Reducers/rootReducer';
import { RouteProps } from 'react-router';
import { Item } from '../Reducers/galleryReducer';
import '../Styles/Gallery.css';
import { GalleryModal } from './GalleryModal';

interface OwnProps {
    itemTypeToDisplay: string;
}

interface StateProps {
    galleryUrls: Item[];
}

interface State {
    isOpen: boolean;
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
    class Gallery extends React.Component<ComponentProps, State> {

        constructor(props: ComponentProps) {
            super(props);
            this.state = {
                isOpen: false
            };
        }

        getImage = (imageUrl: string) => {
            return { backgroundImage: `url(${imageUrl})` };
        }

        closeCB = () => this.setState({isOpen: false});

        handleItemCLick = () => {
            this.setState({isOpen: true});
        }

        render() {
            const {galleryUrls} = this.props;
            const {isOpen} = this.state;
            return(
                <div className="galleryContainer">
                    <div className="centeringContainer">
                        {
                            galleryUrls.map(item => (
                                <div key={item.url[0]} className="itemContainer">
                                    <div onClick={this.handleItemCLick} className="image" style={this.getImage(item.url[0])} />
                                    <div>{item.description}</div>
                                    <div>{item.price}</div>                                
                                </div>
                            ))   
                        }
                    </div>
                    {isOpen ? <GalleryModal isOpen={isOpen} closeCB={this.closeCB}/> : null}
                </div>
            );
        }
    }
);