import { useEffect } from "react";

const useLoadCarouselScripts = () => {
  useEffect(() => {
    const loadScriptsInOrder = async () => {
      const elementorConfig = {
        environmentMode: {
          edit: false,
          wpPreview: false,
          isScriptDebug: false,
        },
        i18n: {
          shareOnFacebook: "Compartilhar no Facebook",
          shareOnTwitter: "Compartilhar no Twitter",
          pinIt: "Fixar",
          download: "Download",
          downloadImage: "Baixar imagem",
          fullscreen: "Tela cheia",
          zoom: "Zoom",
          share: "Compartilhar",
          playVideo: "Reproduzir vídeo",
          previous: "Anterior",
          next: "Próximo",
          close: "Fechar",
        },
        is_rtl: false,
        breakpoints: {
          xs: 0,
          sm: 480,
          md: 768,
          lg: 1025,
          xl: 1440,
          xxl: 1600,
        },
        responsive: {
          breakpoints: {
            mobile: {
              label: "Mobile",
              value: 767,
              default_value: 767,
              direction: "max",
              is_enabled: true,
            },
            mobile_extra: {
              label: "Mobile Extra",
              value: 880,
              default_value: 880,
              direction: "max",
              is_enabled: false,
            },
            tablet: {
              label: "Tablet",
              value: 1024,
              default_value: 1024,
              direction: "max",
              is_enabled: true,
            },
            tablet_extra: {
              label: "Tablet Extra",
              value: 1200,
              default_value: 1200,
              direction: "max",
              is_enabled: false,
            },
            laptop: {
              label: "Laptop",
              value: 1366,
              default_value: 1366,
              direction: "max",
              is_enabled: false,
            },
            widescreen: {
              label: "Widescreen",
              value: 2400,
              default_value: 2400,
              direction: "min",
              is_enabled: false,
            },
          },
        },
        urls: {
          assets:
            "https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/",
        },
        settings: {
          page: [],
          editorPreferences: [],
        },
        kit: {
          active_breakpoints: ["viewport_mobile", "viewport_tablet"],
          global_image_lightbox: "yes",
          lightbox_enable_counter: "yes",
          lightbox_enable_fullscreen: "yes",
          lightbox_enable_zoom: "yes",
          lightbox_enable_share: "yes",
          lightbox_title_src: "title",
          lightbox_description_src: "description",
        },
        post: {
          id: 0,
          title: "Página inicial",
          excerpt: "",
        },
        experimentalFeatures: {
          e_dom_optimization: true,
          e_optimized_assets_loading: true,
          e_optimized_css_loading: true,
          e_swiper_latest: true,
          additional_custom_breakpoints: true,
          "landing-pages": true,
          e_lazyload: true,
        },
      };

      const scriptsToLoad = [
        "/scripts/carouselScripts-jqeury-3.7.1.js",
        "/scripts/carouselScripts-jquery-core-1.13.3.js",
        {
          type: "inline",
          content: `
            window.elementorFrontendConfig = ${JSON.stringify(elementorConfig)};
          `,
        },
        "/scripts/carouselScripts-frontend-modules.min-3.25.4.js",
        "/scripts/carouselScripts-frontend.min-3.25.4.js",
        "/scripts/carouselScripts-image-carousel.4455c6362492d9067512.js",
        "/scripts/carouselScripts-webpack-3.25.4.js",
      ];

      for (const script of scriptsToLoad) {
        if (typeof script === "string") {
          await new Promise((resolve, reject) => {
            const scriptElement = document.createElement("script");
            scriptElement.src = script;
            scriptElement.defer = true;
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
            document.body.appendChild(scriptElement);
          });
        } else if (script.type === "inline") {
          const scriptElement = document.createElement("script");
          scriptElement.textContent = script.content;
          document.body.appendChild(scriptElement);
        }
      }
    };

    // Carrega os scripts quando a página estiver totalmente carregada
    if (document.readyState === "complete") {
      loadScriptsInOrder();
    } else {
      window.addEventListener("load", loadScriptsInOrder);
      return () => window.removeEventListener("load", loadScriptsInOrder);
    }
  }, []);
};

export default useLoadCarouselScripts;
