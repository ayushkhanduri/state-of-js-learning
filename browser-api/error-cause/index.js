// you can now pass the cause of the Error
// can be used to distinguish between different exceptions


function sendMail (sender, receiver, body) {
  if (!sender) {
    throw new Error("Failed to send mail", { cause : "No sender found "});
  }
  if (!receiver) {
    throw new Error("Failed to send mail", { cause: "no receiver found"});
  }
  if (!body) {
    throw new Error("Failed to send mail", { cause: "no body found"});
  }
}
try {
  sendMail("abc", "xyz", "");
} catch (e) {
  console.log(`${e.message} : ${e.cause}`);
}
