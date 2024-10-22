import React, { useState } from 'react';
import { connectToWebRTC } from '../utils/webrtcUtils';

function Receive() {
    const [code, setCode] = useState('');
    const [connection, setConnection] = useState(null);
    const [receivedFile, setReceivedFile] = useState(null);

    const handleConnect = async () => {
        const { peerConnection, dataChannel } = await connectToWebRTC('receiver', code);
        dataChannel.onmessage = (event) => {
            setReceivedFile(event.data);
        };
        setConnection({ peerConnection, dataChannel });
    };

    const handleDownload = () => {
        const url = URL.createObjectURL(receivedFile);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'received_file';
        link.click();
    };

    return (
        <div>
            <h2>Receive Files</h2>
            <input type="text" placeholder="Enter 6-digit code" value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={handleConnect}>Connect</button>
            {receivedFile && <button onClick={handleDownload}>Download File</button>}
        </div>
    );
}

export default Receive;
