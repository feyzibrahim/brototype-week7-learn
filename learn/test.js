setTimeout(() => {
  clearInterval(inte);
}, 5000);

const inte = setInterval(() => {
  console.log("Intervel");
}, 1000);
