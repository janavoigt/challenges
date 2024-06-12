function boredom(staff) {
  let soma = 0;
  const deptScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  for (const key in staff) {
    soma += deptScore[staff[key]];

    if (soma <= 80) {
      console.log(`i kill you`);
    } else if (soma <= 100 && soma > 80) {
      console.log(`ok`);
    } else {
      console.log(`party time`);
    }
  }
}

boredom({
  tim: "change",
  jim: "accounts",
  randy: "canteen",
  sandy: "change",
  andy: "change",
  katie: "IS",
  laura: "change",
  saajid: "IS",
  alex: "trading",
  john: "accounts",
  mr: "finance",
});
