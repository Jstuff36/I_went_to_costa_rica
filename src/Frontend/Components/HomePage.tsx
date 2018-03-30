import * as React from 'react';
import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {};
// }

export const HomePage = connect()(
    class HomePageComponent extends React.Component {
        render() {
            return (
                <div>
                    hi
                </div>
            );
        }
    }
);