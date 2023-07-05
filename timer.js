const timer = (times) => {
  let timesArray = [];
  for (let i = 2; i < times.length; i++) {
    let arg = times[i];
    if( !isNaN(arg) && arg > 0) {
      timesArray.push(arg*1000);
    }
  }
  timesArray.sort(); //sort times and multiplay by 1000 for ms value
  console.log(timesArray);
  for(let i = 0; i < timesArray.length; i++) {
    setTimeout(() => {
      console.log(timesArray[i]);
      process.stdout.write('\x07'); //beep
    }, timesArray[i]);
  }
};
timer(process.argv);