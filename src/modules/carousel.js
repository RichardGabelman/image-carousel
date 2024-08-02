export class Carousel {
  static numImages = 4;
  static currImage = 1;
  static timeoutDuration = 5000;

  static switchImage(index) {
    const newImage = document.querySelector(`img.idx${index}`);
    newImage.classList.toggle("active");

    const currImg = document.querySelector(`img.idx${Carousel.currImage}`);
    currImg.classList.toggle("active");
    Carousel.currImage = index;

    const currNavdot = document.querySelector(`div.active`);
    currNavdot.classList.toggle("active");

    const newNavdot = document.querySelector(`div.idx${index}`);
    newNavdot.classList.toggle("active");
  }

  static setupArrows() {
    const leftArrow = document.querySelector("#arrowLeft");
    const rightArrow = document.querySelector("#arrowRight");

    rightArrow.addEventListener('click', () => {
      Carousel.switchRight();
    });

    leftArrow.addEventListener('click', () => {
      let newIndex;
      if (Carousel.currImage == 1) {
        newIndex = Carousel.numImages;
      } else {
        newIndex = Carousel.currImage - 1;
      }
      Carousel.switchImage(newIndex);
    });
  }

  static setupNavdots() {
    const dots = document.querySelectorAll(".navdots div");
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', () => {
        const index = Number(dots[i].dataset.index);
        Carousel.switchImage(index);
      });
    }
  }

  static switchRight() {
    let newIndex;
    if (Carousel.currImage == Carousel.numImages) {
      newIndex = 1;
    } else {
      newIndex = Carousel.currImage + 1;
    }
    Carousel.switchImage(newIndex);
  }

  static autoSwitch() {
    setInterval(Carousel.switchRight, Carousel.timeoutDuration);
  }
}
