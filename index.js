// Token or password to edit the bot

const token = 'NzE5NDQ4OTE2MzE1MzQwOTAw.Xt3l-A.XW15hgF66863q56fWaF8cUDP_0o';

// Get the info needed

const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();
const cheerio = require('cheerio');
const request = require('request');

// See if bot works

bot.on('ready', () => {
    console.log('Surprisingly I work');
 
})

// Command: Astolfo images

const PREFIX = '!';
 
bot.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'astolfo':
        image(message);
 
        break;
    }
 
});
 
function image(message){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "astolfo",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 
 
}

// Command: Reply to messages
bot.on('message', msg=>{
    if(msg.content ===  "if htis woirks i am gonna cry"){
        msg.reply('bot not works'); 
    }

    if(msg.content ===  "bot not works"){
        msg.reply('if htis woirks i am gonna cry'); 
    }

    if(msg.content ===  "bot you are gay"){
        msg.reply('how about you go and kill yourself u idot'); 
    }

    if(msg.content ===  "is Jai gay?"){
        msg.reply('ofc he is why even ask'); 
    }

    if(msg.content ===  "very toxic"){
        msg.reply('at least i dont say the n word'); 
    }

    if(msg.content ===  "who said the n word?"){
        msg.reply('ninja said the n word'); 
    }

    if(msg.content ===  "info"){
        msg.reply('i am behind you right now (version 1.0.8)'); 
    }

    if(msg.content ===  "how kind am i?"){
        msg.reply('error kindness not found pls kys'); 
    }

    if(msg.content ===  "kys"){
        msg.reply('pls be kind to your peers you peice of shit'); 
    }

    if(msg.content.includes('anime')) {
        msg.reply('go away you weeb');
    }

    if(msg.content.includes('my')) {
        msg.reply('Our');
    }

    if(msg.content.includes('kys')) {
        msg.reply('i dont think saying kill yourself is very nice would you want to correct your statement?');
    }

    if(msg.content.includes('idk')) {
        msg.reply('dont use short forms it wont help you improve your english');
    }

    if(msg.content.includes('idc')) {
        msg.reply('dont use short forms it wont help you improve your english');
    }

    if(msg.content.includes('smh')) {
        msg.reply('dont use short forms it wont help you improve your english');
    }

    if(msg.content.includes('jai')) {
        msg.reply('did someone say Jai?');
    }

    if(msg.content.includes('owen')) {
        msg.reply('dont you mean OwOwen');
    }

    if(msg.content.includes('gay')) {
        msg.reply('i dont think it is very nice to say that');
    }

    if(msg.content.includes('ak ')) {
        msg.reply('The AK-47, officially known as the Avtomat Kalashnikova (Russian: Автома́т Кала́шникова, tr. Avtomát Kaláshnikova, lit. Kalashnikov’s automatic device also known as the Kalashnikov and AK, is a gas-operated, 7.62×39mm assault rifle, developed in the Soviet Union by Mikhail Kalashnikov. It is the originating firearm of the Kalashnikov rifle (or "AK") family. 47 refers to the year it was finished.');
    }

    if(msg.content.includes('U ')) {
        msg.reply('Not even full word');
    }

    if(msg.content.includes('lmao')) {
        msg.reply('saying lmao does not make something funny');
    }

    if(msg.content.includes('owo')) {
        msg.reply('go away furry');
    }

    if(msg.content.includes('uwu')) {
        msg.reply('go away furry');
    }

    if(msg.content.includes('dont give claire admin')) {
        msg.reply('dont give claire admin');
    }

    if(msg.content.includes('dont give claire admin')) {
        msg.reply('dont give claire admin');
    }

    // Command: Spam something
    if(msg.content.includes('hit or miss')) {
        msg.reply('hit or miss');
    }

    if(msg.content.includes('somethinbg')) {
        msg.reply('sometrhh');
    }
	//
    // Command: Images
    if(msg.content.includes('my')) {
        msg.reply('i dont think that is very communist of you, you will now be sent to the Gulags. GLHF', {files: ['./images/commie.png']});
    }

    if(msg.content.includes('hitler')) {
        msg.reply('That sounds abit nazi like', {files: ['./images/nazi.png']});
    }

    if(msg.content.includes('nazi')) {
        msg.reply('That sounds abit Nazi like', {files: ['./images/nazi.png']});
    }

    if(msg.content.includes('kkk')) {
        msg.reply('Thats abit racist', {files: ['./images/kkk.png']});
    }

    if(msg.content.includes('I')) {
        msg.reply('i dont think that is very communist of you, you will now be sent to the Gulags. GLHF', {files: ['./images/commie.png']});
    }

    if(msg.content.includes('mine')) {
        msg.reply('i dont think that is very communist of you, you will now be sent to the Gulags. GLHF', {files: ['./images/commie.png']});
    }

    if(msg.content.includes('me')) {
        msg.reply('i dont think that is very communist of you, you will now be sent to the Gulags. GLHF', {files: ['./images/commie.png']});
    }

    if(msg.content.includes('our')) {
        msg.reply('Good job comrade', {files: ['./images/commie.png']});
    }

    if(msg.content.includes('ours')) {
        msg.reply('Good job comrade', {files: ['./images/commie.png']});
    }

    if(msg.content.includes('salakau')) {
        msg.reply('join this gang it is fun', {files: ['./images/sala.jpg']});
    }

    if(msg.content.includes('allahhu')) {
        msg.reply('kobe', {files: ['./images/boomer.jpg']});
    }

    if(msg.content.includes('allah')) {
        msg.reply('kobe', {files: ['./images/boomer.jpg']});
    }

    if(msg.content.includes('akbar')) {
        msg.reply('kobe', {files: ['./images/boomer.jpg']});
    }
})

bot.login(token);
