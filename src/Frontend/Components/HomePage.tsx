import * as React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// function mapStateToProps(state) {
//     return {};
// }

export const HomePage = connect()(
    class HomePage extends React.Component {
        render() {
            const settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            };
            return (
                <div>
                    <Slider {...settings}>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                    </Slider>
                </div>
            );
        }
    }
);