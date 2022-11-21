// bi-list

const menuBtn = document.querySelector('.bi-list');
const menuUl = document.querySelector('.top ul')
let sta = 0;
console.log(menuUl)
// console.log(menuBtn)

menuBtn.addEventListener('click',function(){
    // console.log('hi')
    console.log(sta)
    if(sta === 0) menuUl.style.transform = `translateX(0px)`;
    if(sta === 1) menuUl.style.transform = `translateX(-414px)`;
    // sta = sta === 0 ? 1 : 0; //三元運算子

    if(sta===0) sta=1;
    else if(sta===1) sta=0;
})