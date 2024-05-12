const clock = document.querySelector(".clock");

// setInterval(() => {
//   const now = new Date();

//   const hours = now.getHours();
//   const mins = now.getMinutes();
//   const sec = now.getSeconds();

//   const html = `
//   <span>${hours}</span>
//   <span>${mins}</span>
//   <span>${sec}</span>
//   `;

//   clock.innerHTML = html;
// }, 1000);

const tick = () => {
  const now = new Date();

  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const html = `
  <span>${hr}</span> : 
  <span>${min}</span> : 
  <span>${sec}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
