import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrolltracker=document.querySelector(".scrolltracker");
const animatedimage=document.querySelector(".pic")
const scrolltimelinetracking=new ScrollTimeline({
    source:document.scrollingElement,orientation:"block",scrollOffsets:[CSS.percent(0),CSS.percent(80)]
});
const animatedtimelinetracking=new ScrollTimeline({
    scrollOffsets:[
        {target:animatedimage,edge:"end",threshold:1},
        {target:animatedimage,edge:"start",threshold:1}
    ]
});
scrolltracker.animate({
    transform:['scaleX(0)','scaleX(1)']
},{
    duration:1,timeline:scrolltimelinetracking,
});
animatedimage.animate({
    transform:["rotateX(90deg)","rotate(0)"],
},{
    duration:1,
    timeline:animatedtimelinetracking
})