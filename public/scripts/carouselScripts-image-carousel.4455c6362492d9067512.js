/*! elementor - v3.25.0 - 03-11-2024 */
"use strict";
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [268],
  {
    5914: (e, s) => {
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0);
      class ImageCarousel extends elementorModules.frontend.handlers
        .CarouselBase {
        getDefaultSettings() {
          const e = super.getDefaultSettings();
          return (
            (e.selectors.carousel = ".elementor-image-carousel-wrapper"), e
          );
        }
      }
      s.default = ImageCarousel;
    },
  },
]);
