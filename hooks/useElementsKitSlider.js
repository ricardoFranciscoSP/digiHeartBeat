import { useEffect } from "react";

export function useElementsKitSlider() {
  useEffect(() => {
    // Função para inicializar o slider
    function initElementsKitSlider() {
      if (typeof window !== "undefined" && window.jQuery) {
        const $ = window.jQuery;

        // Procura por sliders do ElementsKit
        $(".elementskit-testimonial-slider").each(function () {
          const $slider = $(this);
          const config = $slider.data("config");

          if (!config) return;

          try {
            // Inicializa o Swiper com as configurações do ElementsKit
            new window.Swiper(".ekit-main-swiper", {
              ...config,
              navigation: {
                nextEl: ".swiper-navigation-button.swiper-button-next",
                prevEl: ".swiper-navigation-button.swiper-button-prev",
              },
              on: {
                init: function () {
                  console.log("ElementsKit Slider inicializado");
                },
              },
            });
          } catch (error) {
            console.error("Erro ao inicializar ElementsKit Slider:", error);
          }
        });
      }
    }

    // Função para carregar scripts necessários
    function loadElementsKitDependencies(callback) {
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.onload = callback;
        document.head.appendChild(script);
      } else {
        callback();
      }
    }

    // Inicializa quando o documento estiver pronto
    if (document.readyState === "complete") {
      loadElementsKitDependencies(initElementsKitSlider);
    } else {
      window.addEventListener("load", () => {
        loadElementsKitDependencies(initElementsKitSlider);
      });
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined" && window.jQuery) {
        const $ = window.jQuery;
        $(".elementskit-testimonial-slider").each(function () {
          const swiper = this.swiper;
          if (swiper && swiper.destroy) {
            swiper.destroy();
          }
        });
      }
    };
  }, []);
}
