const Settings = require("./bot-settings.json");
const Ranks = require("./equipment.json");
const Discord = require("discord.js");
const SourceQuery = require("sourcequery");



const prefix = Settings.prefix;
const token = process.env.token;

const bot = new Discord.Client({disbledEveryone: true});
const disbut = require('discord-buttons');
disbut(bot);







var Activities = [
	"you from TOC",
	"you...",
	"Motus in Hawaii",
	"DEVGRU train",
]



const motusID = "280313289857171456"

var SQ = new SourceQuery(1000); // 1000ms timeout
SQ.open(Settings.IP, Settings.Port);



function FormatTime(Seconds){
	var hours = Math.floor(Seconds / 60 / 60);
	var minutes = Math.floor(Seconds / 60) - (hours * 60);
	return hours+"h : "+minutes+"m"
}




function voicechannelupdate(){
    //Server status query
	    
	    	   SQ.getInfo(function(err, info){
	const mapcount = bot.channels.cache.get("925920675162644530");
	const infocount = bot.channels.cache.get("925920654660866089");
		   


      mapcount.setName("Location: " + info.map);
      infocount.setName("Personnel: " + info.players);
		   
	  });
	    
	    
};


	var fuckofftable = [
		"Who are you? Oh, the individual who doesn't have access to this command.",
		"Fuck off.",
		"Aren't you supposed to be on a mission?",
		"https://youtu.be/saiDrx06-fI",
	]



	 //const guild = bot.guilds.get("886947105694961705");


