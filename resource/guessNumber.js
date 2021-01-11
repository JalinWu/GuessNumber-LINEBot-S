let answer = 0;
let lowNum = 1;
let highNum = 100;
let count = 0;

// 學舌鳥
var repeatBird = function (bot) {
    bot.on('message', function (event) {
        // 使用者輸入的內容
        var userMsg = event.message.text;

        // 機器人回覆使用者輸入的內容


    });
}

// 各種通知
var webhookEvent = function (bot) {
    // 被加入好友
    bot.on('follow', async (event) => {
        // 回覆使用者：感謝將我加為好友

    })

    // 被解除好友
    bot.on('unfollow', async (event) => {
        // console印出：被解除好友了 QQ

    })

    // 被加入群組/聊天室
    bot.on('join', async (event) => {
        // 回覆使用者：感謝將我加入群組

    })

    // 被踢出群組/聊天室
    bot.on('leave', async (event) => {
        // console印出：被踢出群組了 QQ

    })

    // 有人加入群組/聊天室
    bot.on('memberJoined', async (event) => {
        // 回覆使用者：歡迎加入群組 ^^

    })

    // 有人離開群組/聊天室
    bot.on('memberLeft', async (event) => {
        // console印出：有人離開群組了 QQ

    })
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
    webhookEvent,
    guessNumber
}