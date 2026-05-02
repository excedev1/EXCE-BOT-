async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our WhatsApp Channel",
                    body: " 𝐌ꝛ 𝐄𝐗𝐂𝐄 𝑫𝑬𝑽 𝑿 ⁹⁹⁹•-͢ ",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029Vb80JJQGOj9mO0kLSh0E`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;
