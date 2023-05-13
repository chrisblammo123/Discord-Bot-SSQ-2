/*
 * Discord Bot invite link
 * https://discordapp.com/oauth2/authorize?client_id=507957137465540629&scope=bot&permissions=470019159
 */


// Variables

const ssq = require('ssq');					// Interfaces with Source servers
const ssqfix = require('ssq-fix');			// My test node-ssq fix
// const Discord = require('discord.js');				// Discord bot API
// const client = new Discord.Client();				// Discord bot client

const serverinfo = require('./server.json');		// Info relating to the target server
const config = require('./config.json');			// Info relating to the bot configuration

// Initialization

// Set ssq timeout to 2000ms (DEFAULT)
// ssq.set_timeout(2000);


// Define Wrapper Functions

/**
 * Object returned by ssq.players()
 * @typedef {Object} PlayerInfo
 * @property {number} index Always 0 (from what I can tell)
 * @property {string} name Username of the player
 * @property {number} score Player score (integer)
 * @property {number} duration Time on the server in seconds (float)
 */

/**
 * Returns array of PlayerInfo objects
 * @param {string} [ip = serverinfo.serverip] Server ip
 * @param {number} [port = serverinfo.serverport] Server port
 * @return {PlayerInfo[]} Array of PlayerInfo objects
 */
getPlayerList = (ip = serverinfo.serverip, port = serverinfo.serverport) => {
	ssq.players(ip, port, (err, data) => {
		console.log('Pinging server ...\n' + data)
		console.log(data[1])
		console.error(err)
	});
}





// Main
switch('status')
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
		ssqfix.info(serverinfo.serverip, serverinfo.serverport, (err, data) => {
			console.log('Pinging server ...\n' + data)
			// TODO: FIX this fucking thing whats wrong with it
			console.log(data)		// This shit keeps returning as undefined
			console.error(err)
		});
		break;
	case 'players':
	case 'playerlist':
		// will probably get rid of this and use wrapper, will make it cleaner and I might remove index, it seems useless
		ssq.players(serverinfo.serverip, serverinfo.serverport, (err, data) => {
			console.log('Pinging server ...\n' + data)
			console.log(data[1])
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