import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from './Carousel';
// function mapStateToProps(state) {
//     return {};
// }

export const HomePage = connect()(
    class HomePage extends React.Component {
        render() {
            return (
                <div>
                    <Carousel/>
                    {/* <Slider {...settings}>
                        <div>
                            <img src="https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210405/mal_image_1_tg3q41.jpg" />                            
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210412/mal_image_2_gasrnt.jpg"/>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dax5cdjeh/image/upload/v1523210416/mal_image_3_dstj40.jpg" />                            
                        </div>
                    </Slider> */}
                </div>
            );
        }
    }
);