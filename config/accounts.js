var configsArray = [];
var config;

// 1st Account (you can boost many accounts as you want)
config = {};
config.username = ''; // Account username
config.password = ''; // Account password
config.sharedSecret = ''; // Shared secret (2FA only), leave it blank for steam guard code
config.enableStatus = true; // Set it to false if you want to stay invisible
config.gamesAndStatus = [
	't.me/SteamHoursBoost', // Your custom status (counts as a game, you can only boost 31 games with the custom status)
	730,
	570,
]; // IDs of the games, separated by comma



module.exports = configsArray;
