import fs from "fs";

const source = "./dist/index.html";
const destination = "./dist/404.html";

fs.copyFile(source, destination, (err) => {
  if (err) throw err;
  console.log("✅ 404.html created successfully!");
});