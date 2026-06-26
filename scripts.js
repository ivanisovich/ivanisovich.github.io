window.onload = () => {
  const images = document.querySelectorAll(".block-image-container");
  const mainTitle = document.querySelector(".main-title");

  const onImageClick = (image) => {
    image.classList.toggle("block-image-preview");
  };

  const checkMainTitle = () => {
    if (mainTitle) {
      const sY = window.scrollY;
      if (sY > 0) {
        mainTitle.classList.add("main-title-sticky");
      } else {
        mainTitle.classList.remove("main-title-sticky");
      }
    }
  };

  checkMainTitle();

  images.forEach((image) => {
    image.addEventListener(
      "click",
      onImageClick.bind(null, image.querySelector(".block-image-container-bg"))
    );
  });
  window.onscroll = checkMainTitle;

  // Инициализация селекторов всех проектов
  const strata = document.querySelector(".strata");
  const raznoobrazie = document.querySelector(".raznoobrazie");
  const arjs = document.querySelector(".arjs");
  const ebikes = document.querySelector(".ebikes");
  const chester = document.querySelector(".chester");
  const hftSniper = document.querySelector(".hft-sniper");

  document.querySelector(".language-eng").addEventListener("click", () => {
    document.querySelector(".language-eng").classList.add("current-lang");
    document.querySelector(".language-ru").classList.remove("current-lang");

    if (mainTitle) {
      mainTitle.querySelector("span").innerText = "Projects";
    }

    if (strata) {
      strata.querySelector(".block-subtitle").innerText =
        "Corporate website with an interactive map and admin panel";
      strata.querySelector(".block-subtitle-small").innerText =
        "In the admin panel you can edit markers on the map, load them directly from kmz files with geodata, and edit content on the page.";
    }

    if (raznoobrazie) {
      raznoobrazie.querySelector(".block-subtitle").innerText =
        "Animation-rich site in avant-garde style";
      raznoobrazie.querySelector(".block-subtitle-small").innerText =
        "Written without using libraries";
    }

    if (ebikes) {
      ebikes.querySelector(".block-subtitle").innerText =
        "Online store of electric bicycles with delivery across Almaty and Kazakhstan.";
      ebikes.querySelector(".block-subtitle-small").innerText =
        "Integrated payment system, product filtering, and an admin panel for inventory management.";
    }

    if (arjs) {
      arjs.querySelector(".block-subtitle").innerText =
        "The gallery includes geolocation features that determine the user's position and display different sets of artworks as they move between predefined locations.";
      arjs.querySelector(".block-subtitle-small").innerText =
        "AR.js Gallery is an virtual gallery that utilizes augmented reality to display artwork in a real-world environment.";
    }

   

    if (chester) {
      chester.querySelector(".block-subtitle").innerText =
        "Website for a detailing studio with an order form and admin panel.";
      chester.querySelector(".block-subtitle-small").innerText =
        "Includes Telegram bot integration for instant notifications and admin tools for managing services and orders.";
    }

   

    // Понятный и структурированный перевод для Polymarket HFT проекта
    if (hftSniper) {
      const descriptionElement = hftSniper.querySelector(".project-description");
      if (descriptionElement) {
        descriptionElement.innerText =
          "Full-cycle high-frequency trading infrastructure for Polymarket binary options (btc/eth-5m). Components: 1) V47 Velocity Matrix strategy utilizing logistic regression modeling, OBI/CVD volume metrics, and Velocity Stalling Guards against false impulses. 2) Production-grade Node.js execution engine with TCP socket optimization (setNoDelay, keep-alive pooling), proxy-safe REST IOC routing (Builder Code), and instant synchronization via private User WebSocket streams. 3) Non-blocking telemetry collector recording order books 4 times per second into JSONL storage alongside a stream-based backtester using the readline API to generate error cross-matrices and eliminate adverse selection.";
      }
    }

    const secondTitle = document.querySelector(".second-title");
    if (secondTitle) {
      secondTitle.querySelector("span").innerText = "Different types of landing pages";
    }
  });

  document.querySelector(".language-ru").addEventListener("click", () => {
    location.reload();
  });
};