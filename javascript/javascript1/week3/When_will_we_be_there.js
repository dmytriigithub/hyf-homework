// ------------------------------------------------------------------------------------------When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function notThisFunctionName(travelInformation) {
    let time = travelInformation.destinationDistance / travelInformation.speed;
    let timeMinutes = +((time % 1).toFixed(2) * 60);
    return `${Math.trunc(time)} hours and ${Math.round(timeMinutes)} minutes`;
  
  }
  
  const travelTime = notThisFunctionName(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes