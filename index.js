/** @format */

const Bot = require("keybase-bot");

//This is the chat conversation ID, each chat has one
const convID =
    "0000ea83b2f3d5a6912c6f8ecb2f19628dca5c026f5855b167c457eb8959e97e";

//The account paper key
const key = "";

async function main() {
    const bot = new Bot();
    try {
        const username = 'avocadorable';
        const paperkey = 'toddler myself payment latin next bounce judge balcony skin ability grow will toast';
        await bot.init(username, paperkey, { verbose: false });
        console.log(
            `Your bot is initialized. It is logged in as ${bot.myInfo().username}`
        );

        const channel = {
            // name: "blckops.tech.bots", Optional name for specific users
            topicType: "chat",
            public: false,
        };
        const message = {
            body: `Hello blckops! This is ${
        bot.myInfo().username
      } saying hello from my device ${
        bot.myInfo().devicename
      }. This is a bot message.`,
        };

        await bot.chat.send({ public: true }, message, { conversationId: convID });
        console.log("Message sent!");
    } catch (error) {
        console.error(error);
    } finally {
        await bot.deinit();
    }
}

main();