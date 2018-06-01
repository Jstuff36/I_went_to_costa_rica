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

            constructor(props: ComponentProps & DispatchProps) {
                super(props);
                this.state = {
                    activeItem: props.cartItems[0] || null
                };
            }

            getImage = (imageUrl: string) => {
                return { backgroundImage: `url(${imageUrl})` };
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
                                    cartItems.map(({item, quantity}) => (
                                        <List.Item key={item.url[0]}>
                                            <Icon onClick={() => removeItem(item.id)} name={'minus circle'} color={'red'}/>
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>
                                                {`Price: ${item.price}`}
                                            </div>
                                            <div>
                                                {`Quantity: ${quantity}`}
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