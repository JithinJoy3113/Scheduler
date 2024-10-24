var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];
// var data = [{
//     start: 0,
//     duration: 15,
//     title: "Exercise"
// },
// {
//     start: 0,
//     duration: 20,
//     title: "Sleep"
// }
// ];
var temp;
for(var i=0;i<data.length;i++){
    for(var j=i+1;j<data.length;j++){
        if(data[i].start>data[j].start){
            temp=data[i];
            data[i]=data[j];
            data[j]=temp;
        }
    }   
}

var tempDuration;
var totalPreviousDuration=0;
var totalDuration=0;
var nextDuration=0
var prevStart=-1;

var div=document.getElementById('timeLineDiv')
for (var i=0;i<data.length;i++){ 
    console.log(data[i]);
    var startData=data[i].start;
    var duration=data[i].duration; 
    totalDuration=startData+duration;
    (i<data.length-1)? nextDuration=data[i+1].duration+data[i+1].start :nextDuration=0 ;
    if(i!=0 && i<data.length) totalPreviousDuration=data[i-1].start+data[i-1].duration;
    if(i<data.length-1) nextStart=data[i+1].start;
    var timeline=duration+"px";
    var mtop=startData+"px";
    var element=document.createElement('div');
    element.style.height=timeline;
    element.classList.add('timelineColor');     
    element.style.position="absolute";
    element.style.top=mtop;

    if ((totalDuration<=nextDuration && startData>totalPreviousDuration && nextStart<totalDuration) ||
        (startData<totalPreviousDuration && totalDuration>=nextDuration)){
            element.style.marginLeft="50%";
            element.style.zIndex="1";
            element.style.borderBottom="3px solid white";
    }

    element.textContent=data[i].title;
    div.appendChild(element); 
    tempDuration=totalDuration;
    prevStart=startData           
}
