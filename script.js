const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Select media stream, pass to video elenment and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    // Catch error
    console.log('Error:', error);
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start PIP
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
})
selectMediaStream();