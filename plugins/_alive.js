import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[𝚭𝚵𝚵𝐒𝚮𝚫𝚴 𝚫𝚴𝐒𝚫𝚪𝚰-MD-v5]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *𝚭𝚵𝚵𝐒𝚮𝚫𝚴-MD-v1*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *𝚭𝚵𝚵𝐒𝚮𝚫𝚴 𝚫𝚴𝐒𝚫𝚪𝚰 🇵🇰*
⬡│☂︎           *OWNER:👇🏽*
⬡│☂︎ *wa.me/923111054738*
⬡│☂︎ *Don\'t call owner or you will be*
⬡│☂︎ *Ignored or blocked without*
⬡│☂︎           *warning 🥴😹*
┬│☂︎ *Hehehehe...🤪😸😸*
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Image to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using 𝚭𝚵𝚵𝐒𝚮𝚫𝚴-MD-v1 ✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
