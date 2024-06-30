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
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUQyZlJZQXJ5d3YzWTBNc1ZvWkRjbTBEYi9yT3BkZTdqdEZad0tXY1BXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2dJQ2VhV3gyMDFpVkJSS3prZ0NmdFMzMDg1QkdXS05mV3V3T1Y5b1NuMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRU5yU0F4dnJTZFRiZGVCdmtNZHNRbEZ1Mll2VnJYdHpKMUZWamtHb1UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbmFZUG5NUlhHYUdoWDdUV3hxNlRLdzNBWlRUY202blVONmx2MnVOSmgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KZnJ4KzFlYVZIempvc0RNVzNnTEhvRFRwaXBycTk1UHJIQlovUEYzbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFQXlGU2huNk9LNzkzUVRHZWtxalhrNE9vcjhlUDdoQ0dZT1p6bVorV289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJYL3ViMTB2dDFkeWlMT0lDQ2pjRzRURGtJN2I4WUZiK054czRORFltUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUxxTGJTeVlTQ0NoY093V3doTTdHTFI5T0xDNjFtdlllS3M4cGcrc3gwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVoNmhkMjFKQXpXT1F1RSs4aFNlLzRpMXMwMmR1YjJsN0hsblBubnZOeXdmdnArNkhBd1dFMW5heDcyazNkVHNqWkpPcUlIKzcvc0lyOFpuM3RaOGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IitOSTh5TTltT016STNTNGNZQ0kxYURPRGVuejJUeW5TSGs0UmRVL0hHODg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxldU8xV29LUXBTTVRmMnlIcmJuSnciLCJwaG9uZUlkIjoiMDFhZDA2NWYtYWVjOS00MWZmLTlkNTAtNzgxNTIwZTJlZTFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5rblc1RWFXbDNiWW9LNm1DUm1ZYVlNT21lTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcERCR2R1WTVLVUhyYzgwQzUzVHJROW9MSzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkg2NDdQUVYiLCJtZSI6eyJpZCI6IjIzNDcwNjY1NzU2ODU6NDZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p1amthd0hFSVB2Z2JRR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNtNW51TzNqaVJnTXF6L0xZM0g1QjFvZ2NXb2ZkWjdKSGhOamRmRHZEa289IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJaN0JrOXZuWHVWWXF4eFVOcjZRak5DUURNbDIzQk9aSEk1enlxODhQWTF3YnFwOHMybStPUU55YXhzZE9uL3lPNUV4ZEtPVUpMMlEvaHNwTzRENUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHcXpyWEJCYndpK1ozWXJxYjBRRUVJNUdDN0QvdCtraDZZZndPYTlNeWRpYnNMVTVlM25CL0FTMTBzU0l0dWVOWGFBdU5jazdrMW5iMzV6OGpyZm5nZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNjY1NzU2ODU6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkp1WjdqdDQ0a1lES3MveTJOeCtRZGFJSEZxSDNXZXlSNFRZM1h3N3c1SyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTY5NTI0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCUkUifQ=="
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
