import * as React from 'react';
import { connect } from 'react-redux';

interface OwnProps {
}

export const Gallery = connect()(
    class Gallery extends React.Component<OwnProps> {

        render() {
            return(
                <div>
                    gallery
                </div>
            );
        }
    }
);