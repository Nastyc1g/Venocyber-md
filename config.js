//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2347066575685";
global.sudo = process.env.SUDO || "2347066575685";
global.owner = process.env.OWNER_NUMBER || "2347066575685";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZNLzFENWlSS3A1QS9iWGpscGhoR2VjOFIyODNVK1NURnVSRlV0MmhXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVovcUJKRlZWS3BycVNyMDZyNGVOL0ZFVXlybThwdkJiU21Ncm1Bbzl6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UHF0QTIzZmd4V0VVSEtLaWI3UGxDV0xPZHpKa1AvY1UxS3lxWXFWS204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSUd6SGY2bXM1VEQwNWZzbFdOTlhhU0JiWXdJdVEvUi9oTlNFQm1uMWdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOR0RMSjg0YXk1bUgwUm1rUUFBUGpvTGNEakIyYUg4WldOUHdoVGZRbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ5T29jeXpaR01hcUhDL2lpL2NwTEU2aHppWitxSnhTbFYyMlU3R1FLbUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE8xNlhvVHBWTWRqa3RnOHpKTE1YYkdGektQZVAwMkFnT0QxWEhRL3psYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmorZnAvVCtoVlJVazlxREJubko2cHdPNjVPWUNqYUFsNkRKRzhoWTVTWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJKWUptWHZhV0J5eW14MEE0Mi8rdWtiaVpXYVJjaFhabm41MUN3VHIwN2ZLY0tkV1Z5WTBpOHIzYlEwRWJZS1JqNHFnVnBla2RzdCtIZ0lOWXFaM2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJMSzRENjZoTXk1M3hjamUzYkN6WWgxV0NSd3F5ckIyS243cHB4MnFWeGJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYS0FMWTBpYlJHNjE5MkNPNk5leXNBIiwicGhvbmVJZCI6IjI0ZDdlNzVmLTA0MWEtNDE5OS05OTRhLTJmNzkxYjBkMDZkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBN2hTQTFCNHgxVFNXRlUrYW90K0RMU1ZjYjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHNzdzc1WHFSa05jdGR4R1lidlRING5pNElZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNQUkNCNFg5IiwibWUiOnsiaWQiOiIyMzQ5MTIxNDgzNTI5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUHJla2UgQm95In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYXNvcDRDRUtxTGg3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5VlpFc1cwK2crOUowN1lsOFM3OVExeFpJbTk1TXplMWdNUW9lTExOT0JZPSIsImFjY291bnRTaWduYXR1cmUiOiJxQ2dSY2VNcDVmaWJlcWhmVDBTMkFzVnZRWG45QzhoakRwVTROZkJhL2pSb0dQRE1kUU5GWDg0K1NpbmlkUWR6UytvOXFKQ0J2eHhnd1dBRm1mMlJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFg5V25SalkyYnh6bXhuSStVSi9FTmhreE5MQzZsdFpBZklNTjVNamg1V0lEL2JJY21mRGhiR3ROVUNjZFNHa1ZRV0IrcTgxMkhRWVRaZ1dHTSs5aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIxNDgzNTI5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2xXUkxGdFBvUHZTZE8ySmZFdS9VTmNXU0p2ZVRNM3RZREVLSGl5elRnVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc4MDc5MX0="
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "PASCHAL MD",
  ownername: process.env.OWNER_NAME || "PASCHAL",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
