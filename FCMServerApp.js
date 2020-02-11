const express = require("express");
const FCM = require('fcm-node');
const FCMServerApp = express();

const serverKey = 'AAAAXaMYhJo:APA91bHBW0vg02GrIA9xTfntBkW2mtL12pX-DDuW8MJzfDOLRwu3h84Y4lBQ8aoo5Fh98szp5S3OMeo0j6SxIoWiqX3cF4L649McfN34YihxxQQ3Ljkk8RiYUdqloWtG9JjJBg_HfxzB';
const referenceKey = 'cSVyO9tyAVU:APA91bHAeK6ubWpDODMwTXWwvb_cbE35zF9ep9_l-f8CpRPOnShZ3hlBYYtN0G7c9D7U8FRj8LqXGBwXnYn-l_31sXgK0RSEOsJLTlc4EJvl7SMsnBdq-HXUP1oEUkGxwBM2e05aPC1U'; //Device Key
const fcm = new FCM(serverKey);

FCMServerApp.get("/", function(request, response){
    sendPush(response)
});

function sendPush(response) {
    let message = {
        to: referenceKey,
        notification: {
            title: 'Погода',
            body: '"Погода заебца, идите все в леса, козлята скачат ну лугу, погода заебись? Угу"',
            click_action: "EVENT_NOTIFICATION"
        },
        data: {
            event_id: '345',
            event_locale: "ru",
            //event_text: 'Погода заебца, идите все в леса, козлята скачат ну лугу, погода заебись? Угу',
            event_region: 'Тернопольская область',
            created_at: '2019-12-19 18:34:32.000000'
        }
    };

    fcm.send(message, function(err, resp){
        if (err) {
            console.log("Something has gone wrong!");
            response.send("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", resp);
            response.send("Successfully sent with response: " + resp);

        }
    });
}

FCMServerApp.listen(3003);