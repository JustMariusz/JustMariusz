const tmi = require('tmi.js');
require('dotenv').config();
const request = require('request');
const channels = require('./channels.json').channels
let AT;
const si = require('systeminformation');
const humanizeDuration = require('humanize-duration')
const fs=require('fs')
var blacklistJSON=fs.readFileSync("./blacklist.json")
var blacklist=JSON.parse(blacklistJSON)
const got = require("got")
console.log(blacklist)
const options = {
  options: {
    debug: true,
},
connection: {
  cluster: 'aws',
  reconnect: true,
},
identity: {
  username: 'name',
  password: 'oauthtoken'
},
channels: []
};

const client = new tmi.client(options);
let cooldown={}
client.connect();
client.on('connected', async(address, port) => {
  await joinChannels()
  client.say('justmariusz','Okayeg gib eg');
  setTimeout(()=>{
  client.say('justmariusz','!cookie')
  },2000)
  setTimeout(()=>{
  client.say('thegoldenfury','+ed')
  },4000)
})

client.on('chat',async(channel,user,message,self)=>{
if(self)return;
var username = user.username;
for(var i=0;i<xqcEmotes.length;++i){
  var emote = xqcEmotes[i]
if(message.includes(emote)&&channel==='#justmariusz'){
checkSubscribed("xqcow",username,(callback)=>{
  if(callback){
    client.action(channel,`MODS BAN ${username} PERMABAN` )

  }
})
return;
}
};

if(blacklist.includes(username))return;
if(username.toLowerCase()==='justmariusz'){
  switch(message){
    case'!cookie':
    setTimeout(()=>{
      client.action(channel,"Get your cookies Mariusz. DinkDonk 🍪")
    },7200000)
    break;
    case'+ed':
    setTimeout(()=>{
      client.action(channel,"Enter the dungeon Mariusz. 🏰")
    },3600000)
    break;
    case'^hw':
    setTimeout(()=>{
      client.action(channel,"Hunt Weebs Mariusz. DatSheffy")
    },1200000)
    break;
  }
};
if(message==='%ping'){
  let uptime = process.uptime().toString().replace(/\.[^.]*$/,"")*1000
  let mem =  Math.round(process. memoryUsage(). heapUsed / 1024 / 1024)
  client.say(channel,`Pong FeelsDankMan 🏓 ppHop 🏓 💻 running for: ${shortenTime(uptime)}! Chat latency: ${await client.ping()*1000}ms! Bot available in ${client.getChannels().length} channels! Running on ${process.platform}! Memory usage: ${mem}mb`)
}
if(message==='%help'){
client.say(channel,`I'm a bot made by @JustMariusz the prefix is "%" and I serve to remind him for @ThePositiveBot @HuwoBot and @spergbot02. For more information write "%commands". :)`)
}
if(message==='%commands'){
  client.say(channel,`Here's a list with all commands: https://github.com/JustMariusz/JustMariusz/blob/main/Commands` )
}
if(message==='@JustMariusz'){
  client.say(channel,`${username} Stop tagging him. 😡` )
}
if(message==='%afk'&&username.toLowerCase()==='justmariusz'){
client.say(channel,`$afk I'm currently offline and I'll be back when Mariusz is again online. pajaDank` )
}
if(message==='%idiot'&&username.toLowerCase()==='justmariusz'){
  client.say(channel,`Kemonomimi's are humans with animal characteristics. Furry's are animals with human charcateristics. 🤓` )
}
if(message==='%Botsubs'||message==='%botsubs'){
let response=await getSubs()
  client.say(channel,`bokabaea is currently subbed to: ${response}` )
}
if(message==='%pingme'){
  client.say(channel,`${username} DinkDonk` )
}
if(message==='%Animelist'||message==='%animelist'){
  client.say(channel,`This is @JustMariusz's Animelist: https://anilist.co/user/JustMariusz/animelist` )
}
if(message.startsWith("%join")&&username.toLowerCase()==='justmariusz'){
  let[,newChannel] = message.split(" ")
  client.join(newChannel)
}
if(message.startsWith("%leave")&&username.toLowerCase()==='justmariusz'){
  let[,newChannel] = message.split(" ")
  client.part(newChannel)
}
if(message==='%Songs'||message==='%songs'){
  client.say(channel,`A nice playlist with Twitch meme songs: https://www.youtube.com/playlist?list=PLplxrUEN3mvAiqKFu_iIDv-DYfN-Gt94w AlienPls` )
}
if(message==='%GitHub'||message==='%github'){
  client.say(channel,`Here's my GitHub profile: https://github.com/JustMariusz/JustMariusz` )
}
if(message==='%Marc'||message==='%marc'&&channel==='#pepegepaul'){
  client.say(channel,`@lini28 https://m.imgur.com/a/Yg2Yl82 DansGame` )
}
if(message==='%Marc2'||message==='%marc2'&&channel==='#pepegepaul'){
  client.say(channel,`@lini28 https://imgur.com/a/owVUO8L pedoBear Clap` )
}
if(message==='%marchatesblackpeople'&&channel==='#pepegepaul'){
  client.say(channel,`@lini28 https://i.imgur.com/yYu5YRX.png cmonbRuh`)
}
if(message==='%Tom'||message==='%tom'&&channel==='#pepegepaul'){
  client.say(channel,`@Th3MC https://imgur.com/a/yUJGryA pedoBear Clap` )
}
if(message==='%Tom2'||message==='%tom2'&&channel==='#pepegepaul'){
  client.say(channel,`@Th3MC https://i.nuuls.com/EPwqi.mp4 real juicer xqcL` )
}
if(message==='%Tom3'||message==='%tom3'&&channel==='#pepegepaul'){
  client.say(channel,`@xQcOW unban @Th3MC now WeirdChamp https://imgur.com/a/8p5oAkv` )
}
if(message==='% ZULUL'){
  client.say(channel,`https://www.twitch.tv/thesupergogo/clip/BraveRudeMeatloafAliens ZULUL` )
}
if(message==='%cookie'){
  client.say(channel,`$give cookie ${username}` )
}
if(message==='pajaDank'&&channel==='#justmariusz'){
    client.say(channel,`miniDank 🎺 doot` )
}
if(message==='miniDank'||message==='pajaM'&&channel==='#justmariusz'){
  client.say(channel,`pajaDank 🎺 doot` )
}
if(message==='%offlinechat'){
  client.say(channel,`Wait people are still here? lol thats really weird. i was just gonna click on a vod to watch cuz a friend recommended it and saw you guys still sitting here when the streamer isnt even live.
  Honestly you guys need a life lmfao, sitting in a streamers chat all day wont make you feel better and it wont improve your chances of sleeping with her, not like you had any to begin with lmfao.
  You guys are just so pathetic.`)
}
if(message==='%whoasked'){
  client.say(channel,`now ᴘʟᴀʏɪɴɢ: Who asked (Feat: Nobody) ─────────── ⚪ ────── ◄◄⠀▐▐⠀►► 𝟸:𝟷𝟾 / 𝟹:𝟻𝟼⠀───○ 🔊` )
}
if(message.substring(0,21)==='A Raid Event at Level'&&username.toLowerCase()==='huwobot'&&channel==='#thegoldenfury'){
  client.action("thegoldenfury",`A Raid has started join now Mariusz. peepoChat` )
  setTimeout(()=>{
  client.say("thegoldenfury",`+join peepoChat` )
},3000)
}
if(message.substring(0,4)==='%ban'&&username.toLowerCase()==='JustMariusz'){
  parts=message.split(" ")
  var banuser=parts[2].toLowerCase()
  if(!blacklist.includes(banuser)){
  blacklist.push(banuser)
  toJSON()
  client.say(channel,`${banuser} is now banned from me.`)
}}
if(message.substring(0,6)==='%unban'&&username.toLowerCase()==='JustMariusz'){
  parts=message.split(" ")
  var unbanuser=parts[2].toLowerCase()
  if(blacklist.includes(unbanuser)){
  var index = blacklist.indexOf(unbanuser)
  blacklist.splice(index,1)
  toJSON()
  client.say(channel,`${unbanuser} is not longer banned from me.`)
}
}

if(message.substring(0,5)==='%spam'){
var messageparts = message.split(" ")
var times = messageparts[1]
if(times.search(/^-?\d+$/)!=-1&&times<=20){
var word = message.substring(message.indexOf(times)+times.length,message.length)
for(var i=0;i<times;++i){
  client.say(channel,`${word}`)
}}
}
if(message.substring(0,4)==='%say'){
  client.say(channel,`👥 ${message.substring(5,message.length)}` )
}
if(message.substring(0,5)==='%tuck'){
var words = message.split(" ")
var user = words[1]
var emote = words[2]
if(words.length===1)
client.say(channel,`Nobody tucked you into bed, so you tucked yourself in PepeHands` )
if(words.length===2)
client.say(channel,`You tucked ${user} to bed okayL 👉 🛏` )
if(words.length===3)
client.say(channel,`You tucked ${user} to bed ${emote} 👉 🛏` )
}
var emotes=message.split(" ")
let firstEmote = emotes[1]
let secondEmote = emotes[2]
if(secondEmote===undefined)secondEmote=firstEmote
if(message.substring(0,7)==='%circle'){
  var second_part=message.substring(8,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${secondEmote} ${secondEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${secondEmote} ${firstEmote} ${secondEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${secondEmote} ${secondEmote}` )
}
if(message.substring(0,5)==='%wave'){
  var second_part=message.substring(6,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote}` )
}
if(message.substring(0,4)==='%sky'){
  var second_part=message.substring(5,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote}` )
}
if(message.substring(0,4)==='%box'){
  var second_part=message.substring(5,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote} ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ${secondEmote} ${firstEmote} ${firstEmote} ${secondEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${secondEmote} ${firstEmote} ${firstEmote} ${secondEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀⠀⠀⠀ ⠀ ${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote}` )
}
if(message.substring(0,9)==='%triangle'){
  var second_part=message.substring(10,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${firstEmote} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${firstEmote} ${firstEmote} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${firstEmote} ${secondEmote} ${firstEmote} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${firstEmote} ${secondEmote} ${secondEmote} ${firstEmote} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${firstEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${firstEmote} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${firstEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${secondEmote} ${firstEmote} ⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote}` )
}
if(message.substring(0,7)==='%square'){
    var second_part=message.substring(8,message.length)
    var emotes=second_part.split(" ")
    client.say(channel,`${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀⠀⠀⠀ ⠀ ${firstEmote} ${firstEmote} ${firstEmote} ${firstEmote}` )
}})
const connect = ()=>{

  setInterval(cookie,7260000)
  setInterval(gib,627600)
  setInterval(sell,6854400)
  setInterval(ed,3660000)

}
setTimeout(()=>{
connect()
},2000)
const cookie = ()=>{
  client.say('justmariusz','!cookie');
}
const gib = ()=>{
  client.say('justmariusz','Okayeg gib eg');
}
const sell = ()=>{
  client.say('justmariusz','Okayeg sell?');
}
const ed = ()=>{
  client.say('thegoldenfury','+ed');
}
const toJSON = ()=>{
    fs.writeFile("./blacklist.json", JSON.stringify(blacklist), function writeJSON(err) {
        if (err) return console.log(err);
    });
    setTimeout(()=>{
    blacklistJSON = fs.readFileSync("./blacklist.json");
    blacklist= JSON.parse(blacklistJSON);
  },1000)

}
const shortenTime = time => {
	time = humanizeDuration(time)
	return time
		.replace(/years?/, 'y')
		.replace(/mont%?/, 'm')
		.replace(/weeks?/, 'w')
		.replace(/days?/, 'd')
		.replace(/hours?/, 'h')
		.replace(/minutes?/, 'min')
		.replace(/seconds?/, 's')
		.replace(/\s/g, '')
		.replace(/,/g, ' ')
}
const getEmotes = async()=>{
  let response = await got("https://api.twitchemotes.com/api/v4/channels/71092938")
  let data = JSON.parse(response.body)
  for(var i = 0;i<data.emotes.length;++i){
    xqcEmotes.push(data.emotes[i].code)
  }

}
const checkSubscribed = async(channel,username,callback)=>{
  let response = await got(`https://api.ivr.fi/twitch/subage/${username}/${channel}`)
    let data = JSON.parse(response.body)
    callback(data.subscribed)
}
getEmotes()
var xqcEmotes = []

async function getSubs(callback){
  let message = "";
  const options={
      url:process.env.GET_EMOTES,
      method:'GET',
      headers:{
          'Client-ID':process.env.CLIENT_ID,
          'Authorization': 'OAuth mntgft00iioyuxnpnskz1mkw9jhzgg' ,
          'Accept':'application/vnd.twitchtv.v5+json'
      }
  };
  let response = await promisifiedRequest(options)
    let parsedbody = JSON.parse(response.body)
     for(let[set,content]of Object.entries(parsedbody.emoticon_sets)){
         await getStreamer((callback)=>{
          if(callback.length!=0&&callback[0].channel_name!='Twitch'){
            let streamer = callback[0].channel_name
            message+=`${streamer} ${content[Math.floor(Math.random()*content.length)].code} `;
          }
        },set)
    }
  return message;
}
async function getStreamer(callback,set){
  let response =await got(`${process.env.GET_STREAMER}${set}`)
  callback(JSON.parse(response.body))
}
const promisifiedRequest = (options) =>{
  return new Promise((resolve,reject) => {
    request(options, (error, response, body) => {
      if (response) {
        return resolve(response);
      }
      if (error) {
        return reject(error);
      }
    });
  });
};
const joinChannels = async() => {
for await (let[name,{joined,allowed}] of Object.entries(channels)){
if(joined){
  client.join(name)
await timer (150)
}
}
}
const timer = ms => new Promise (res=>setTimeout(res,ms))
