/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/assets/1.jpg
const _1_namespaceObject = __webpack_require__.p + "fbfb77753b64d53e5c93.jpg";
;// CONCATENATED MODULE: ./src/assets/2.jpg
const _2_namespaceObject = __webpack_require__.p + "ce0c3cf8a0d2f9ad2ca5.jpg";
;// CONCATENATED MODULE: ./src/assets/3.png
const _3_namespaceObject = __webpack_require__.p + "9cb34de93d5bee0a4508.png";
;// CONCATENATED MODULE: ./src/assets/4.jpg
const _4_namespaceObject = __webpack_require__.p + "2ffc4a27ea4a6747a41e.jpg";
;// CONCATENATED MODULE: ./src/modules/carousel.js
class Carousel {
  static numImages = 4;
  static currImage = 1;

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
      let newIndex;
      if (Carousel.currImage == Carousel.numImages) {
        newIndex = 1;
      } else {
        newIndex = Carousel.currImage + 1;
      }
      Carousel.switchImage(newIndex);
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
}

;// CONCATENATED MODULE: ./src/index.js







Carousel.setupArrows();
Carousel.setupNavdots();

/******/ })()
;
//# sourceMappingURL=main.js.map