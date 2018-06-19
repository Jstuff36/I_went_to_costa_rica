import * as React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { Item } from '../Reducers/galleryReducer';
import '../Styles/GalleryModal.css';
import { Carousel } from './Carousel';
import { shoppingCartActions } from '../Reducers/shoppingCartReducer';
import { StoreState } from '../Reducers/rootReducer';

interface OwnProps {
    isOpen: boolean;
    closeCB: () => void;
    item: Item;
}

interface State {
    quantity: number;
}

const mapStateToProps = (store: StoreState) => {
    return {};
};

type ComponentProps = OwnProps & typeof shoppingCartActions;

export const GalleryModal = connect(mapStateToProps, shoppingCartActions)(
    class GalleryModal extends React.Component<ComponentProps, State> {
        
        state = {
            quantity: 0
        };

        handleAddItemClick = () => {
            const {quantity} = this.state;
            const {closeCB, item, addItems } = this.props;
            addItems({
                item,
                quantity
            });
            closeCB();
        }

        handleDecincrement = (newQuantity) => {
            this.setState(({ quantity }: State) => ({
                quantity: newQuantity < 0 ? 0 : newQuantity
            }));
        }

        render() {
            const {isOpen, closeCB, item} = this.props;
            const {quantity} = this.state;
            return (
                isOpen ? (
                <Modal
                    open={isOpen}
                    onClose={closeCB}
                    size={'large'}
                    className={'galleryModalContainer'}
                >
                    <Modal.Content>
                        <Carousel imgUrls={item.url}/>
                        <div className={'rightContent'}>
                            <div className={'name'}>
                                {item.name}
                            </div>
                            <div className={'price'}>
                                {`$${item.price}`}
                            </div>
                            <div className={'quantityContainer'}>
                                <div>
                                    Quantity                                            
                                </div>
                                <div className={'buttonContainer'}>
                                    <Button 
                                        icon={true} 
                                        onClick={() => this.handleDecincrement(quantity - 1)}
                                    >
                                        <Icon 
                                            name="minus" 
                                        />
                                    </Button>
                                    <div className={'counter'}>
                                        {quantity}                                        
                                    </div>
                                    <Button 
                                        icon={true} 
                                        onClick={() => this.setState(({ quantity }: State) => ({
                                            quantity: quantity + 1
                                        }))}
                                    >
                                        <Icon 
                                            name="plus" 
                                        />
                                    </Button>
                                </div>
                            </div>
                            <Button 
                                disabled={quantity === 0}
                                onClick={this.handleAddItemClick}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </Modal.Content>
                </Modal> )
                :
                null
            );
        }
    }
);