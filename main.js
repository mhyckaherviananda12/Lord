//jika qr tidak bisa di scan silahkan hubungi wa di desk video 
const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   WAMessageProto,
   relayWAMessage,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const fs = require('fs')
const WAConnection = simple.WAConnection(_WAConnection);
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const fetch = require('node-fetch')
const figlet = require("figlet");
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { spawn, exec, execSync } = require("child_process")
const clc = require('chalk')
const cfonts = require('cfonts')
const axios = require("axios")
let path = require('path')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
const kakakhi = '3000'
const enter = '\n'
welcome = setting.auto_welcome
leave = setting.auto_leave
console.log(color('Starting Bot...','aqua'))
require('./Lord.js')
nocache('./Lord.js', module => console.log(`${module} is now updated!`))

const starts = async (alpha = new WAConnection()) => {
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
const mediaxxaaa = await alpha.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
mhan = mediaxxaaa.message["ephemeralMessage"] ? mediaxxaaa.message.ephemeralMessage : mediaxxaaa
//mhan = await alpha.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

alpha.logger.level = 'warn'
    alpha.version = [2, 2143,3] 
    alpha.browserDescription = ["MHYCKA", "Safari", "3.0"];
console.log(color(figlet.textSync('MhyckaHY', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('| LORD-BOT |', 'cyan'), color('Checking database configuration', 'yellow'))
	await sleep(3000)
console.log(color('| LORD-BOT |', 'cyan'), color('Done', 'skyblue'))
await sleep(2000)
	console.log(color('| LORD-BOT |', 'cyan'), color('Connecting to WhatsApp web', 'yellow'))
	await sleep(2000)
	console.log(color('| LORD-BOT |', 'cyan'), color(`Server running on port ${kakakhi}`, 'yellow'))
	await sleep(2000)
	alpha.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
    })
    fs.existsSync('./session.json') && alpha.loadAuthInfo('./session.json')
    console.log(color('| LORD-BOT |', 'cyan'), color('Connected...'))
   
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };
let kl =  'Bot berhasil tersambung dengan WhatsApp anda.Untuk update selengkapnya akan kami info kan lewat pesan ini\nJangan lupa donasi 😅 & support YT ZEEONE OFC'
try {
sendButMessage(`${setting.ownerNumber}@s.whatsapp.net`, kl, 'LordUserbot^4.5.0 | Created By ZeeoneOfc' , [{"buttonId": `tes`,"buttonText": {"displayText": "Okey 😉"},"type": "RESPONSE"}], {})
} catch {
sendButMessage(`${setting.ownerNumber}@s.whatsapp.net`, 'Bot berhasil tersambung dengan WhatsApp anda.', 'Alphabot^11.8.3 | Created By ZeeoneOfc' , [{"buttonId": `tes`,"buttonText": {"displayText": "Okey 😉"},"type": "RESPONSE"}], {})
}    
await alpha.connect({timeoutMs: 30 * 3000})
 fs.writeFileSync('./session.json', JSON.stringify(alpha.base64EncodedAuthInfo(), null, '\t'))
           alpha.on('chat-update', async (message) => {
        require('./Lord.js')(alpha, message)
    })
    