bot.on("ready", async message => {
	
	console.log(`SOCOM AI ${bot.user.username} is online. Welcome Motoessss my brudda!`);
	//bot.setInterval(voicechannelupdate,30000);

  /* setInterval(function() {
	   SQ.getInfo(function(err, info){
	const mapcount = bot.channels.cache.get("925407951404015636");
	const infocount = bot.channels.cache.get("925408183143522384");
		   


      mapcount.setName("Location: " + info.map);
      infocount.setName("Personnel: " + info.players);
		   
	  })
   }, 1000)	*/
	
	
	
	/*
	const mapcount = bot.channels.cache.get("925407951404015636");
	const infocount = bot.channels.cache.get("925408183143522384");

	setInterval(function(){
		
	   SQ.getInfo(function(err, info){

      mapcount.setName("Location: " + info.map);
      infocount.setName("Personnel: " + info.players);
		   
	  })
			
}, 3000);	*/
	
	
	setInterval(() => {
		
        const index = Math.floor(Math.random() * (Activities.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        
		bot.user.setActivity(Activities[index], { type: "WATCHING"}); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000)
	
	
	

	

});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type  === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0].toLowerCase();
	let args = messageArray.slice(1);
	
	
	  //let args = message.content.slice(Settings.prefix.length).trim().split(/ +/g);
 	 //const command = args.shift().toLowerCase();
	
	if(!command.startsWith(prefix)) return;
	
		// if (message.channel.id !== Settings.Channel && message.channel.id !== Settings.ChannelTwo){ 
			// if(!message.content.includes(`${prefix}qwertyuiopasdfghjklzxcvbnm`))
			// Command not in the right channel.
		// message.channel.send(`Only use the bot commands in: <#${Settings.Channel}>.`);
		// return;
	
		// }

	


	
	


	
	

	if(command === `${prefix}help`){ // All the bot commands.
		const Embed = new Discord.MessageEmbed()
    		.setTitle("Bot Commands")
    		.setColor('#000000')
    		.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    		.addField(`${prefix}Help`,"Info on all the available commands.")
		.addField(`${prefix}Adminhelp`,"Info on all the available admin commands. (Must be SOCOM Director or Mission handler.)")
		.addField(`${prefix}Info`,"Get the HaloRPs server info.")
		.addField(`${prefix}Suggest`,"Give out suggestions/feedback relating to the AI/Bot or SOCOM.")
		.addField(`${prefix}Packages`,"The active greenlit operation packages.")
		.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
    	message.channel.send(Embed);

	}


	if(command === `${prefix}suggest`){
	
//if (!args[1]) return message.channel.send('Proper Usage: `!suggest <suggestion>(Atleast two words in the suggestion is required)`')



    //let sugchannel = message.guild.channels.find(`name`, "motus-center-suggestions")
	//const sugchannel = message.guild.channels.cache.find(c => c.name === 'motus-center-suggestions')
    
    if(!args.length) {
      return message.channel.send("Use words you idiot.")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions.")
    }
                                                    
    
    let embed = new Discord.MessageEmbed()
	.setAuthor("Suggestion by:", message.author.avatarURL())
    	.setDescription("<@" + `${message.member.user.id}` + ">")
 	.addField("Suggestion:", ">> **" + args.join(' ') + "**")
	.setColor('#000000')
	.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png')
	.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    }).catch(err => console.log(err))
    

    
    message.reply("your suggestion was sent. Check <#" + channel + ">." )
    
  };
	
	
	
	  if(command === `${prefix}adminsay`) {
		  
	if(message.author.id === motusID) {

  const Embed = new Discord.MessageEmbed()
	  		.setColor("#000000")
			.setDescription(args.join(" "))
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
	  
	  
		message.delete().catch(O_o=>{});
		
		message.channel.send(Embed)
	}

};
	
	
	
	
			  if(command === `${prefix}packages`) {
	
  const Embed = new Discord.MessageEmbed()
	  		.setColor("#000000")
  			.setDescription("Operation Packages.")
			.addField("Tier Two", "!tier2package")
  			.addField("Tier One", "!tier1package")
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
	  
		
		message.channel.send(Embed)


};
	
	
		
			  if(command === `${prefix}tier2package`) {
				  
if(message.member.roles.cache.some(r=>["SOCOM Director", "SOCOM Mission Handler", "Tier Two"].includes(r.name)) ) {
	
	
				  
	
  const Embed = new Discord.MessageEmbed()
	  		.setColor("#000000")
                        .setTitle("Available Tier Two Operation Packages")
                        .addField("Operation: Tucked Tails [12/31/53 - Not Completed Yet]", "https://docs.google.com/presentation/d/1DnlB6Rau1VWA4Zw2Nv7LJk4wgfGj2VTxtNlZ4xbO79Q/edit#slide=id.g10b3c519dea_2_3")
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
	  
		
		message.author.send(Embed)
		message.channel.send("Package has been sent, check your datapad.")
	} else {
	
	message.channel.send(fuckofftable[Math.floor(Math.random() * fuckofftable.length).toString(4)])
	}

};

	
	
	/*
	
	if(command === `${prefix}ssattier1packages`) {
	
  const Embed = new Discord.MessageEmbed()
	  		.setColor("#000000")
  			.setTitle("Available Tier One Operation Packages")
  			.addField("Operation Hornet Sting [04/03/21 - Not Completed Yet]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing" + " | " + "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
    			.addField("Operation Ding Bing [11/12/23 - Not Completed Yet]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
  			.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
  			.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
.addField("Operation Fing Shaling [03/01/24 - 05/02/24]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)

  			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
	  
		
		message.author.send(Embed)


}	*/	
	
	
	
	  if(command === `${prefix}tier1package`) {
				
if(message.member.roles.cache.some(r=>["SOCOM Director", "SOCOM Mission Handler", "Tier One"].includes(r.name)) ) {
	

	
	
  const Embed = new Discord.MessageEmbed()
	  		.setColor("#000000")
			.addField("Operation Hornet Sting [04/03/21 - Not Completed Yet]", "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing" + " || " + "https://docs.google.com/presentation/d/1UaK34FonlXeW3y8IPmxppu7L1kJyTKhUYRM94lJ3g64/edit?usp=sharing", true)
			.addField("Operation Head Popper [01/14/22 - Not Completed Yet]", "Please refer to Operation: Head Popper documentation in proper channels, thank you.", true)
			.addField("Operation Fake Rental [01/11/22 - Not Completed Yet]", "https://docs.google.com/presentation/d/10JG9ZJMkYWO3bzGzg8TwXAht2MTS7rJNLORS61QSwrA/edit#slide=id.g10099bf9eb0_0_139" + " || " + "Possible connection to other high risk operations, it seems this'll be a big one. - Stevens", true)
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
	  
		
		message.author.send(Embed)
		message.channel.send("Package has been sent, check your datapad.")
	
		} else {
	
	message.channel.send(fuckofftable[Math.floor(Math.random() * fuckofftable.length).toString(4)])
	}

						  
						  

};
	
	
	
	
		  if(command === `${prefix}dirsayembed`) {
		  
if(message.member.roles.cache.some(r=>["SOCOM Director", "SOCOM Mission Handler"].includes(r.name)) ) {

  const Embed = new Discord.MessageEmbed()
	  		.setColor("#000000")
			.setDescription(args.join(" "))
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
	  
	  
		message.delete().catch(O_o=>{});
		
		message.channel.send(Embed)
	}

};
	
	
	

	
	
	
	
	if(command === `${prefix}adminhelp`) {

	if(!message.member.roles.cache.some(r=>["SOCOM Director", "SOCOM Mission Handler"].includes(r.name)) ) return message.channel.send(fuckofftable[Math.floor(Math.random() * fuckofftable.length).toString(4)])
	
		message.channel.send("Package has been sent, check your datapad.")
	
	
					const Embed = new Discord.MessageEmbed()
					.setTitle("Package: Admin List of Commands")
	    			.setColor('#000000')
	    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
	    			.addField("!dirsay", "Makes the bot say stuff of your choosing.")
				.addField("!dirsayembed", "Makes the bot say stuff of your choosing BUT in an embed styled message.")
	    							
				message.author.send(Embed)


};
	
	
	
	
	
	
			let motusowner = bot.users.fetch('280313289857171456');
