const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    let user_type = req.body.events[0].source.type;
    let user_id = req.body.events[0].source.userId
    let msg = req.body.events[0].message.text

    console.log(`Message token : ${ reply_token }`);
    console.log(`Message user Type : ${ user_type }`);
    console.log(`Message user ID : ${ user_id }`);
    console.log(`Message : ${ msg }`);

    reply(reply_token, msg)
    res.sendStatus(200)
})
app.listen(port)
  
function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {6P5TzfMs7eu/RHrY1vQzjU/Zn4+Z0BgN6vM7uNZN/ED/TWV0rReqn4GAzkEV64LNFvS3gXiEVSldCQZUZ76nQArk8mqqsLZYt2tDItvjaACADcNPEGm8jtZ5ZzbQUG2SLKirsfVJzpkj3Ak5B+P/ygdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: msg
        }]
    })

    .catch((err) => {
        // error handling
    });
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}
*/

app.post('/webhook',(req,res,next)=> { 
    console.log("HTTP POST Request :: MikaTech Line App Webhook");
    var reply_token = req.body.events[0].replyToken;
    var user_type = req.body.events[0].source.type;
    var user_id = req.body.events[0].source.userId
    var msg = req.body.events[0].message.text;

    console.log(`Message token : ${ reply_token }`);
    console.log(`Message user Type : ${ user_type }`);
    console.log(`Message user ID : ${ user_id }`);
    console.log(`Message : ${ msg }`);
    if (msg != null && msg != undefined){
        console.log('Message :', msg.toString('utf8'));
    }
    reply(reply_token);
    res.sendStatus(200);
});

function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {6P5TzfMs7eu/RHrY1vQzjU/Zn4+Z0BgN6vM7uNZN/ED/TWV0rReqn4GAzkEV64LNFvS3gXiEVSldCQZUZ76nQArk8mqqsLZYt2tDItvjaACADcNPEGm8jtZ5ZzbQUG2SLKirsfVJzpkj3Ak5B+P/ygdB04t89/1O/w1cDnyilFU=}'
    }

    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'สวัสดีคะ'
        },
        {
            type: 'text',
            text: 'ยินดีต้อนรับเข้าสู่ระบบสมาชิก MikaTech'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}