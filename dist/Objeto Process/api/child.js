process.on("message", (msg) => {
  const { cant, obj } = msg;
  const result = randomNum(cant, obj);
  process.send(result);
});

const randomNum = (cant, obj) => {
  for (let i = 0; i <= cant; i++) {
    const random = Math.floor(Math.random() * 1000);
    if (obj[random]) {
      obj[random]++;
      continue;
    }
    obj[random] = 1;
  }
  return obj;
};
