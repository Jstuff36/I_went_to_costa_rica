import * as React from 'react';
import { List, Dropdown } from 'semantic-ui-react';
import '../Styles/NavBar.css';
import { CartPopup } from './CartPopup';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

export const NavBar = withRouter(
    class NavBar extends React.Component<RouteComponentProps<{}>> {

        handleDropdownClick = (item) => {
            const { history } = this.props;
            history.push({
                pathname: '/gallery',
                search: `?category=${item}`
            });
        }

        render() {
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
                            $0.00
                        </List.Item>
                    </List>
                </div>
            );
        }
    }
);