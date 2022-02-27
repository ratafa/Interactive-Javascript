let prev_button;
let next_button;
let contentWrap;
let disk_inner;
let pageNum = 0;
let totalNum = 0;
let album;
let pointBtnAll;
const bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["#b6bfc8","#36595b"];
bgArray[2] = ["#e58e82","#6f569f"];  


window.onload = function() {
    prev_button = document.querySelectorAll("button")[0];
    next_button = document.querySelectorAll("button")[1];
    contentWrap = document.querySelector(".contentWrap");
    disk_inner = document.querySelectorAll(".disk_inner");
    pointBtnAll = document.querySelectorAll(".pointWrap li");
    album = document.querySelectorAll(".album");
    totalNum = album.length;

    prev_button.addEventListener("click", function() {
        if(pageNum > 0) {
            pageNum --;
        }else {
            pageNum = totalNum - 1;
        // 만약 totalNum - 1 이 아니라 totalNum으로 설정하면 pageNum이 3이 되어버림.(album.length는 3개니까.)
        // 그렇게 되면, pageChangeFunc()에서 album[3].classList.add("active");이 활성화 되지만
        // 애초에 album의 클래스는 0,1,2만 있음. 그래서 album[3]은 애초에 없는 것이니 활성화가 안됌
        }  
        pageChangeFunc();
    })

    next_button.addEventListener("click", function() {
        if(pageNum < totalNum - 1 ) {
            pageNum ++;
        }else {
            pageNum = 0;
        }
        pageChangeFunc();
    })

    for(let i=0; i<pointBtnAll.length; i++) {
        pointBtnAll[i].addEventListener("click", function() {
            pageNum = i;
            pageChangeFunc();
        })
    };

    pageChangeFunc();


    function pageChangeFunc() {
        contentWrap.style.background = "linear-gradient(120deg,"+ bgArray[pageNum][0] +", "+ bgArray[pageNum][1] + ")";
        
        // for(var i=0; i<totalNum; i++){
        //     if(pageNum == i){
        //         //현재 컨텐츠(페이지)
        //         album[i].classList.add("active");
        //         pointBtnAll[i].classList.add("active");
        //     }else{
        //         album[i].classList.remove("active");
        //         pointBtnAll[i].classList.remove("active");
        //     }
        // }

        for(let i=0; i<totalNum; i++) {
            album[i].classList.remove("active");
            pointBtnAll[i].classList.remove("active");
        }
        album[pageNum].classList.add("active");
        pointBtnAll[pageNum].classList.add("active");
        disk_inner[pageNum].style.background = bgArray[pageNum][0]; 
    }
}




// 원본
// var prev_button, next_button;
// var contentWrap;
// var disk_inner;
// var pageNum = 0;
// var totalNum = 0;
// var album;
// var pointBtnAll;
// var bgArray = new Array();
// bgArray[0] = ["#0272a4","#f6a564"];
// bgArray[1] = ["#b6bfc8","#36595b"];
// bgArray[2] = ["#e58e82","#6f569f"];

// window.onload = function(){
//     prev_button = document.querySelectorAll("button")[0];
//     next_button = document.querySelectorAll("button")[1];
    
//     contentWrap = document.querySelector(".contentWrap");
//     disk_inner = document.querySelectorAll(".disk_inner");
//     album = document.querySelectorAll(".album");
//     pointBtnAll = document.querySelectorAll(".pointWrap li");
//     totalNum = album.length;

//     prev_button.addEventListener("click", function(){
//         if(pageNum > 0){
//             pageNum --;
//         }else{
//             pageNum = totalNum -1;
//         }
//         pageChangeFunc();
//     })

//     next_button.addEventListener("click", function(){
//         if(pageNum < totalNum-1){
//             pageNum ++;
//         }else{
//             pageNum = 0;
//         }
//         pageChangeFunc();
//     })

//     for( var i = 0; i < pointBtnAll.length; i++ ){
//         (function(idx) {
//             pointBtnAll[idx].onclick = function() {
//                 // alert(idx);
//                 pageNum = idx;
//                 pageChangeFunc();
//             }
//         })(i);
//     }

//     //최초실행
//     // pageNum = 2;
//     pageChangeFunc();
// }

// //여기서 모든 것을 한다.
// function pageChangeFunc(){

//     contentWrap.style.background = "linear-gradient(120deg,"+ bgArray[pageNum][0] +", "+ bgArray[pageNum][1] + ")";

//     for(var i=0; i<totalNum; i++){
//         if(pageNum == i){
//             //현재 컨텐츠(페이지)
//             album[i].classList.add("active");
//             pointBtnAll[i].classList.add("active");
//         }else{
//             album[i].classList.remove("active");
//             pointBtnAll[i].classList.remove("active");
//         }
//     }

//     disk_inner[pageNum].style.background = bgArray[pageNum][0];
// }