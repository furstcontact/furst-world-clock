function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let argentinaElement = document.querySelector("#argentina");
  let argentinaDateElement = argentinaElement.querySelector(".date");
  let argentinaTimeElement = argentinaElement.querySelector(".time");

  let argentinaTime = moment().tz("America/Argentina/Buenos_Aires");
  argentinaDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
  argentinaTimeElement.innerHTML = argentinaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
