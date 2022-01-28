import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Box>
            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://image.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg" class="d-block w-100  h-50" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://image.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://image.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
            <Carousel>

                {/* carousel item - 1 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        style={{ height: "80vh", filter: "brightness(90%)" }}
                        src="https://image.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hilly Mountains</h3>
                        <p>Here you can get helpful travel info about Hiily Mountains and critical environment</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* carousel item - 2 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        style={{ height: "80vh", filter: "brightness(90%)" }}
                        src="https://image.freepik.com/free-photo/aerial-view-phang-nga-bay-with-mountains-sunrise-thailand_335224-1188.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Beautiful Natural Lakes</h3>
                        <p>Here you can get good info about Beautiful Natural Lakes.  </p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* carousel item - 3 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        style={{ height: "80vh", filter: "brightness(90%)" }}
                        src="https://image.freepik.com/free-photo/background-park-wonder-famous-countryside-waterscape_1417-1105.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Majestic Waterfall</h3>
                        <p>Here you can get info about waterfall you have never heard off.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Box>
    );
};

export default Slider;