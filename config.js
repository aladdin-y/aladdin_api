module.exports = {
	token: "",

	CLIENT_ID: "",

	prefix: "",

	Port: 5000,
	
	db_type: "sqlite",// mysql || sqlite
	// sqlite = quick.db;

	docs: "",//if you have api docs
	time: {
	  status: 1,
	  activities: 1,
	  roulette: 30
	},
	messages: {    COOLDOWN_MESSAGE:"You are on `<duration>` cooldown!"
	},
  

	db: {// if you use mysql 
		ip: "",// host ip
		hn: "",// db user name
		dp: "",// db passord
		dn: ""// db name
	  }
  };
  