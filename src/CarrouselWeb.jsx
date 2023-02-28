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
    src: require('./img/web1.png'),
    link:'https://cire-3.vercel.app/inicio',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/cire-3',
    caption: 'Tecnologías utilizadas: HTML, CSS, Javascript, ReactJS',
  },
  {
    src: require('./img/web3.png'),
    link: 'https://semillas-eight.vercel.app/#',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/semillas',
    caption: 'Tecnologías utilizadas: HTML, CSS',
  },
  {
    src: require('./img/web4.png'),
    link: 'https://juliana1497.github.io/dashboard/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/dashboard',
    caption: 'Tecnologías utilizadas: HTML, CSS, JavaScript, ReactJS',
  },
  {
    src: require('./img/web9.png'),
    link: 'https://crud-angular-lake.vercel.app/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/crud-angular',
    caption: 'Tecnologías utilizadas: HTML, CSS, TypeScript, Angular',
  },
  {
    src: require('./img/web10.png'),
    link: 'https://contactos-1.vercel.app/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/contactos',
    caption: 'Tecnologías utilizadas: HTML, CSS, JavaScript, ReactJS',
  },
  {
    src: require('./img/web5.png'),
    link: 'https://juliana1497.github.io/SabujCha/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/SabujCha',
    caption: 'Tecnologías utilizadas: HTML, CSS',
  },
  {
    src: require('./img/web6.png'),
    link: 'https://todolist-tambo-flowers-front.vercel.app/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Nisanech/todolist-tambo-flowers',
    caption: 'Tecnologías utilizadas: HTML, CSS, JavaScript, React, MongoDB',
  },
  {
    src: require('./img/web2.png'),
    link: 'https://juliana1497.github.io/Pagina-Tributo/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/Pagina-Tributo',
    caption: 'Tecnologías utilizadas: HTML, CSS',
  },
  {
    src: require('./img/web7.png'),
    link: 'https://juliana1497.github.io/ZShop/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Juliana1497/ZShop',
    caption: 'Tecnologías utilizadas: HTML, CSS',
  },
  {
    src: require('./img/web8.png'),
    link: 'https://jlbejarano662.github.io/Deezer/',
    captions: 'Click para ver repositorio en GitHub',
    github: 'https://github.com/Jlbejarano662/Deezer',
    caption: 'Tecnologías utilizadas: HTML, CSS',
  },
];

class Carrousel extends Component {
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
          <a target="_blank" href={item.github}><CarouselCaption captionText={item.captions} captionHeader={item.caption} className="carrousel-1 shadow-lg p-3 mb-5 bg-body-tertiary rounded"/></a>
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


export default Carrousel;