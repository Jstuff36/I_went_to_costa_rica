import * as React from 'react';
import { connect } from 'react-redux';
import { Popup, Icon, List, Button } from 'semantic-ui-react';
import { StoreState } from '../Reducers/rootReducer';
import { Item } from '../Reducers/galleryReducer';

const mapStateToProps = (store: StoreState) => {
    const {shoppingCartStore: {selectedItems}} = store;
    return {selectedItems}
}

interface StateProps {
    selectedItems: Item[];
}

interface State {
    activeItem: Item | null;
}

type ComponentProps = StateProps

export const CartPopup = connect(mapStateToProps)(
    class CartPopup extends React.Component<ComponentProps, State> {

        constructor(props: ComponentProps) {
            super(props);
            this.state = {
                activeItem: null
            }
        }

        render() {
            const {selectedItems} = this.props;
            const {activeItem} = this.state;
            return (
                <Popup
                    hoverable={true}
                    trigger={<Icon name={'shopping cart'} />}
                    position={'bottom right'}
                >
                    <div>
                        <List>
                            {
                                selectedItems.map(item => {
                                    <List.Item>
                                        <div>
                                            {item.description}
                                        </div>
                                        <div>
                                            {item.price}
                                        </div>
                                    </List.Item>
                                })
                            }
                        </List>
                    </div>
                    <div>
                        {activeItem.url}
                        <Button>Proceed to Checkout</Button>
                    </div>
                </Popup>
            );
        }
    }
);