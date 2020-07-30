const reddit = document.querySelector(".reddit");
const spotify = document.querySelector(".spotify");
const youtube = document.querySelector(".youtube");

// reddit mouse hover
reddit.addEventListener("mouseenter", () => {
  reddit.src = "/images/reddit_black.png";
});

// reddit mosue out
reddit.addEventListener("mouseout", () => {
  reddit.src = "/images/reddit_white.png";
});

// spotify mouse hover
spotify.addEventListener("mouseenter", () => {
  spotify.src = "/images/spotify_black.png";
});

// spotify mouse out
spotify.addEventListener("mouseout", () => {
  spotify.src = "/images/spotify_white.png";
});

// youtube mouse hover
youtube.addEventListener("mouseenter", () => {
  youtube.src = "/images/youtube_black.png";
});

// youtube mouse out
youtube.addEventListener("mouseout", () => {
  youtube.src = "/images/youtube_white.png";
});

// ============== weather data ===================
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const msg3 = document.querySelector("#msg3");
const msg4 = document.querySelector("#msg4");
const msg5 = document.querySelector("#msg5");
const msg6 = document.querySelector("#msg6");
const myKey = "2bc81927f299a22c8b57758d08e14644";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = search.value;

  msg1.textContent = "Loading...";
  msg2.textContent = "";
  msg3.textContent = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&units=metric`
  ).then((response) => {
    response
      .json()
      .then((data) => {
        if (data.error) {
          msg1.textContent = data.error;
        } else {
          msg1.textContent = `Location : ${data.name}`;
          msg2.textContent = `Forecast : ${data.weather[0].description}. The current temperature is ${data.main.temp}°C. Feels like ${data.main.feels_like}°C`;
          msg3.textContent = `Latitude: ${data.coord.lat} Longitude : ${data.coord.lon}`;
        }
      })
      .catch((error) => {
        msg1.textContent = "Can't find location " + "'" + search.value + "'";
        msg2.textContent = "Try searching for another location ...";
      });
  });
});
