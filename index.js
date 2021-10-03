const ioredis = require("ioredis");

// 建立连接
const redis = new ioredis({
  port: 6379,
  host: "127.0.0.1",
  showFriendlyErrorStack: true, // 良好的错误堆栈的信息
});

// redis.set("foo", "bar", (err, ret) => {
//   if (err) {
//     return console.log("写入失败", err);
//   }
//   console.log("写入成功", ret);
// });

// redis.get("foo", (err, ret) => {
//   if (err) {
//     return console.log("获取失败", err);
//   }
//   console.log(ret);
// });

// async function main() {
//   const ret = await redis.get("foo");
//   console.log(ret);
// }
// main()

// 管道
// async function main() {
//   try {
//     const pipeline = redis.pipeline();
//     for (let i = 0; i < 100; i++) {
//       pipeline.set(`${i}-foo`, i);
//     }
//     const ret = await pipeline.exec();
//     console.log(ret);
//   } catch (err) {
//     console.log(err);
//   }
// }
// 事务
// async function main() {
//   try {
//     const ret = await redis.multi().set("jack", 100).set("rose", 200).exec();
//     console.log(ret);
//   } catch (err) {
//     console.log(err);
//   }
// }

async function main() {
  try {
    await redis.set("aa");
  } catch (err) {
    console.log(err);
  }
}
main();
