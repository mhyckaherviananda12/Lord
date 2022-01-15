exports.allmenu = (namabot, pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`Hello ${pushname}🤗 Saya ${namabot}

📛 Nama : ${pushname} 
🆔 Nomor : @${sender.split("@")[0]} 
📊 Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
🎁 Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
💳 Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
💹 Balance : ${getBalance(sender, balance)}


ℒ⃝🤴🏻 *Owner-Menu*
${simbolnya} ${prefix}on
${simbolnya} ${prefix}off [alasan] 
${simbolnya} ${prefix}bc [text]
${simbolnya} ${prefix}bcimage [reply foto]
${simbolnya} ${prefix}ban @tag
${simbolnya} ${prefix}unban @tag
${simbolnya} ${prefix}block @tag
${simbolnya} ${prefix}unblock @tag
${simbolnya} ${prefix}setbiobot [text]
${simbolnya} ${prefix}setnamabot [text]
${simbolnya} ${prefix}resetlimit
${simbolnya} ${prefix}prem add @tag waktu
${simbolnya} ${prefix}prem del
${simbolnya} ${prefix}sewa add waktu
${simbolnya} ${prefix}sewa del
${simbolnya} ${prefix}setcmd [reply stiker]
${simbolnya} ${prefix}delcmd [reply stiker]
${simbolnya} ${prefix}listcmd
${simbolnya} ${prefix}auto [ketik/vn]
${simbolnya}  > [eval]
${simbolnya}  => [async]
${simbolnya}  $ [cmd termux]

ℒ⃝🗃️ *Download-Menu*
${simbolnya} ${prefix}play [query]
${simbolnya} ${prefix}ytmp3 [url]
${simbolnya} ${prefix}ytmp4 [url]
${simbolnya} ${prefix}video [query]
${simbolnya} ${prefix}igdl [url]
${simbolnya} ${prefix}igstory [username]
${simbolnya} ${prefix}igphoto [url]
${simbolnya} ${prefix}igreel [url]
${simbolnya} ${prefix}igvideo [url]
${simbolnya} ${prefix}igtv [url]
${simbolnya} ${prefix}tiktok [url]
${simbolnya} ${prefix}tiktokaudio [url]
${simbolnya} ${prefix}tiktoknowm [url]
${simbolnya} ${prefix}mediafire [url]

ℒ⃝🖼️ *Convert-Menu*
${simbolnya} ${prefix}sticker [tag foto/vid]
${simbolnya} ${prefix}swm [text|text2]
${simbolnya} ${prefix}take [text|text2]
${simbolnya} ${prefix}attp [text]
${simbolnya} ${prefix}semoji 🐦
${simbolnya} ${prefix}toimg [reply stiker]
${simbolnya} ${prefix}tourl [reply foto/vid]
${simbolnya} ${prefix}tomp4 [reply stiker gif]
${simbolnya} ${prefix}togif [reply stiker gif]
${simbolnya} ${prefix}tomp3 [reply vid]
${simbolnya} ${prefix}tovn [reply music]
${simbolnya} ${prefix}tinyurl [link]
${simbolnya} ${prefix}kontak 62***|nama
${simbolnya} ${prefix}bass  [reply music]
${simbolnya} ${prefix}slow  [reply music]
${simbolnya} ${prefix}fast [reply music]
${simbolnya} ${prefix}robot [reply music]
${simbolnya} ${prefix}detikvn [durasi]
${simbolnya} ${prefix}tupai [reply music]
${simbolnya} ${prefix}vibrato [reply music]

ℒ⃝🎨 *Editor-Menu*
${simbolnya} ${prefix}memegen teks atas | teks bawah
${simbolnya} ${prefix}stickmeme teks

ℒ⃝🔍 *Search-Menu*
${simbolnya} ${prefix}pinterest [query]
${simbolnya} ${prefix}wikipedia [query]
${simbolnya} ${prefix}playstore [query]
${simbolnya} ${prefix}yts [query]

ℒ⃝🗂️ *Storage-Menu*
${simbolnya} ${prefix}addrespon [pesan|respon]
${simbolnya} ${prefix}delrespon [pesan]
${simbolnya} ${prefix}listrespon
${simbolnya} ${prefix}listbadword
${simbolnya} ${prefix}addbadword [text]
${simbolnya} ${prefix}delbadword [text]
${simbolnya} ${prefix}addvn [text]
${simbolnya} ${prefix}listvn
${simbolnya} ${prefix}delvn [text]
${simbolnya} ${prefix}addimage [text]
${simbolnya} ${prefix}listimage
${simbolnya} ${prefix}delimage [text]
${simbolnya} ${prefix}addvideo [text]
${simbolnya} ${prefix}listvideo 
${simbolnya} ${prefix}delvideo [text]
${simbolnya} ${prefix}addsticker [text]
${simbolnya} ${prefix}liststicker
${simbolnya} ${prefix}delstik [text]

ℒ⃝🌀 *Fun-Menu*
${simbolnya} ${prefix}slot
${simbolnya} ${prefix}truth
${simbolnya} ${prefix}dare
${simbolnya} ${prefix}voting @tag | alasan | waktu
${simbolnya} ${prefix}delvote
	vote
	devote
   
ℒ⃝🌐 *Group-Menu*
${simbolnya} ${prefix}sider [reply pesan bot]
${simbolnya} ${prefix}afk [reason]
${simbolnya} ${prefix}hidetag [text]
${simbolnya} ${prefix}notif [text]
${simbolnya} ${prefix}jadian
${simbolnya} ${prefix}listonline
${simbolnya} ${prefix}tagall
${simbolnya} ${prefix}ceksewa
${simbolnya} ${prefix}add 628XX
${simbolnya} ${prefix}kick @tag
${simbolnya} ${prefix}promote @tag
${simbolnya} ${prefix}demote @tag
${simbolnya} ${prefix}resetlink
${simbolnya} ${prefix}linkgc
${simbolnya} ${prefix}setdesc [text]
${simbolnya} ${prefix}setnamagrup [text]
${simbolnya} ${prefix}grup [open/close]
${simbolnya} ${prefix}antibadword [on/off]
${simbolnya} ${prefix}welcome [on/off]
${simbolnya} ${prefix}antilink [on/off]
${simbolnya} ${prefix}antitroli [on/off]


ℒ⃝📊 *Limit-Menu*
${simbolnya} ${prefix}topbalance
${simbolnya} ${prefix}toplimit
${simbolnya} ${prefix}limit
${simbolnya} ${prefix}level
${simbolnya} ${prefix}balance
${simbolnya} ${prefix}buylimit [nominal]
${simbolnya} ${prefix}giftlimit @tag | nominal
${simbolnya} ${prefix}buyprem [need 1k limit]
   
ℒ⃝🎨 *Maker-Menu*
${simbolnya} ${prefix}nuliskanan [text]
${simbolnya} ${prefix}nuliskiri [text]
${simbolnya} ${prefix}foliokanan [text]
${simbolnya} ${prefix}foliokiri [text]

ℒ⃝🏷️ *Others-Menu*
${simbolnya} ${prefix}pantun
${simbolnya} ${prefix}faktaunik
${simbolnya} ${prefix}donasi
${simbolnya} ${prefix}nulis
${simbolnya} ${prefix}getnumber [reply user]
${simbolnya} ${prefix}getpic @tag
${simbolnya} ${prefix}wame 
${simbolnya} ${prefix}towame`
}