motusowner.then(function(result1) {
    var imgURL = result1.displayAvatarURL();
});
	
	
	
		  if(command === `${prefix}update`) {
		  
	if(message.author.id === motusID) {
		
		


  const Embed = new Discord.MessageEmbed()
  			.setTitle("Updates")
	  		.setColor("RANDOM")
			.setDescription(">> **" + args.join(" ") + "**")
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter("Made by !Motoess#0001", bot.guilds.resolve("922022672316108820").members.resolve("280313289857171456").user.displayAvatarURL())
	  		.setTimestamp()
	  
		message.delete().catch(O_o=>{});
		
		message.channel.send(Embed).then(m => {
      m.react("🛠")
    }).catch(err => console.log(err))
		
	}

};
	
	
	
	
		  if(command === `${prefix}dirsay`) {
if(message.member.roles.cache.some(r=>["SOCOM Director", "SOCOM Mission Handler"].includes(r.name)) ) {


		message.delete().catch(O_o=>{});
		
		message.channel.send(args.join(" "))
    }
  };
	
	
	
	
	  if(command === `${prefix}say`) {
    if(message.author.id === motusID) {

		message.delete().catch(O_o=>{});
		
		message.channel.send(args.join(" "))
    }
  };
	
	
/*
		if(command == `${prefix}oni`){

			const Embed = new Discord.MessageEmbed()
    		    .setTitle("ONI Professionalism Contract")
			.setDescription("It is a contract that binds ONI Agents to specific rules in order to operate accordingly.")
    			.setColor('#000000')
    			.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
    			.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
			
let embutton = new disbut.MessageButton()
    .setLabel("Contract")
    .setStyle("url")
	.setEmoji("771851512922112032")
    .setURL("https://docs.google.com/document/d/19jgosANJYB3hiGAZGmLfvsqr648fkROReMRkbFQfmoE/edit?usp=sharing")


message.channel.send("",{
    component: embutton,
    embed: Embed
});

		};*/
	
	if(command === `${prefix}info`){ // Server Info
		SQ.getInfo(function(err, info){
    		const Embed = new Discord.MessageEmbed()
    		    .setTitle(info.name)
    			.setColor('#000000')
    			.addField('Location',info.map, true)
    			.addField('Personnel available', info.players +"/"+ info.maxplayers, true)
    		.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
		.setFooter(Settings.IP+":"+Settings.Port, 'https://revivalservers.com/home/assets/media/logos/main.png');
			
                let embutton = new disbut.MessageButton()
    .setLabel("Join the fight!")
    .setStyle("url")
	.setEmoji("925063114888720414")
    .setURL("https://tinyurl.com/rssocom")


message.channel.send("",{
    component: embutton,
    embed: Embed

		});
	});

		

	
	

	//if(command === `${prefix}suggest`) {

	
//if (!args[1]) return message.channel.send('')
		
	//message.channel.send('Your suggestion has been sent, Motus appreciates the help.')};


	
			

	//if(command === `${prefix}targets`) {
	
	//if(!message.member.roles.cache.some(r=>["Special Tactical Reserve for Internal Key Emergencies", "Ø | SPARTANS"].includes(r.name)) ) 
		//return message.channel.send("You do not have the clearance required.")
		
		//const Embed = new Discord.MessageEmbed()
		//.setTitle("Current STRIKE Targets:")
		//.setDescription("``" + args.join(' ') + "``")
		//.setColor('#000000')
	    //	.setThumbnail('https://revivalservers.com/home/assets/media/logos/main.png')
		
		//    let sugchannel = message.guild.channels.find(`name`, "darkrp-suggestions")
		 //   if(!sugchannel) return message.channel.send("Can't find darkrp-suggestions channel")

    		//	sugchannel.send(Embed)
	//};
	
	



}});
bot.login(token).catch(err => console.log(err));
//bot.login(Settings.token);
