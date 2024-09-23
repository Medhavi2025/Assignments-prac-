// function delayMessage(msg){
//     console.log(msg)
// }


// setTimeout(()=>{
//     delayMessage("hello");
// },2000);

// function countDown(num,clearInter){
//     if(num==0)
//         clearInter();
//     console.log(num);
// }

// let num=10;
// const interval=setInterval(()=>{
//     countDown(num--,clearInter);
// },1000)

// const clearInter=()=>{
//     clearInterval(interval);
// }

function wait(time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("hello",time);
        })
    })
}

const result=wait(2000);

result.then((value)=>{
    console.log(value);
})
