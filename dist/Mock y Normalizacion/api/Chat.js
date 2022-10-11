import fs from "fs";

class Chat {
  constructor() {
    this.url = "./DB/chat.txt";
  }

  async #readFileFunction() {
    try {
      let file = await fs.promises.readFile(this.url, "utf-8");
      let fileParsed = await JSON.parse(file);
      return fileParsed;
    } catch (error) {
      console.log(error);
    }
  }

  async save(message) {
    try {
      let allMessages = await this.#readFileFunction();
      if (allMessages.length) {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([...allMessages, message], null, 2)
        );
      } else {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([{ message }], null, 2)
        );
      }
      return allMessages;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllMessages() {
    try {
      const allMessages = await this.#readFileFunction();
      if (allMessages.length) {
        return allMessages;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Chat;
