function updateList() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".city-date");
  let tokyoTimeElement = tokyoElement.querySelector(".city-time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoTime.format("dddd MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //new york
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".city-date");
  let newYorkTimeElement = newYorkElement.querySelector(".city-time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYorkTime.format("dddd MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //london
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".city-date");
  let londonTimeElement = londonElement.querySelector(".city-time");
  let londonTime = moment().tz("Europe/London");

  londonDate.innerHTML = londonTime.format("dddd MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //LA
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".city-date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".city-time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesTime.format("dddd MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateList();
setInterval(updateList, 1000);
