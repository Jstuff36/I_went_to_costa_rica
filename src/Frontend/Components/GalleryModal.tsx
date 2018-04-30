import * as React from 'react';
import { Modal } from 'semantic-ui-react';
import { Item } from '../Reducers/galleryReducer';
import '../Styles/GalleryModal.css';
import { Carousel } from './Carousel';

interface OwnProps {
    isOpen: boolean;
    closeCB: () => void;
    item: Item;
}

type ComponentProps = OwnProps;

export class GalleryModal extends React.Component<ComponentProps> {
    render() {
        const {isOpen, closeCB, item} = this.props;
        return (
            isOpen ? (
            <Modal
                open={isOpen}
                onClose={closeCB}
                size={'large'}
            >
                <Modal.Content>
                    <Carousel imgUrls={item.url}/>
                </Modal.Content>
            </Modal> )
            :
            null
        );
    }
}