import * as React from 'react';
import '../Styles/Carousel.css';
import { Icon } from 'semantic-ui-react';

interface State {
    activeIdx: number;
    imageElements: JSX.Element[];
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
            imageElements: []
        };
    }

    componentDidMount() {
        const { imgUrls } = this.props;
        const imageElements: JSX.Element[] = imgUrls.map(url => <div key={url} className="image" style={{ backgroundImage: `url(${url})` }} />);
        this.setState({ imageElements }, () => this.timerID = setInterval(() => this.activeIdxCounter(), 5000));
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
        const { activeIdx, imageElements } = this.state;
        return (
            <div className="carouselContainer">
                <Icon size="big" name="arrow left" onClick={() => this.changeIdx(-1)} />
                {imageElements[activeIdx]}
                <Icon size="big" name="arrow right" onClick={() => this.changeIdx(1)} />
            </div>
        );
    }
}