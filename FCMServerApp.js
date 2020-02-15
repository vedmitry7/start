const express = require("express");
const FCM = require('fcm-node');
const FCMServerApp = express();

const serverKey = 'AAAAXaMYhJo:APA91bHBW0vg02GrIA9xTfntBkW2mtL12pX-DDuW8MJzfDOLRwu3h84Y4lBQ8aoo5Fh98szp5S3OMeo0j6SxIoWiqX3cF4L649McfN34YihxxQQ3Ljkk8RiYUdqloWtG9JjJBg_HfxzB';
const serverKey2 = 'AAAAXaMYhJo:APA91bHBW0vg02GrIA9xTfntBkW2mtL12pX-DDuW8MJzfDOLRwu3h84Y4lBQ8aoo5Fh98szp5S3OMeo0j6SxIoWiqX3cF4L649McfN34YihxxQQ3Ljkk8RiYUdqloWtG9JjJBg_HfxzB';
const referenceKey = 'c3qphH_Fy9s:APA91bHVOVLUgbM2L21R0yFHKbPuzG8duhk5LrhyheryBn7mCa1ZytuX5NVFGdWu7j00y17J2OLaw-wKu519Is4-yMHMmkWHL3B0wRZMzCiuLj1O_Jn-_xVFiph6Gjp9BDJ-534LwP0C'; //Device Key
const referenceKeyA = 'cALNQEDtfyk:APA91bGkK7_aDK-RT7PlvlGomrlU177fUpP5jpimiDSOKudxuXDDGJ3soxvp-bKkU633deKPHAz1sIO-mm_i3zaHKwkj3mDf1lBvXRfHSGCpXxFg_s4rdSnNwf5DBengNLRZBP1SxsIZ'; //Device Key
const fcm = new FCM(serverKey);

FCMServerApp.get("/", function(request, response){
    sendPush(response)
});

function sendPush(response) {
    let message = {
        to: referenceKey,
        notification: {
            title: 'Тернопольская область',
            body: '"Алеша Алеша, Погода хуйня. Сиди лучше дома ведь дел дохуя"',
            click_action: "EVENT_NOTIFICATION"
        },
        data: {
            event_id: '345',
            event_locale: "uk",
            event_text: 'У Альошкиной гармошки Свой перебор,И все песни у Альошки,Как на подбор.Сам молчун, а руки громки,И оттого Он творит на старой хромке Впрямь волшебство. Ну, скажи мне, скажи мне, Открой секрет, Альошка, Ведь не зря, Альошка, Твоя гармошка Вздыхает по весне',
            event_region: 'Тернопольская область',
            event_created_at: '2019-12-19 18:34:32.000000'
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

FCMServerApp.listen(3005);