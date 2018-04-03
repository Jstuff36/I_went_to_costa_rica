import * as React from 'react';
import { connect } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = connect() (
     class NavBar extends React.Component {
        render() {
            return (
                <div className={'navBarContainer'}>
                    <List horizontal={true}>
                        <List.Item>
                            Home
                        </List.Item>
                        <List.Item>
                            Catalog
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
                            <Icon name={'shopping cart'}/>
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