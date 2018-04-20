import * as React from 'react';
import { Modal } from 'semantic-ui-react';

interface OwnProps {
    isOpen: boolean;
    closeCB: () => void;
}

type ComponentProps = OwnProps;

export class GalleryModal extends React.Component<ComponentProps> {
    render() {
        const {isOpen, closeCB} = this.props;
        return (
            isOpen ? (
            <Modal
                onClose={closeCB}
            >
                <Modal.Content>
                    test
                </Modal.Content>
            </Modal> )
            :
            null
        );
    }
}