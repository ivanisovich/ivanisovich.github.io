window.onload = () => {
  const images = document.querySelectorAll(".block-image-container");
  const mainTitle = document.querySelector(".main-title");

  const onImageClick = (image) => {
    image.classList.toggle("block-image-preview");
  };
  const checkMainTitle = () => {
    const sY = window.window.scrollY;
    if (sY > 0) {
      mainTitle.classList.add("main-title-sticky");
    } else {
      mainTitle.classList.remove("main-title-sticky");
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

  const miniChat = document.querySelector(".mini-chat");
  const movieFinder = document.querySelector(".movie-finder");
  const youtube = document.querySelector(".youtube");
  const strata = document.querySelector(".strata");
  const raznoobrazie = document.querySelector(".raznoobrazie");
  const arjs = document.querySelector(".arjs");
  const iqtest = document.querySelector(".iqtest")
  const ebikes = document.querySelector(".ebikes");

  const tollroad = document.querySelector(".tollroad")
  document.querySelector(".language-eng").addEventListener("click", () => {
    document.querySelector(".language-eng").classList.add("current-lang");
    document.querySelector(".language-ru").classList.remove("current-lang");

    mainTitle.querySelector("span").innerText = "Projects";

    strata.querySelector(".block-subtitle").innerText =
      "Corporate website with an interactive map and admin panel";
    strata.querySelector(".block-subtitle-small").innerText =
      "In the admin panel you can edit markers on the map, load them directly from kmz files with geodata, and edit content on the page.";

    raznoobrazie.querySelector(".block-subtitle").innerText =
      "Animation-rich site in avant-garde style";
    raznoobrazie.querySelector(".block-subtitle-small").innerText =
      "Written without using libraries";
      ebikes.querySelector(".block-subtitle").innerText =
      "Online store of electric bicycles with delivery across Almaty and Kazakhstan.";
    
    ebikes.querySelector(".block-subtitle-small").innerText =
      "Integrated payment system, product filtering, and an admin panel for inventory management.";
    

    arjs.querySelector(".block-subtitle").innerText =
      "The gallery includes geolocation features that determine the user's position and display different sets of artworks as they move between predefined locations.";
    arjs.querySelector(".block-subtitle-small").innerText =
      "AR.js Gallery is an  virtual gallery that utilizes augmented reality to display artwork in a real-world environment.";

    tollroad.querySelector(".block-subtitle").innerText =
    "The application is an online store selling vignettes, a common form of payment for motorway tolls in Europe.";
    tollroad.querySelector(".block-subtitle-small").innerText =
    "There is a built-in online payment system, as well as a function for tracking order status in the admin panel.";


    iqtest.querySelector(".block-subtitle").innerText =
    "The application is designed for conducting IQ testing with automatic calculation of results and generation of detailed reports.";
    document.querySelector(".second-title").querySelector("span").innerText =
      "Different types of landing pages";
  });

  document.querySelector(".language-ru").addEventListener("click", () => {
    location.reload();
  });
};
