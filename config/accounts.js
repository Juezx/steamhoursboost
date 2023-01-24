var configsArray = [];
var config;

// 1st Account (you can boost many accounts as you want)
config = {};
config.username = 'torif9'; // Account username
config.password = 'Password98Ez'; // Account password
config.sharedSecret = 'BApBbzIfDvuZKmA2JEsAlx6VrLk'; // Shared secret (2FA only), leave it blank for steam guard code
config.enableStatus = true; // Set it to false if you want to stay invisible
config.gamesAndStatus = [
	't.me/SteamHoursBoost', // Your custom status (counts as a game, you can only boost 31 games with the custom status)
	730,
	570,
]; // IDs of the games, separated by comma



module.exports = configsArray;
