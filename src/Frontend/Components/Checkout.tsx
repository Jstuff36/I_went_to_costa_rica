import * as React from 'react';
import { connect } from 'react-redux';

export const Checkout = connect()(
    class Checkout extends React.PureComponent {

        render() {
            return (
                <div>
                    Your checkout
                </div>
            );
        }
    }
);