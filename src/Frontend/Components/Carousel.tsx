import * as React from 'react';
import '../Styles/Carousel.css';
import { Icon } from 'semantic-ui-react';

interface State {
    activeIdx: number;
}

interface OwnProps {
    imgUrls: string[];
}

export class Carousel extends React.Component<OwnProps, State> {

    private timerID;

    constructor(props: OwnProps) {
        super(props);
        this.state = {
            activeIdx: 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.activeIdxCounter(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    activeIdxCounter() {
        const { activeIdx } = this.state;
        const { imgUrls } = this.props;
        this.setState(() => ({
            activeIdx: (activeIdx + 1) % imgUrls.length
        }));
    }

    changeIdx(delta: number) {
        const { activeIdx } = this.state;
        const { imgUrls } = this.props;
        if (activeIdx + delta < 0) {
            this.setState(() => ({ activeIdx: imgUrls.length - 1 }));
        } else {
            this.setState(() => ({ activeIdx: (activeIdx + delta) % imgUrls.length }));                
        }
    }

    render() {
        const { activeIdx } = this.state;
        const { imgUrls } = this.props;
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