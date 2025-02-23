// const slots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3')];
// const no = ['🍎', '🍓', '🍇', '🍒', '🍊', '🥭', '7']; //スロットの種類　画像にしたらリール中ズレない
// let slotTimers = [];
// let isSpinning = [false, false, false]; //各リールの状態

// //スロットを開始
// function startSlot(){
//     document.getElementById('result').textContent = ''; //結果をクリア

//     for(let i = 0; i < slots.length; i++){
//         if(!isSpinning[i]){
//             isSpinning[i] = true;
//             slotTimers[i] = setInterval(() => {
//                 slots[i].textContent = no[Math.floor(Math.random() * no.length)];
//             }, 50);//スロット速度
//         }
//     }
// }

// //スロットを停止する関数（リールごと）
// function stopSlot(reelIndex){
//     if(isSpinning[reelIndex]){
//         clearInterval(slotTimers[reelIndex]);
//         isSpinning[reelIndex] = false;

//         //全てのリールが停止したら結果を判定
//         if(!isSpinning.includes(true)){
//             checkResult();
//         }
//     }
// }

// //結果の判定
// function checkResult(){
//     const result = slots.map(slot => slot.textContent);
//     if(result[0] === result[1] && result[1] === result[2]){
//         document.getElementById('result').textContent = "大当たり!";
//     }
//     else{
//         document.getElementById('result').textContent = "残念!";
//     }
// }

// // イベントリスナーをボタンに追加
// document.getElementById('startButton').addEventListener('click', startSlot);
// document.getElementById('stopButton1').addEventListener('click', () => stopSlot(0));
// document.getElementById('stopButton2').addEventListener('click', () => stopSlot(1));
// document.getElementById('stopButton3').addEventListener('click', () => stopSlot(2));



//3レーンここから↓
const slots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3'), document.getElementById('slot4'), document.getElementById('slot5'), document.getElementById('slot6'), document.getElementById('slot7'), document.getElementById('slot8'), document.getElementById('slot9')];
const no = ['🍎', '🍓', '🍇', '🍊', '7']; //スロットの種類　画像にしたらリール中ズレない
let slotTimers = [];
let isSpinning = [false, false, false]; //各リールの状態

//スロットを開始
function startSlot(){
    //結果をクリア
    document.getElementById('result').textContent = '';
    document.getElementById('slot1').style.backgroundColor = '#eee';
    document.getElementById('slot2').style.backgroundColor = '#eee';
    document.getElementById('slot3').style.backgroundColor = '#eee';
    document.getElementById('slot4').style.backgroundColor = '#eee';
    document.getElementById('slot5').style.backgroundColor = '#eee';
    document.getElementById('slot6').style.backgroundColor = '#eee';
    document.getElementById('slot7').style.backgroundColor = '#eee';
    document.getElementById('slot8').style.backgroundColor = '#eee';
    document.getElementById('slot9').style.backgroundColor = '#eee';
    for(let i = 0; i < slots.length; i++){
        if(!isSpinning[i]){
            isSpinning[i] = true;
            slotTimers[i] = setInterval(() => {
                slots[i].textContent = no[Math.floor(Math.random() * no.length)];
            }, 50);//スロット速度
        }
    }
}

//スロットを停止する関数（リールごと）
function stopSlot(reelIndex){
    if(isSpinning[reelIndex]){
        clearInterval(slotTimers[reelIndex]);
        isSpinning[reelIndex] = false;

        //全てのリールが停止したら結果を判定
        if(!isSpinning.includes(true)){
            checkResult();
        }
    }
}

//結果の判定
function checkResult(){
    const result = slots.map(slot => slot.textContent);
    //横↓
    if(result[0] === result[3] && result[3] === result[6]){
        document.getElementById('slot1').style.backgroundColor = "#333";
        document.getElementById('slot4').style.backgroundColor = "#333";
        document.getElementById('slot7').style.backgroundColor = "#333";
    }
    else if(result[1] === result[4] && result[4] === result[7]){
        document.getElementById('slot2').style.backgroundColor = "#333";
        document.getElementById('slot5').style.backgroundColor = "#333";
        document.getElementById('slot8').style.backgroundColor = "#333";
    }
    else if(result[2] === result[5] && result[5] === result[8]){
        document.getElementById('slot3').style.backgroundColor = "#333";
        document.getElementById('slot6').style.backgroundColor = "#333";
        document.getElementById('slot9').style.backgroundColor = "#333";
    }
    // 縦↓
    else if(result[0] === result[1] && result[1] === result[2]){
        document.getElementById('slot1').style.backgroundColor = "#333";
        document.getElementById('slot2').style.backgroundColor = "#333";
        document.getElementById('slot3').style.backgroundColor = "#333";

    }
    else if(result[3] === result[4] && result[4] === result[5]){
        document.getElementById('slot4').style.backgroundColor = "#333";
        document.getElementById('slot5').style.backgroundColor = "#333";
        document.getElementById('slot6').style.backgroundColor = "#333";
    }
    else if(result[6] === result[7] && result[7] === result[8]){
        document.getElementById('slot7').style.backgroundColor = "#333";
        document.getElementById('slot8').style.backgroundColor = "#333";
        document.getElementById('slot9').style.backgroundColor = "#333";
    }
    //ななめ↓
    else if(result[0] === result[4] && result[4] === result[8]){
        document.getElementById('slot1').style.backgroundColor = "#333";
        document.getElementById('slot5').style.backgroundColor = "#333";
        document.getElementById('slot9').style.backgroundColor = "#333";
    }
    else if(result[2] === result[4] && result[4] === result[6]){
        document.getElementById('slot3').style.backgroundColor = "#333";
        document.getElementById('slot5').style.backgroundColor = "#333";
        document.getElementById('slot7').style.backgroundColor = "#333";
    }
    else{
        document.getElementById('result').textContent = "残念!";
    }
}

// イベントリスナーをボタンに追加
document.getElementById('startButton').addEventListener('click', startSlot);
document.getElementById('stopButton1').addEventListener('click', () => stopSlot(0));
document.getElementById('stopButton1').addEventListener('click', () => stopSlot(1));
document.getElementById('stopButton1').addEventListener('click', () => stopSlot(2));
document.getElementById('stopButton2').addEventListener('click', () => stopSlot(3));
document.getElementById('stopButton2').addEventListener('click', () => stopSlot(4));
document.getElementById('stopButton2').addEventListener('click', () => stopSlot(5));
document.getElementById('stopButton3').addEventListener('click', () => stopSlot(6));
document.getElementById('stopButton3').addEventListener('click', () => stopSlot(7));
document.getElementById('stopButton3').addEventListener('click', () => stopSlot(8));