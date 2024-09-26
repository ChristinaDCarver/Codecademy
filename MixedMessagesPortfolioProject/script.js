
const verseOfTheDay = ['Proverbs 32', 'Psalm 32', 'Isaiaih 40', 'Isaiah 41', 'Isaiah 43'];
const weather = ['sunny', 'cloudy', 'rainy', 'beatutiful temperature', 'cool'];
const peopleGrouptoPrayFor = ['Somali', 'Turkish', 'Armenian', 'Japanese', 'Azerbaijani'];

const printMessage = (x) => {

    if (x=0) {
        console.log('Todays weather will be: ' + weather[0] + ', and the chapter of the day is: ' + verseOfTheDay[0] + ', and the people group to pray for today is: ' + peopleGrouptoPrayFor[0] + '.');
    }
    else if (x=1) {
        console.log('Todays weather will be: ' + weather[1] + ', and the chapter of the day is: ' + verseOfTheDay[1] + ', and the people group to pray for today is: ' + peopleGrouptoPrayFor[1] + '.');
    }
    else if (x=2) {
        console.log('Todays weather will be: ' + weather[2] + ', and the chapter of the day is: ' + verseOfTheDay[2] + ', and the people group to pray for today is: ' + peopleGrouptoPrayFor[2] + '.');
    }
    else if (x=3) {
        console.log('Todays weather will be: ' + weather[3] + ', and the chapter of the day is: ' + verseOfTheDay[3] + ', and the people group to pray for today is: ' + peopleGrouptoPrayFor[3] + '.');
    }
    else if (x=4) {
        console.log('Todays weather will be: ' + weather[4] + ', and the chapter of the day is: ' + verseOfTheDay[4] + ', and the people group to pray for today is: ' + peopleGrouptoPrayFor[4] + '.');
    }
    else {
        console.log('Please submit a number between 0 and 4');
    }
    };


printMessage(0);

