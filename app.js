var countdown = new Date("18 June, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countdown - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".day").innerHTML = days + "<br> Days";
  document.querySelector(".hr").innerHTML = hours + "<br> Hours";
  document.querySelector(".min").innerHTML = minutes + "<br> Minutes";
  document.querySelector(".sec").innerHTML = seconds + "<br> Seconds";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
