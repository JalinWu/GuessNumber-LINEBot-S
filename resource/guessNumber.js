let answer = 0;
let lowNum = 1;
let highNum = 100;
let count = 0;

// 學舌鳥
var repeatBird = function (bot) {
    // bot.on('message', function (event) {
    //     var userMsg = event.mssage.text;
    //     event.reply(userMsg);
    // });
}

// 猜數字
var guessNumber = function (bot) {
    bot.on('message', function (event) {
        // 使用者輸入的內容
        var userMsg = event.message.text;

        // Step.1 使用者如果輸入'start'或'restart'則遊戲開始，否則遊戲進行中
        // Step.2 遊戲開始時，機器人隨機生成一個"1~100的數字(答案)"以及"計算次數歸零"
        // Step.3 機器人回覆使用者"開始吧！"
        // Step.4 遊戲進行的過程中，判斷使用者輸入的數字是大於、小於還是等於答案
        // Step.5 根據判斷(大於、小於)設定highNum, lowNum，最後回覆使用者"lowNum~hignNum"
        // Step.6 加入計算次數，根據判斷(等於)，回覆使用者"恭喜答對！一共猜了count次"

    });
}

module.exports = {
    repeatBird,
    guessNumber
}