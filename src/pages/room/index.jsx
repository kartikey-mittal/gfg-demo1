import React from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from "react-router-dom";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 311553807;
        const serverSecret = "5cb9b845b7ded72524e4393cf58afbd6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Kartikey");

        const zp = ZegoUIKitPrebuilt.create(kitToken); 
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <div className="room-page">
            {roomId}

        <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;