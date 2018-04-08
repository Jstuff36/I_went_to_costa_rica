import * as React from 'react';
import { List, Icon } from 'semantic-ui-react';
import '../Styles/Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <List className="footerContainer" horizontal={true}>
                <List.Item>
                    <List.List>
                        <List.Header>
                            Contact us
                        </List.Header>
                        <List.Item>
                            If you have questions, please email us.                            
                        </List.Item>
                        <List.Item>
                            RandomEmail@gmail.com
                        </List.Item>             
                    </List.List>                    
                </List.Item>
                <List.Item>
                    <List.List>
                        <List.Header>
                            Social Media
                        </List.Header>
                        <List.Item>
                            <Icon name="instagram"/>
                            <Icon name="facebook square"/>                            
                        </List.Item>
                    </List.List>
                </List.Item>
            </List>
        );
    }
}