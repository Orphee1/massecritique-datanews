const data = require("../../assets/data/COVID/COVID2104.json");

function compareHospDec(a, b) {
      const hospA = a.hosp;
      const hospB = b.hosp;
      let comparison = 0;
      if (hospA < hospB) {
            comparison = 1;
      } else if (hospA > hospB) {
            comparison = -1;
      }
      return comparison;
}

function compareDeadDec(a, b) {
      const deadA = a.dead;
      const deadB = b.dead;
      let comparison = 0;
      if (deadA < deadB) {
            comparison = 1;
      } else if (deadA > deadB) {
            comparison = -1;
      }
      return comparison;
}

function compareReaDec(a, b) {
      const reaA = a.rea;
      const reaB = b.rea;
      let comparison = 0;
      if (reaA < reaB) {
            comparison = 1;
      } else if (reaA > reaB) {
            comparison = -1;
      }
      return comparison;
}

// const newSort = data.sort(compareHospDec);
const newSort = data.sort(function (a, b) {
      return b.hosp - a.hosp;
});
console.log(newSort);
