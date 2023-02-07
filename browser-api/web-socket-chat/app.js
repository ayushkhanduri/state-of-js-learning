
const socket = io("ws://localhost:3000");

$('#submit-button').on("click", () => {
  const channelName = $('#channel-name').val();
  const username = $('#username').val();
  socket.emit("join-room", {
    channelName, username
  });
});

socket.on('send-room-info', (data) => {
  console.log(data);
})
