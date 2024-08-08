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
  const todo = document.querySelector(".todo");
  const movieFinder = document.querySelector(".movie-finder");
  const noteApp = document.querySelector(".note-app");
  const youtube = document.querySelector(".youtube");
  const strata = document.querySelector(".strata");
  const raznoobrazie = document.querySelector(".raznoobrazie");
  const arjs = document.querySelector("ar-js")

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

    miniChat.querySelector(".block-title").innerText = "Mini-chat";
    miniChat.querySelector(".block-subtitle").innerText =
      "Simple chat implemented with WebSockets and low-db database .";

    todo.querySelector(".block-subtitle").innerText =
      "Todo list impemented with React-Redux";

    movieFinder.querySelector(".block-subtitle").innerText =
      "An example of working with movie db Api";
    movieFinder.querySelector(".block-subtitle-small").innerText =
      "React application for searching movies and adding them to bookmarks .";

    noteApp.querySelector(".block-subtitle").innerText = "Notes editor. ";
    noteApp.querySelector(".block-subtitle-small").innerText =
      "You can add new tags using the # symbol, delete and modify ready-made notes .";

    youtube.querySelector(".block-subtitle").innerText =
      "You can login with any password";
    youtube.querySelector(".block-subtitle-small").innerText =
      "React app for searching youtube videos by keywords, as well as saving the search query .";

      arjs.querySelector(".block-subtitle").innerText =
      "The gallery includes geolocation features that determine the user's position and display different sets of artworks as they move between predefined locations.";
      arjs.querySelector(".block-subtitle-small").innerText =
      "AR.js Gallery is an  virtual gallery that utilizes augmented reality to display artwork in a real-world environment.";


    document.querySelector(".second-title").querySelector("span").innerText =
      "Different types of landing pages";
  });

  document.querySelector(".language-ru").addEventListener("click", () => {
    location.reload();
  });
};
