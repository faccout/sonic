/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");

module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const botName = client.user.username; 

      const helpDescription = `
Sonic ♪♪ Help
MORE ABOUT SONIC
Welcome to Sonic ♪♪!
Sonic Player is a versatile and feature-rich music bot designed for Discord servers, offering a seamless and enjoyable listening experience for users. It caters to both casual listeners and advanced users with two distinct modes:

I.Basic Mode
1.Availability: Always active.
2.Command Style: Slash commands only.
3.Features:
Play Music: Users can request songs and playlists using simple slash commands.
Queue Management: Basic queue functionality allows users to manage the order of songs.
Volume Control: Adjust the volume directly through commands.
Playback Controls: Play, pause, skip, and stop music with ease.
Search Capabilities: Find songs, albums, or artists using integrated search commands.

II. Advanced Mode
1.Availability: Accessible from 16:00 AST to 21:00 AST.
2.Command Style: Prefix-based commands with '1.'
3.Features:
Seek Function: Navigate through the song or playlist seamlessly with the ability to jump to specific points in the track.
Music Discovery: Explore new music with integrated discovery tools, making it easy to find and enjoy new songs and artists.
Lyrics Display: View real-time lyrics for your favorite songs, enhancing your listening experience and allowing you to sing along.
Unlimited Queue: Add as many songs as you want to the queue without restrictions, ensuring endless playback options.
No Audio Issues: Enjoy a smooth listening experience with optimized performance, minimizing disruptions and audio problems.
Create Your Own Playlist: Customize your music experience by creating and managing your own playlists, tailored to your preferences.

III. Additional Features
Enhanced Playback Controls: Advanced control options for managing playback efficiently.
User-Friendly Interface: Simple and intuitive command structure designed for easy navigation and use.
High-Quality Streaming: Reliable streaming with high audio quality, ensuring a superior listening experience.

Sonic Player ensures that whether you're enjoying a casual listening session or managing a complex music setup, you have the tools and flexibility you need for an exceptional auditory experience.
      `;

      const embed = new EmbedBuilder()
        .setColor(config.embedColor)
        .setTitle(`${botName} Help`)
        .setThumbnail(client.user.displayAvatarURL()) 
        .setDescription(helpDescription)
        .setFooter({ text: `Sonic Player`, iconURL: client.user.displayAvatarURL() }) 
      

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