/*alpha.on('group-participants-update', async (anu) => {
		try {
			falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumbnail}`)
}}}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
const mediaxxaaaa = await alpha.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
//mhan = await alpha.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
         const mdata = await alpha.groupMetadata(anu.jid)
		console.log(anu)
		const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const groupMet = await alpha.groupMetadata(anu.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
      memeg = mdata.participants.length;
      num = anu.participants[0];
      let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
      if (welcome){
if (welcome === false) return 
      if (anu.action == "add" && !num.includes(alpha.user.jid)) {
		let v = alpha.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        let p2 = await alpha.getStatus(num)
        let p3 = `${p2? `${p2.status}` : '-'}`
        try {
        pp_user = await alpha.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
        teks = `*Welcome @${num.split('@')[0]}* ${enter}${enter}📛 : _${anu_user}_${enter}💌 : _${p3}_${enter}🔣 : _@${num.split('@')[0]}_${enter}🥉 : _${memeg} Member (s)_${enter}⏰ : _${jamnyy} Indonesian time_${enter}${enter}\`\`\`Hope you like it and don't forget to read the group description\`\`\``;
        buff = await getBuffer(pp_user)
        let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "Welcome 👋"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(mdata.id, `${teks}`, `WhatsApp 🌱 | ${mdata.subject}`,buff, gakloo, {contextInfo: { mentionedJid: [num]}})
								      
      }}
      if (leave){
if (leave === false) return 
  if (anu.action == "remove" && !num.includes(alpha.user.jid)) {
        let w = alpha.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
        pp_user = await alpha.getProfilePicture(num);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
        out = `◪ Goodbye @${num.split('@')[0]}${enter}◪ Leave from group:${enter}${mdata.subject}${enter}│${enter}└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}${enter}GoodBye~~`;
        buff = await getBuffer(pp_user);
        let gaklooo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "Goodbye 🤙"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(mdata.id, `${out}`, `WhatsApp  🌱 | ${mdata.subject}`, buff, gaklooo, {contextInfo: { mentionedJid: [num]}})
        }
      } 
		 if (anu.action == 'promote') {
			const mdata = await alpha.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			try {
				teks = ` *P R O M O T E  D E T E C T E D*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
				let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(mdata.id, `${teks}`, `WhatsApp 🌱 | ${mdata.subject}`,buff, gakloo, {contextInfo: { mentionedJid: [num]}})
								
						} catch {
			teks = ` *P R O M O T E  D E T E C T E D*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: buff, caption : teks, contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : falfa})
			}
		} 
	 if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await alpha.groupMetadata(anu.jid)
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			try {
				teks = ` *D E M O T E  D E T E C T E D*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
				let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(mdata.id, `${teks}`, `WhatsApp 🌱 | ${mdata.subject}`,buff, gakloo, {contextInfo: { mentionedJid: [num]}})
								
						} catch {
			teks = ` *D E M O T E  D E T E C T E D*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: buff, caption:teks,contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
		}
		}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
		
alpha.on('group-update', async (anu) => {
	console.log(anu)
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumbnail}`)}}}
  metdata = await alpha.groupMetadata(anu.jid)
  try {
					ppimg = await alpha.getProfilePicture(anu.jid)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				let buff = await getBuffer(ppimg)
    if(anu.announce == 'false'){
    teks = `*G R O U P  O P E N E D*\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
  try{
  let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(metdata.id, `${teks}`, `WhatsApp 🌱 | ${metdata.id.subject}`,buff, gakloo, {})
								} catch {
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks, quoted: falfa})
}
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `*G R O U P  C L O S E D*${enter}${enter}_Group telah ditutup oleh admin_${enter}_Sekarang hanya admin yang dapat mengirim pesan_`
  try{
  let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(metdata.id, `${teks}`, `WhatsApp 🌱 | ${metdata.id.subject}`,buff, gakloo, {})
								} catch {
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks, quoted: falfa})
}
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `*D E S C R I P T I ON  C H A N G E*${enter}${enter}Deskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}${enter}• Deskripsi Baru : ${anu.desc}`
   try{
  let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(metdata.id, `${teks}`, `WhatsApp 🌱 | ${metdata.id.subject}`,buff, gakloo, {contextInfo: { mentionedJid: [tag]}})
								} catch {
   alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks, contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
}
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ *Group Setting Change* ] -${enter}${enter}Edit Group info telah dibuka untuk member${enter}Sekarang semua member dapat mengedit info Group Ini`
  try{
  let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(metdata.id, `${teks}`, `WhatsApp 🌱 | ${metdata.id.subject}`,buff, gakloo, {})
								} catch {
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks,quoted: falfa})
}
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ *Group Setting Change* ] -${enter}${enter}Edit Group info telah ditutup untuk member${enter}Sekarang hanya admin group yang dapat mengedit info Group Ini`
  try{
  let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(metdata.id, `${teks}`, `WhatsApp 🌱 | ${metdata.id.subject}`,buff, gakloo, {contextInfo: { mentionedJid: [num]}})
								} catch {
    alpha.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : buff, caption : teks,quoted: falfa})
}
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})*/
antidel = setting.anti_delete
alpha.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0] 
alpha.sendMessage(m.key.remoteJid, `*------「 ANTI DELETE 」------*

📛 Name : @${m.participant.split("@")[0]}
📅 Day :  ${week} ${calender}
⏰ Time : ${jam}
🆔 Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

alpha.copyNForward(m.key.remoteJid, m.message)
})
antical = setting.anti_call     
alpha.on('CB:action,,call', async json => {
if (antical === false) return
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${setting.ownername}` + '\n' + `ORG:Creator ${setting.botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${setting.ownerNumber}` + ':+' + `${setting.ownerNumber}` + '\n' + 'END:VCARD'
        alpha.sendMessage(callerId, `*Sorry ${alpha.user.name} can't receive calls.*${enter}*Call = Block!*`, MessageType.text)
        alpha.sendMessage(callerId, { displayname: `${setting.ownername}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creator ${setting.botname}`,body:"",previewType:"PHOTO",thumbnail: fs.readFileSync(`image/${setting.thumbnail}`),sourceUrl:`https://wa.me/${setting.ownerNumber}?text=Assalamualaikum om, buka blokir saya 🐦`}}})
        await sleep(5000)
        await alpha.blockUser(callerId, "add")
        })
isBattre = 'Not Detect' 
isCharge = 'Not Detect' 
alpha.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
}
///
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()