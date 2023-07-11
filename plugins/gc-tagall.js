let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐦𝐚𝐫𝐭𝐮.𝐛𝐨𝐭: ${pesan}`
let teks = `𝐀𝐩𝐚𝐫𝐞𝐳𝐜𝐚𝐧 𝐩𝐥𝐚𝐧𝐭𝐚𝐬-𝐌𝐚𝐫𝐭𝐮 𝐁𝐨𝐭 \n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🦊 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐌𝐚𝐫𝐭𝐮 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
