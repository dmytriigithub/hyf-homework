// -------------------------------------------------------------------CactusIO-interactive (Smart phone usage app)
// ----------------------------------------------------------------------------Adding an activity
const activities = [];

function addActivity(date=new Date().toDateString(), activity=null, duration=null) {
    let obj = {
    'date' : date,// //date : date=new Date().toLocaleString()
    'activity' : activity,
    'duration' : duration
    };
    if (date != undefined && activity != null && duration != null) {
        activities.push(obj);
        console.log(activities);
    }
}

addActivity();
addActivity('Thu Dec 07 2021', "Youtube");
addActivity('Thu Dec 07 2021', "Facebook", 45);
addActivity(undefined, "Zoom", 20);
addActivity(undefined, "Youtube", 30);
addActivity(undefined, "Facebook", 45);
addActivity(undefined, "Zoom", 20);

// activities should now look like this
// [{
//     date: '23/7-18',
//     activity: 'Youtube',
//     duration: 30,
// }]

// ------------------------------------------------------------------------------------Show my status
// ---------------------------------------------------------------------------------------------Usage limit

function showStatus(activities){
  let sumMin = 0;
  let sumActivities = 0;
  if (activities.length === 0) {
    console.log(`Add some activities before calling showStatus`);
  } else{
  activities.forEach((item, i) => {
    if (item.date === (new Date().toDateString())){
      sumMin += item.duration;
      sumActivities += 1;
    }
    
    if (sumMin >= 180){
      console.log("You have reached your limit, no more smartphoning for you!");
    }
  });
  console.log(`You have added ${sumActivities} activities today. They amount to ${sumMin} min. of usage.`);
  }
}
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"






//-------------------------------------------------------------------------------Extra feature

function calculationOfActivity(){
    let mostActivityTime = 0;
    let mostActivityApp;
    activities.forEach((item, i) => {
      if (item.duration === mostActivityTime) {
        mostActivityApp = item.activity;
      }else if (item.duration > mostActivityTime){
        mostActivityTime = item.duration;
      }
    });
    console.log(`User has spent the most time on ${mostActivityApp} - ${mostActivityTime} min.`);
}
calculationOfActivity(); 