const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348083209378";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_07_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmcDVHS0lEYThUMkpFYVdMVHEyVDV4ZWx1WDhMZkk1bzRSemU4emExUDNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRaWNVS09vbFNSV2R2YUw0Q20xeDVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUwNmE1MzA3LTYwYzMtNDkzNS1iZjJmLTUzYmRjODhiZWQ0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDEzMSxcbiAgICAgIDUsXG4gICAgICAxMSxcbiAgICAgIDE5MyxcbiAgICAgIDIyMCxcbiAgICAgIDE1NCxcbiAgICAgIDg0LFxuICAgICAgMTYsXG4gICAgICAxNDcsXG4gICAgICA1MCxcbiAgICAgIDM3LFxuICAgICAgMjEyLFxuICAgICAgNTgsXG4gICAgICAyMzksXG4gICAgICAyNSxcbiAgICAgIDg1LFxuICAgICAgOTYsXG4gICAgICA0OSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDEzMSxcbiAgICAgIDIyNCxcbiAgICAgIDk0LFxuICAgICAgMTQsXG4gICAgICAxNjUsXG4gICAgICAxMyxcbiAgICAgIDIxMyxcbiAgICAgIDE4NyxcbiAgICAgIDE5NyxcbiAgICAgIDE5MCxcbiAgICAgIDQzLFxuICAgICAgMTExLFxuICAgICAgMjMzLFxuICAgICAgMjM1LFxuICAgICAgMzYsXG4gICAgICAxMzAsXG4gICAgICA1MSxcbiAgICAgIDcxLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkRLNFYzQ05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODMyMDkzNzg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJAQUdFTkRB8JajgiBMRSBHUkFORFwiLFxuICAgIFwibGlkXCI6IFwiMjU5MTU0NDM0MzU1MjA4OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xRGprY1FtdCtWdFFZWUV5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYTd6TlRZYzZyRjZLNzNBVkIvY0hRRkFTb0VydnRPanJIeU9naTdnalpUbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTWHlBc0NzcVI5TFZDdEg4c2NYeEM0MWlqQXhtNFc1Z2txOHl3K0pnU05YZGd5VzZsNDU2MTFkc0dleDNRSWMrYmRicG1yUW4yQlNzWks4SkE5NzhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYMXZzK0ZIL1g2QnVIckw2czNKU0tHam91eWVHT1Fxa0pOTXdEM3ZOSHB5T0hrb1J4cEFzZW11anFzNkRQQytwbE1uZzJQeTgzUGwwdDgyeVNvL2dEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgzMjA5Mzc4OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxMTgwNDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZETy5qc29uIjogIntcImtleURhdGFcIjpcInNIOGsrWDd5TFZYUHMrY0xJaFI1dnZ0TXRJUlJXY3E4MlFLckxqYlZaczA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5MTI3NjU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "agenda",


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
