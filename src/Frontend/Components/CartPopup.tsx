import * as React from 'react';
import { connect } from 'react-redux';
import { Popup, Icon } from 'semantic-ui-react';

export const CartPopup = connect()(
    class CartPopup extends React.Component {
        render() {
            return (
                <Popup
                    hoverable={true}
                    trigger={<Icon name={'shopping cart'} />}
                    position={'bottom right'}
                >
                    <div>
                        hi
                    </div>
                </Popup>
            );
        }
    }
);