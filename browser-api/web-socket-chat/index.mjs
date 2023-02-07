import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

const io = new Server({
  cors: {
    origin: "*"
  }
});

const pubClient = createClient({ url: "redis://localhost:6379" });
const subClient = pubClient.duplicate();
await pubClient.connect();

const rooms = {};

io.on('connection', (socket) => {
  socket.on('join-room', async (args) => {
    const {channelName, username} = args;
    await pubClient.flushAll(); // @TODO -> remove this later
    const chatInfo = JSON.parse(await pubClient.get(channelName));
    if (!chatInfo) {
      pubClient.set(channelName, JSON.stringify({
        participants:[username],
        chats: []
      }))
      const room = socket.join(channelName);
      rooms[channelName] = room;
      io.to(channelName).emit('send-room-info', {
        participants:[username],
        chats: []
      })
    } else {
      const { participants , chats} = chatInfo;
      pubClient.set(channelName, JSON.string({
        participants: [...participants, username],
        chats: [...chats]
      }))
      socket.to(channelName).emit('send-room-info', {
        participants: [...participants, username],
        chats: [...chats]
      })
    }
  });
});

io.adapter(createAdapter(pubClient, subClient));
io.listen(3000);
