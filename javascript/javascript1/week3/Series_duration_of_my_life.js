// ------------------------------------------------------------------------------Series duration of my life
const seriesDurations = [
    {
      title: "Californication",
      days: 1,
      hours: 15,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 7,
      hours: 17,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 4,
      hours: 3,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText() {
    let age = 80;
    ageInHours = age * 365 * 24;
    seriesDurations.forEach((i) => {
      let timeInHours = i.days * 24 + i.hours;
      let timeOfLife = timeInHours * 100 / ageInHours;
      console.log(`${i.title} took ${timeOfLife.toFixed(3)}% of my life.`);
    });
    // write code here
  }
  
  logOutSeriesText(); // logs out the text found above
  