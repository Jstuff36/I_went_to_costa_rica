import * as React from 'react';
import { connect } from 'react-redux';
import { Popup, Icon, List, Button } from 'semantic-ui-react';
import { StoreState } from '../Reducers/rootReducer';
import { Item } from '../Reducers/galleryReducer';
import '../Styles/CartPopup.css';

const mapStateToProps = (store: StoreState) => {
    const { shoppingCartStore: { selectedItems } } = store;
    return { selectedItems };
};

interface StateProps {
    selectedItems: Item[];
}

interface State {
    activeItem: Item | null;
}

type ComponentProps = StateProps;

export const CartPopup = connect(mapStateToProps)(
    class CartPopup extends React.Component<ComponentProps, State> {

        constructor(props: ComponentProps) {
            super(props);
            this.state = {
                activeItem: props.selectedItems[0] || null
            };
        }

        getImage = (imageUrl: string) => {
            return { backgroundImage: `url(${imageUrl})` };
        }

        render() {
            const { selectedItems } = this.props;
            const { activeItem } = this.state;
            return (
                <Popup
                    hoverable={true}
                    trigger={<Icon name={'shopping cart'} />}
                    position={'bottom right'}
                    className={'cartPopupContainer'}
                >
                    <List className={'leftContainer'}>
                        {
                            selectedItems.map(item => (
                                <List.Item key={item.url[0]}>
                                    <div>
                                        {item.description}
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                </List.Item>
                            ))
                        }
                    </List>
                    <div className={'rightContainer'}>
                        <div>
                            {activeItem ? <div className="image" style={this.getImage(activeItem.url[0])} /> : null}
                        </div>
                        <Button>Proceed to Checkout</Button>
                    </div>
                </Popup>
            );
        }
    }
);