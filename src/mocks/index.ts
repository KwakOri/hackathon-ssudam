// export async function initMsw() {
//   if (typeof window === "undefined") {
//     const { server } = await import("../mocks/server");
//     server.listen();
//   } else {
//     const { worker } = await import("../mocks/browser");
//     console.log("worker works!");
//     await worker.start();
//   }
// }
