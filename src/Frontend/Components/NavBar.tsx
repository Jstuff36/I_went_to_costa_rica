import * as React from 'react';
import { List, Dropdown } from 'semantic-ui-react';
import '../Styles/NavBar.css';
import { CartPopup } from './CartPopup';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StoreState } from '../Reducers/rootReducer';
import { CartItem } from '../Reducers/shoppingCartReducer';

interface StateProps {
    cartItems: CartItem[];
}

const mapStateToProps = (store: StoreState) => {
    const { shoppingCartStore: { cartItems } } = store;
    return { cartItems };
};

type OwnProps = RouteComponentProps<{}>;
type ComponentProps = StateProps & OwnProps;

export const NavBar = withRouter(
    connect<StateProps>(mapStateToProps)(
        class NavBar extends React.Component<ComponentProps> {

            handleDropdownClick = (item) => {
                const { history } = this.props;
                history.push({
                    pathname: '/gallery',
                    search: `?category=${item}`
                });
            }

            render() {
                const {cartItems} = this.props;
                return (
                    <div className={'navBarContainer'}>
                        <List horizontal={true}>
                            <List.Item>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </List.Item>
                            <List.Item>
                                <Dropdown text={'Catalog'}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <div onClick={() => this.handleDropdownClick('necklaces')}>
                                                Necklaces
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            Other
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </List.Item>
                            <List.Item>
                                <Link to={'/about'}>
                                    About
                                </Link>
                            </List.Item>
                            <List.Item>
                                Contact Us
                            </List.Item>
                        </List>
                        <List horizontal={true}>
                            <List.Item>
                                OG Mal Designs
                            </List.Item>
                        </List>
                        <List horizontal={true}>
                            <List.Item>
                                <CartPopup/>
                            </List.Item>
                            <List.Item>
                                {cartItems.reduce((total, {item, quantity}: CartItem) => item.price * quantity + total, 0.00)}
                            </List.Item>
                        </List>
                    </div>
                );
            }
        }
    )
);