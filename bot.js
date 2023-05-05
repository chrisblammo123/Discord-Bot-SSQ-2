/*
 * Discord Bot invite link
 * https://discordapp.com/oauth2/authorize?client_id=507957137465540629&scope=bot&permissions=470019159
 */


// Variables

const ssq = require('ssq');					// Interfaces with Source servers
// const Discord = require('discord.js');				// Discord bot API
// const client = new Discord.Client();				// Discord bot client

const serverinfo = require('./server.json');		// Info relating to the target server
const config = require('./config.json');			// Info relating to the bot configuration

// Initialization

// Set ssq timeout to 2000ms (DEFAULT)
// ssq.set_timeout(2000);


// Main
switch('players')
{
	case 'test':
	case 'ping':
		ssq.ping(serverinfo.serverip, serverinfo.serverport, (err, data) => {
			console.log('Pinging server ...\n' + data)
			console.error(err)
		});
		break;
	case 'server':
	case 'status':
		ssq.info(serverinfo.serverip, serverinfo.serverport, (err, data) => {
			console.log('Pinging server ...\n' + data)
			console.error(err)
		});
		break;
	case 'players':
	case 'playerlist':
		ssq.players(serverinfo.serverip, serverinfo.serverport, (err, data) => {
			console.log('Pinging server ...\n' + data)
			console.error(err)
		});
		break;
	case 'help':
	case 'info':
	case 'cmds':
		break;
	default:
		break;
}