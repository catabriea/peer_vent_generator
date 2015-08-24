var randomNum = require('./random');

var modWord = require('./public/data/modifier');
var adjWord = require('./public/data/adjective');
var topicWord = require('./public/data/topic');

function ventPhrase(){
    var x, y, z = randomNum(1,6);

    var smartAssPhrase = (modWord[x]+ " " + adjWord[y]+ " " + topicWord[z]);

    return smartAssPhrase;
};

//1st creation w/ Suren as a peer group
//var firstWordArray =[];
//var secondWordArray =[];
//var thirdWordArray =[];
//var rand = require('./random');
//var adject = require('./public/data/adjective');
//var topics = require('./public/data/topic');
//var modifier = require('./public/data/modifier');
//
//function firstWord (){
//    //var myFirstWord = Object.keys(modifier)[0];
//    //var myFirstWord = modifier.adjective1.modadj;
//    //var wordList = [];
//    //for(var x = 0; x < modifier.length; x++){
//    //    console.log(modifier[x]);
//    //    firstWordArray.push(modifier[x].modadj);
//    //}
//
//    firstWordArray.push(modifier.mod1.modadj);
//    firstWordArray.push(modifier.mod2.modadj);
//    firstWordArray.push(modifier.mod3.modadj);
//    secondWordArray.push(adject.ajective1.adj);
//    secondWordArray.push(adject.adjective2.adj);
//    secondWordArray.push(adject.adjective3.adj);
//    thirdWordArray.push(topics.topics1.top);
//    thirdWordArray.push(topics.topics2.top);
//    thirdWordArray.push(topics.topics3.top);
//    for(var x = 0; x < adject.length; x++){
//        console.log(adject[x]);
//        secondWordArray.push(adject[x].adj);
//    }
//    for(var x = 0; x < topics.length; x++){
//        console.log(topics[x]);
//        thirdWordArray.push(topics[x].top);
//    }
//
//    //console.log(myFirstWord);
//    //var mySecondWord = Object.keys(adject)[0];
//    //var myThirdWord = Object.keys(topics)[0];
//
//
//    //var mySecondWord = adject.adjective1.adj;
//    //console.log(mySecondWord);
//
//    //firstWordArray[0]=myFirstWord;
//    //firstWordArray[1]=mySecondWord;
//    //firstWordArray[2]=myThirdWord;
//
//
//    var randomIndex = rand(0,2);
//    var funnyString = (firstWordArray[rand] + " " + secondWordArray[rand]+ " " + thirdWordArray[rand]);
//
//    //randomIndex=randomIndex.toString();
//
//    console.log(firstWordArray[rand] + " " + secondWordArray[rand]+ " " + thirdWordArray[rand]);
//
//    return funnyString;
//
//};
//
//
//module.exports = firstWord;
