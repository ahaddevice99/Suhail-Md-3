const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_47_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5QkUwQmtUNHZSUjViTHhoOTJWMmZSTk0yV01ESXppaVFWdnJOMXNSa0lRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNZE5hU0xSVVN4cUJKeWdleXNaZzhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkMDFhNDIxLTAzMTgtNDFlZC05MzFmLTM3OTI1OWM4YWFiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDE5NSxcbiAgICAgIDEwMixcbiAgICAgIDI1MixcbiAgICAgIDEyNCxcbiAgICAgIDMzLFxuICAgICAgMjEzLFxuICAgICAgMTU5LFxuICAgICAgMTQxLFxuICAgICAgMjU1LFxuICAgICAgMTQ3LFxuICAgICAgMTQsXG4gICAgICAyMSxcbiAgICAgIDgyLFxuICAgICAgMzksXG4gICAgICA3MCxcbiAgICAgIDEyLFxuICAgICAgMTgsXG4gICAgICA1MSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgODUsXG4gICAgICA3OSxcbiAgICAgIDIwMyxcbiAgICAgIDcwLFxuICAgICAgMjM4LFxuICAgICAgNDUsXG4gICAgICAxNTUsXG4gICAgICAxMjQsXG4gICAgICA4MSxcbiAgICAgIDUyLFxuICAgICAgNjIsXG4gICAgICAyMSxcbiAgICAgIDE1MCxcbiAgICAgIDgxLFxuICAgICAgMTY2LFxuICAgICAgMjIxLFxuICAgICAgMjI0LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdpN3F3R0VKR0s5OFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0U3VIU29IRmltQ2ptUmJBTnBlQkJPU01aQXpuekJoOUJlWmhZMW54M2pFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIksxZWkwUEJiYmIyV1Q3N1g5TVdBK0llWU5MZ0x6MVFOanFyNmVkSy9EOVB2b1ZwR2VMbXJYakpLUHlWUjVMWEcwTmlJMWxnM25YamcrcXlWV3U1QURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVwYlJjZWc5NXdDUUpaLzVTcXhjSGE0REhlbVo2RFZCLzJUeXBVTWxIeXJmSm5wYlhMUG80YW9YQ2FVdXRYWnJVc1RZZkEyazZ2czFUQUFBOUFkZ2hnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDI0ODA2NjE0OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzM4MTI5OTk3ODQ1ODo1MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyNDgwNjYxNDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NzI2NzIyMlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

