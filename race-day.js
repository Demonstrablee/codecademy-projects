let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly= false; // boolean did the runner register early?//

let racerAge = 17; // user enters their age //


if (registerEarly && racerAge > 18){
    raceNumber += 1000;
}
else if((!registerEarly) && racerAge > 18){
    console.log('Late adults run at 11:00 am');
}
else if (racerAge < 18){
    console.log(`Youth registrants run at 12:30 pm (regardless of registration). ${raceNumber}`);

}else{
    console.log('Runners of 18 years please see the registration desk for more information. ')
}

