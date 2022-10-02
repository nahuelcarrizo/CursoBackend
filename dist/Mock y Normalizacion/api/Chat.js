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

  async save(allMessages) {
    try {
      let data = await this.#readFileFunction();
      if (data.length) {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([...data, allMessages], null, 2)
        );
      } else {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([{ allMessages }], null, 2)
        );
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Chat;
