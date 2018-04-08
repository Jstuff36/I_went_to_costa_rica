import * as React from 'react';
import { connect } from 'react-redux';
import '../Styles/Carousel.css';
import { Icon } from 'semantic-ui-react';

interface State {
    activeIdx: number;
    imgUrls: string[];
}

interface Props {
}

export const Carousel = connect()(
    class Carousel extends React.Component<Props, State> {

        private timerID;

        constructor(props: Props) {
            super(props);
            this.state = {
                activeIdx: 0,
                imgUrls: [
                    'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210405/mal_image_1_tg3q41.jpg',
                    'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210412/mal_image_2_gasrnt.jpg',
                    'https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210416/mal_image_3_dstj40.jpg'
                ]
            };
        }

        componentDidMount() {
            this.timerID = setInterval(() => this.activeIdxCounter(), 5000);
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        activeIdxCounter() {
            const { activeIdx, imgUrls } = this.state;
            this.setState(() => ({
                activeIdx: (activeIdx + 1) % imgUrls.length
            }));
        }

        changeIdx(delta: number) {
            const { imgUrls, activeIdx } = this.state;
            if (activeIdx + delta < 0) {
                this.setState(() => ({ activeIdx: imgUrls.length - 1 }));
            } else {
                this.setState(() => ({ activeIdx: (activeIdx + delta) % imgUrls.length }));                
            }
        }

        render() {
            const {imgUrls, activeIdx} = this.state;
            return (
                <div className="carouselContainer">
                    <Icon size="big" name="arrow left" onClick={() => this.changeIdx(-1)}/>
                    <div className="image" style={{ backgroundImage: `url(${imgUrls[activeIdx]})` }}/>
                    {/* <img src={imgUrls[activeIdx]} height="300"/> */}
                    <Icon size="big" name="arrow right" onClick={() => this.changeIdx(1)}/>
                </div>
            );
        }
    }
);