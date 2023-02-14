import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: require('./img/game1.png'),
    link:'https://wheel-of-doom-git-master-yeimmibuenaventura.vercel.app/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/YeimmiBuenaventura/WheelOfDoom',
    caption: 'Realizado con: HTML, CSS, JavaScript',
  },
  {
    src: require('./img/game2.png'),
    link: 'https://juliana1497.github.io/tetris2/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/tetris2',
    caption: 'Realizado con: HTML, CSS, JavaScript',
  },
  {
    src: require('./img/calculadora.png'),
    link: 'https://juliana1497.github.io/calculadora/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/calculadora',
    caption: 'Realizado con: HTML, CSS, JavaScript',
  },
];

class CarrouselGame extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a target="_blank" href={item.link}><img src={item.src} alt={item.altText} className="carrousel"/></a>
          <a target="_blank" href={item.github}><CarouselCaption captionText={item.captions} captionHeader={item.caption} className="carrousel-1 shadow p-3 mb-5 bg-body-tertiary rounded"/></a>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarrouselGame;