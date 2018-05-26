import * as React from 'react';
import { Modal, Button } from 'semantic-ui-react';
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
    
    handleAddItemClick = () => {
        const {item} = this.props;
    }

    render() {
        const {isOpen, closeCB, item} = this.props;

        return (
            isOpen ? (
            <Modal
                open={isOpen}
                onClose={closeCB}
                size={'large'}
                className={'galleryModalContainer'}
            >
                <Modal.Content>
                    <Carousel imgUrls={item.url}/>
                    <div className={'rightContent'}>
                        <div>
                            {item.description}
                        </div>
                        <div>
                            {item.price}
                        </div>
                        <Button onClick={}>Add to Cart</Button>
                    </div>
                </Modal.Content>
            </Modal> )
            :
            null
        );
    }
}