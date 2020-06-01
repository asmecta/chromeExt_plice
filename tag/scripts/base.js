var opt = {
    type: 'basic',
    iconUrl: '../img/icon_48.png',
    title: '通知',
    message: '有新任务需要处理'
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    opt.message = '有' + request.greeting + '个"线上证明申请"需要处理'

    chrome.notifications.clear('popup', function () {
        console.log('清理已存在的通知')
    })
    chrome.notifications.create('popup', opt, function () {
        console.log('通知创建成功')
    })
    sendResponse('已收到你的消息');
});