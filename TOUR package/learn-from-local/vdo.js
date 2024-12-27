// script.js
let localStream;
let remoteStream;
let peerConnection;

const localVideo = document.getElementById("local-video");
const remoteVideo = document.getElementById("remote-video");
const startCallButton = document.getElementById("start-call");
const endCallButton = document.getElementById("end-call");

// Configuration for WebRTC (STUN server to get ICE candidates)
const config = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" } // Google STUN server
  ]
};

// Start video call
startCallButton.addEventListener("click", startVideoCall);

// End video call
endCallButton.addEventListener("click", endVideoCall);

// Start video call logic
function startVideoCall() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      // Display local video stream
      localVideo.srcObject = stream;
      localStream = stream;

      // Initialize peer connection
      peerConnection = new RTCPeerConnection(config);

      // Add the local stream to the peer connection
      localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

      // Handle incoming remote stream
      peerConnection.ontrack = event => {
        remoteStream = event.streams[0];
        remoteVideo.srcObject = remoteStream;
      };

      // Create an offer to start the call
      peerConnection.createOffer()
        .then(offer => {
          return peerConnection.setLocalDescription(offer);
        })
        .then(() => {
          console.log("Offer created and sent: ", peerConnection.localDescription);
        })
        .catch(error => console.error("Error creating offer:", error));

      // Set up ICE candidates
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          console.log("ICE Candidate:", event.candidate);
        }
      };

      // Enable the "End Call" button
      endCallButton.disabled = false;
      startCallButton.disabled = true;
    })
    .catch(error => console.error("Error accessing media devices: ", error));
}

// End video call logic
function endVideoCall() {
  // Stop local video stream
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    localVideo.srcObject = null;
  }

  // Stop remote video stream
  if (remoteStream) {
    remoteStream.getTracks().forEach(track => track.stop());
    remoteVideo.srcObject = null;
  }

  // Close peer connection
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
  }

  // Reset buttons
  endCallButton.disabled = true;
  startCallButton.disabled = false;

  console.log("Call ended");
}
