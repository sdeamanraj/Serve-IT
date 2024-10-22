export function generate6DigitCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function createWebRTCConnection(role, code) {
    const peerConnection = new RTCPeerConnection();
    const dataChannel = peerConnection.createDataChannel("fileTransfer");

    // Set up WebRTC connection (offer creation)
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Send offer to signaling server (pseudo code)
    // signalingServer.sendOffer(role, code, offer);

    return { peerConnection, dataChannel };
}

export async function connectToWebRTC(role, code) {
    const peerConnection = new RTCPeerConnection();

    // Set up WebRTC connection (answer creation)
    const offer = {}; // Fetch the offer from signaling server using code
    await peerConnection.setRemoteDescription(offer);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    // Send answer to signaling server (pseudo code)
    // signalingServer.sendAnswer(role, code, answer);

    const dataChannel = await new Promise((resolve) => {
        peerConnection.ondatachannel = (event) => resolve(event.channel);
    });

    return { peerConnection, dataChannel };
}
