const tmi = require('tmi.js');
require('dotenv').config();
const request = require('request');
let AT;
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
  username: 'username',
  password: 'password'
},
channels: ["Channels"]
};

const client = new tmi.client(options);

client.connect();
client.on('connected', (address, port) => {
  client.say('channel','message');
  setTimeout(()=>{
  client.say('channel','message')
  },2000)
  setTimeout(()=>{
  client.say('channel','message')
  },4000)
  setTimeout(()=>{
  client.say('channel','message')
  },6000)
})

client.on('chat',async(channel,user,message,self)=>{
if(self)return;
var username = user['display-name'];
for(var i=0;i<xqcEmotes.length;++i){
  var emote = xqcEmotes[i]
if(message.includes(emote)&&channel==='#channel'){
checkSubscribed("xqcow",username,(callback)=>{
  if(callback){
    client.action(channel,`MODS BAN ${username} PERMABAN` )

  }
})
return;
}
};

if(blacklist.includes(username))return;
if(username==='username'){
  switch(message){
    case'!cookie':
    setTimeout(()=>{
      client.action(channel,"message")
    },7200000)
    break;
    case'+ed':
    setTimeout(()=>{
      client.action(channel,"message")
    },3600000)
    break;
    case'^hw':
    setTimeout(()=>{
      client.action(channel,"message")
    },1200000)
    break;
  }
};

if(message==='hs ping'){
  client.say(channel,`I'm a bot made by @JustMariusz the prefix is "hs" and I serve to remind him for @ThePositiveBot @HuwoBot and @spergbot02. For more information write "hs commands". veiYes`)
}
if(message.substring(0,6)==='hs ban'&&username==='username'){
  parts=message.split(" ")
  var banuser=parts[2]
  if(!blacklist.includes(banuser)){
  blacklist.push(banuser)
  toJSON()
  client.say(channel,`${banuser} is now banned from me. notkohBleh`)
}}
if(message.substring(0,8)==='hs unban'&&username==='username'){
  parts=message.split(" ")
  var unbanuser=parts[2]
  if(blacklist.includes(unbanuser)){
  blacklist.splice(index,1)
  var index = blacklist.indexOf(unbanuser)
  toJSON()
  client.say(channel,`${unbanuser} is not longer banned from me. notkohPog`)
}
}
if(message.includes("Sip")){
  client.action(channel,`kromiaSip sip~` )
}
if(message.substring(0,7)==='hs tuck'){
var words = message.split(" ")
var user = words[2]
var emote = words[3]
if(words.length===2)
client.say(channel,`Nobody tucked you into bed, so you tucked yourself in kromiaCry` )
if(words.length===3)
client.say(channel,`You tucked ${user} to bed kromiaComfy 👉 🛏` )
if(words.length===4)
client.say(channel,`You tucked ${user} to bed ${emote} 👉 🛏` )
}
if(message==='hs pingme'){
  client.say(channel,`${username} DinkDonk` )
}
if(message==='hs Botsubs'||message==='hs botsubs'){
  let response=await getSubs()
  client.say(channel,`bokabaea is currently subbed to: ${response}` )
}
if(message.substring(0,7)==='hs spam'){
var messageparts = message.split(" ")
var times = messageparts[2]
if(times.search(/^-?\d+$/)!=-1&&times<=20){
var word = message.substring(message.indexOf(times)+times.length,message.length)
for(var i=0;i<times;++i){
  client.say(channel,`${word}`)
}}
}
if(message.substring(0,6)==='hs say'){
  client.say(channel,`${message.substring(7,message.length)}` )
}
if(message==='hs afk'&&username==='username'){
  client.say(channel,`message` )
}
if(message==='pajaDank'&&channel==='#channel'){
    client.say(channel,`miniDank 🎺 doot` )
}
if(message==='miniDank'||message==='pajaM'&&channel==='#channel'){
    client.say(channel,`pajaDank 🎺 doot` )
}
if(message==='hs Animelist'||message==='hs animelist'){
  client.say(channel,`message` )
}
if(message==='JustMariusz'){
  client.say(channel,`${username} stop tagging him. veiGlare` )
}
if(message==='hs commands'){
  client.say(channel,`The commands are ban/unban and afk (only Creator) circle, sky, wave, box, block and pyramid (only for emotes) ping, pingme, say, spam (limit 20), Songs, tuck, GitHub, Botsubs, Animelist, offline chat, ZULUL and cookie. kromiaThumbsup` )
}
if(message==='hs Songs'||message==='hs songs'){
  client.say(channel,`A nice playlist with Twitch meme songs: https://www.youtube.com/playlist?list=PLplxrUEN3mvAiqKFu_iIDv-DYfN-Gt94w AlienPls` )
}
if(message==='hs cookie'){
  client.say(channel,`$give cookie ${username} veiBlush` )
}
if(message==='hs offline chat'){
  client.say(channel,`Wait people are still here? lol thats really weird. i was just gonna click on a vod to watch cuz a friend recommended it and saw you guys still sitting here when the streamer isnt even live.
  Honestly you guys need a life lmfao, sitting in a streamers chat all day wont make you feel better and it wont improve your chances of sleeping with her, not like you had any to begin with lmfao.
  You guys are just so pathetic.`)
}
if(message==='hs ZULUL'){
  client.say(channel,`https://www.twitch.tv/thesupergogo/clip/BraveRudeMeatloafAliens ZULUL` )
}
if(message.substring(0,21)==='A Raid Event at Level'&&username.toLowerCase()==='username'&&channel==='#channel'){
  client.action("channel",`message` )
  client.say("channel",`message` )
}
if(message.substring(0,9)==='hs circle'){
  var second_part=message.substring(10,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${emotes[1]} ${emotes[1]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[1]} ${emotes[0]} ${emotes[1]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[1]} ${emotes[1]}` )
}
if(message.substring(0,7)==='hs wave'){
  var second_part=message.substring(8,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]}` )
}
if(message.substring(0,6)==='hs sky'){
  var second_part=message.substring(7,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]}` )
}
if(message.substring(0,6)==='hs box'){
  var second_part=message.substring(7,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[1]} ${emotes[0]} ${emotes[0]} ${emotes[1]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[1]} ${emotes[0]} ${emotes[0]} ${emotes[1]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀⠀⠀⠀ ⠀ ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]}` )
}
if(message.substring(0,10)==='hs pyramid'){
  var second_part=message.substring(11,message.length)
  var emotes=second_part.split(" ")
  client.say(channel,`${emotes[0]} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${emotes[0]} ${emotes[0]} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${emotes[0]} ${emotes[1]} ${emotes[0]} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[0]} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[0]} ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${emotes[0]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[1]} ${emotes[0]} ⠀⠀⠀⠀⠀⠀⠀⠀⠀ ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]}` )
}
if(message.substring(0,8)==='hs block'){
    var second_part=message.substring(9,message.length)
    var emotes=second_part.split(" ")
    client.say(channel,`${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀⠀⠀⠀ ⠀ ${emotes[0]} ${emotes[0]} ${emotes[0]} ${emotes[0]}` )
};
})
const connect = ()=>{

  setInterval(cookie,7205000)
  setInterval(gib,544000)
  setInterval(sell,3007000)
  setInterval(ed,3606000)
  setInterval(hw,1209000)
}
setTimeout(()=>{
connect()
},2000)
const cookie = ()=>{
  client.say('channel','message');
}
const gib = ()=>{
  client.say('channel','message');
}
const sell = ()=>{
  client.say('channel','message');
}
const ed = ()=>{
  client.say('channel','message');
}
const hw = ()=>{
  client.say('channel','message');
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
