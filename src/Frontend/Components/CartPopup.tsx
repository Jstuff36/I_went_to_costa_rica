import * as React from 'react';
import { connect } from 'react-redux';
import { Popup, Icon, List, Button } from 'semantic-ui-react';
import { StoreState } from '../Reducers/rootReducer';
import { CartItem, shoppingCartActions } from '../Reducers/shoppingCartReducer';
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
type DispatchProps = typeof shoppingCartActions;

export const CartPopup = withRouter(
    connect<StateProps, DispatchProps>(mapStateToProps, shoppingCartActions)(
        class CartPopup extends React.Component<ComponentProps & DispatchProps, State> {

            static getDerivedStateFromProps(props: ComponentProps, state: State): Partial<State> {
                const { activeItem } = state;
                const { cartItems } = props;
                if (activeItem) {
                    return {activeItem};
                } else if (cartItems) {
                    return {activeItem: cartItems[0]};
                } else {
                    return {activeItem: null};
                }
            }

            constructor(props: ComponentProps & DispatchProps) {
                super(props);
                this.state = {
                    activeItem: null
                };
            }

            getImage = (imageUrl: string) => {
                return { backgroundImage: `url(${imageUrl})` };
            }

            setActiveItem = (activeItem: CartItem) => {
                this.setState({activeItem});
            }

            render() {
                const { cartItems, history, removeItem } = this.props;
                const { activeItem } = this.state;
                return (
                    <Popup
                        hoverable={true}
                        trigger={<Icon name={'shopping cart'} />}
                        position={'bottom right'}
                        className={'cartPopupContainer'}
                    >
                    {
                    cartItems.length ? 
                        <>
                            <List className={'leftContainer'}>
                                {
                                    cartItems.map((cartItem) => (
                                                <List.Item onMouseEnter={() => this.setState({ activeItem: cartItem })} key={cartItem.item.url[0]}>
                                                    <Icon onClick={() => removeItem(cartItem.item.id)} name={'minus circle'} color={'red'}/>
                                            <div>
                                                {cartItem.item.name}
                                            </div>
                                            <div>
                                                {`Price: ${cartItem.item.price}`}
                                            </div>
                                            <div>
                                                {`Quantity: ${cartItem.quantity}`}
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
                        </>
                        :
                        <div>
                            Your shopping cart is empty.
                        </div>
                    }
                    </Popup>
                );
            }
        }
    )
);