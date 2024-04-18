const circle = document.querySelector(".circle");
let summaryStats = document.querySelector(".summary-stats");
const resultCounter = document.querySelector('.result-count')
let scorePoint = 0;
let sum = 0;

function getInfo(params) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        summaryStats.innerHTML = "";
      });
      for (let i = 0; i < data.length; i++) {
        summaryStats.innerHTML += `
                <div class="stats stat${data[i].id}">
              <div class="right-side">
                <img src=${data[i].icon} alt="" />
                <h3 style="--clr: ${data[i].color}">${data[i].category}</h3>
              </div>
              <div class="left-side">
                <div><span>${data[i].score}</span> / 100</div>
              </div>
            </div>
      `;
      sum += data[i].score
      }
      scorePoint = Math.round(sum / data.length)
      let count = 0
      let interval = setInterval(() => {
        count++
        resultCounter.innerText = count
        if (count >= scorePoint) {
          clearInterval(interval)
        }
      }, 15);
    });
}


getInfo()