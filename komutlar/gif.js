const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/HbkT5F5CiRD3O/giphy.gif", "https://media.giphy.com/media/10sDMjEoL7cAOA/giphy.gif", "https://media.giphy.com/media/xT39D7ubkIUIrgX7JS/giphy.gif", "https://media.giphy.com/media/kRWFIgO75okHm/giphy.gif", "https://media.giphy.com/media/TlK63Er4gKHILXzNeA8/giphy.gif", "https://media.giphy.com/media/14smAwp2uHM3Di/giphy.gif", "https://media.giphy.com/media/VPtakcmZS6z5K/giphy.gif", "https://media.giphy.com/media/gdKAVlnm3bmKI/giphy.gif", "https://media.giphy.com/media/VgIums4vgV4iY/giphy.gif", "https://media.giphy.com/media/l4EoX23aHCEIVlcTm/giphy.gif", "https://media.giphy.com/media/xT39CTnUseDauWbrRS/giphy.gif", "https://media.giphy.com/media/roAfEu8tdNYe4/giphy.gif", "https://media.giphy.com/media/l4Ep6mu0EsZlneBs4/giphy.gif", "https://media.giphy.com/media/g9x6SOnpJ7Mxa/giphy.gif", "https://media.giphy.com/media/RptlNBj3wJMbu/giphy.gif" , "https://media.giphy.com/media/l0IyhdVAFdKe5WuQM/giphy.gif",
    "https://media.giphy.com/media/12NEcwbHHZC7qo/giphy.gif", "https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif", "https://media.giphy.com/media/yEaFGPve9gv84/giphy.gif", "https://media.giphy.com/media/yDm4Ry6XU77Py/giphy.gif", "https://media.giphy.com/media/FFED4NpS8Mtzi/giphy.gif", "https://media.giphy.com/media/WcJ0ZOezd0hAk/giphy.gif", "https://media.giphy.com/media/3k0H9HLgIlmSY/giphy.gif", "https://media.giphy.com/media/Ov1uUNlv8ZzwY/giphy.gif",
    "https://media.giphy.com/media/11KZ5xbbnE0EuY/giphy.gif", "https://media.giphy.com/media/143JmqGpxOVfdC/giphy.gif", "https://media.giphy.com/media/4DM5OzVend1oA/giphy.gif", "https://media.giphy.com/media/11KZ5xbbnE0EuY/giphy.gif", "https://giphy.com/gifs/windows-98-kotutohum-3oEdvbr2UAR2Dfd3Gw", "https://media.giphy.com/media/dcrPoJGYoPOEw/giphy.gif", "https://media.giphy.com/media/rXWyZWARNc6k0/giphy.gif", "https://media.giphy.com/media/8Mwjz8PppzmU/giphy.gif",
    "https://media.giphy.com/media/BiPO5UNF2nzVu/giphy.gif", "https://media.giphy.com/media/26u4lhPy4UI6AHzGw/giphy.gif", "https://media.giphy.com/media/l2QDPdFeHgvKoEUVi/giphy.gif", "https://media.giphy.com/media/13vTBT8Ta2cEpi/giphy.gif", "https://media.giphy.com/media/FJUXp43sQiqaY/giphy.gif", "https://media.giphy.com/media/sn9DOYNO6MxDG/giphy.gif", "https://media.giphy.com/media/B9BGO2cU9IeDC/giphy.gif", "https://media.giphy.com/media/KNJDoYaRlT7Xy/giphy.gif", "https://media.giphy.com/media/k6K9tLdRJqjra/giphy.gif",];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'gif',
  description: 'Rastgele gif atar.',
  usage: 'gif'
};
