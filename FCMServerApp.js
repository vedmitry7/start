const express = require("express");
const FCM = require('fcm-node');
const FCMServerApp = express();

const serverKey = 'AAAAXaMYhJo:APA91bHBW0vg02GrIA9xTfntBkW2mtL12pX-DDuW8MJzfDOLRwu3h84Y4lBQ8aoo5Fh98szp5S3OMeo0j6SxIoWiqX3cF4L649McfN34YihxxQQ3Ljkk8RiYUdqloWtG9JjJBg_HfxzB';
const serverKey2 = 'AAAAXaMYhJo:APA91bHBW0vg02GrIA9xTfntBkW2mtL12pX-DDuW8MJzfDOLRwu3h84Y4lBQ8aoo5Fh98szp5S3OMeo0j6SxIoWiqX3cF4L649McfN34YihxxQQ3Ljkk8RiYUdqloWtG9JjJBg_HfxzB';
const referenceKey = 'eSMH9CT8PaQ:APA91bFywI4NrqjcmxdhtQbMBLU_2n4sXSL-9Yk_dE1tKFzCT3taGbybkWTjBBp2_I2tiXJ_jw1A2SND6eXn5QnTDIXHmHHEN0Zt_vrmfpEDeSh5k-7HjFgowX8TNecuxFl9sN7oqwOF'; //Device Key
const referenceKeyA = 'dQZsFcx8D1k:APA91bHtN3dPojQsAMzAVhbQONbTZsHnNzhZn-9wkMZ3xSreV1HBMw01XgO-N3KMRwcCa62ej1XrHoocGxsN1Tj5VB4ZflbCVhYtCwDdJNFdTLuBfKim9FpmuTCYltV3HHj0S4V7XhXR'; //Device Key
const fcm = new FCM(serverKey);

FCMServerApp.get("/", function(request, response){
    sendPush(response)
});

function sendPush(response) {
    let message = {
        to: referenceKey,
        notification: {
            title: 'Тернопольская область',
            body: '"Погода заебца, идите все в леса, козлята скачат ну лугу, погода заебись? Угу"',
            click_action: "EVENT_NOTIFICATION"
        },
        data: {
            event_id: '345',
            event_locale: "uk",
            event_text: 'Погода заебца, идите все в леса, козлята скачат ну лугу, погода заебись? Угу',
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

FCMServerApp.listen(3004);