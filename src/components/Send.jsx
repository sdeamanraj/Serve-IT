import React, { useState } from 'react';
import { generate6DigitCode, createWebRTCConnection } from '../utils/webrtcUtils';

function Send() {
    const [code, setCode] = useState('');
    const [connection, setConnection] = useState(null);

    const handleGenerateCode = async () => {
        const generatedCode = generate6DigitCode();
        setCode(generatedCode);

        const { peerConnection, dataChannel } = await createWebRTCConnection('sender', generatedCode);
        setConnection({ peerConnection, dataChannel });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (connection && connection.dataChannel) {
            connection.dataChannel.send(file);
        }
    };

    return (
        <div>
            <h2>Send Files</h2>
            {!code && <button onClick={handleGenerateCode}>Generate Code</button>}
            {code && <p>Share this code with the receiver: {code}</p>}
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default Send;
