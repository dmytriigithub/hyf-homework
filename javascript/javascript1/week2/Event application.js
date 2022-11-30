function getEventWeekDay(a) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(); 
    date.setDate(date.getDate() + a);
  
    return days[date.getDay()];
  }
  
console.log( getEventWeekDay(3)); // Sa