import * as React from 'react';
import { connect } from 'react-redux';
import { Popup, Icon, List, Button } from 'semantic-ui-react';
import { StoreState } from '../Reducers/rootReducer';
import { CartItem } from '../Reducers/shoppingCartReducer';
import '../Styles/CartPopup.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const mapStateToProps = (store: StoreState) => {
    const { shoppingCartStore: {cartItems} } = store;
    return { cartItems };
};

interface StateProps {
    cartItems: CartItem[];
}

interface State {
    activeItem: CartItem | null;
}

// Router Own Props are passed into RouteComponentProps
type OwnProps = RouteComponentProps<{}>;

type ComponentProps = StateProps & OwnProps;

export const CartPopup = withRouter(
    connect<StateProps>(mapStateToProps)(
        class CartPopup extends React.Component<ComponentProps, State> {

            constructor(props: ComponentProps) {
                super(props);
                this.state = {
                    activeItem: props.cartItems[0] || null
                };
            }

            getImage = (imageUrl: string) => {
                return { backgroundImage: `url(${imageUrl})` };
            }

            render() {
                const { cartItems, history } = this.props;
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
                                cartItems.map(({item, quantity}) => (
                                    <List.Item key={item.url[0]}>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.price}
                                        </div>
                                        <div>
                                            {quantity}
                                        </div>
                                    </List.Item>
                                ))}
                        </List>
                        <div className={'rightContainer'}>
                            <div>
                                {activeItem ? <div className="image" style={this.getImage(activeItem.item.url[0])} /> : null}
                            </div>
                            <Button onClick={() => history.push('./checkout')}>Proceed to Checkout</Button>
                        </div>
                    </Popup>
                );
            }
        }
    )
);