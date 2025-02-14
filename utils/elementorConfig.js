export const elementorFrontendConfig = {
  environmentMode: {
    edit: false,
    wpPreview: false,
    isScriptDebug: true,
  },
  i18n: {
    shareOnFacebook: "Compartilhar no Facebook",
    shareOnTwitter: "Compartilhar no Twitter",
    pinIt: "Fixar",
    download: "Baixar",
    downloadImage: "Baixar imagem",
    fullscreen: "Tela cheia",
    zoom: "Zoom",
    share: "Compartilhar",
    playVideo: "Reproduzir v\u00eddeo",
    previous: "Anterior",
    next: "Pr\u00f3ximo",
    close: "Fechar",
    a11yCarouselWrapperAriaLabel:
      "Carrossel | Rolagem horizontal: Setas para esquerda e direita",
    a11yCarouselPrevSlideMessage: "Slide anterior",
    a11yCarouselNextSlideMessage: "Pr\u00f3ximo slide",
    a11yCarouselFirstSlideMessage: "Este \u00e9 o primeiro slide",
    a11yCarouselLastSlideMessage: "Este \u00e9 o \u00faltimo slide",
    a11yCarouselPaginationBulletMessage: "Ir para o slide",
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
        label: "Dispositivos m\u00f3veis no modo retrato",
        value: 767,
        default_value: 767,
        direction: "max",
        is_enabled: true,
      },
      mobile_extra: {
        label: "Dispositivos m\u00f3veis no modo paisagem",
        value: 880,
        default_value: 880,
        direction: "max",
        is_enabled: false,
      },
      tablet: {
        label: "Tablet no modo retrato",
        value: 1024,
        default_value: 1024,
        direction: "max",
        is_enabled: true,
      },
      tablet_extra: {
        label: "Tablet no modo paisagem",
        value: 1200,
        default_value: 1200,
        direction: "max",
        is_enabled: false,
      },
      laptop: {
        label: "Notebook",
        value: 1366,
        default_value: 1366,
        direction: "max",
        is_enabled: false,
      },
      widescreen: {
        label: "Tela ampla (widescreen)",
        value: 2400,
        default_value: 2400,
        direction: "min",
        is_enabled: false,
      },
    },
    hasCustomBreakpoints: false,
  },
  version: "3.25.4",
  is_static: false,
  experimentalFeatures: {
    e_font_icon_svg: true,
    additional_custom_breakpoints: true,
    container: true,
    e_swiper_latest: true,
    e_nested_atomic_repeaters: true,
    e_optimized_control_loading: true,
    e_onboarding: true,
    e_css_smooth_scroll: true,
    theme_builder_v2: true,
    "hello-theme-header-footer": true,
    home_screen: true,
    "nested-elements": true,
    editor_v2: true,
    e_element_cache: true,
    "link-in-bio": true,
    "floating-buttons": true,
    "display-conditions": true,
    "form-submissions": true,
  },
  urls: {
    assets:
      "https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/",
    ajaxurl: "https://digi.maneiraweb.com.br/wp-admin/admin-ajax.php",
    uploadUrl: "https://digi.maneiraweb.com.br/wp-content/uploads",
  },
  nonces: {
    floatingButtonsClickTracking: "2265ee2489",
  },
  swiperClass: "swiper",
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
    hello_header_logo_type: "logo",
    hello_header_menu_layout: "horizontal",
    hello_footer_logo_type: "logo",
  },
  post: {
    id: 8,
    title: "digiheartbeat.localhost",
    excerpt: "",
    featuredImage: false,
  },
};
