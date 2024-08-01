document.addEventListener("DOMContentLoaded", function(){
	const but = document.getElementById("but");
	const textCoin = document.getElementById("textCoin");
	const resetBut = document.getElementById("resetBut");
	const boostBut = document.getElementById("boostBut");
	const infoBut = document.getElementById("infoBut");

	let coin = localStorage.getItem("Coins");
	let upCoin = localStorage.getItem("UpCoin");
	let lvl = 1;

	function skin(){
		const skin = document.getElementById("image");
		if(coin>=0){
			skin.src = "https://res.cloudinary.com/i8s/image/upload/v1674526616/theonetoys/realistic-image_rrcqq3";
		}
		if(coin>=100){
			skin.src = "https://janetscloset.com/wp-content/uploads/2020/06/DJ-1016-21-3-Vac-U-Lock-Codeblack-Hung-Cock.png";
			skin.alt = "Tap";
			lvl = 2;
		}
	}

	function setup(){
		textCoin.innerHTML = coin;
		skin();
	}

	setup();

	function addCoin(){
		skin();
		coin++;
		textCoin.innerHTML = coin;
		localStorage.setItem("Coins", coin);
	}

	function upAddCoin(){
		alert("Еще нету, скоро будут")
	}
	
	but.addEventListener("click", addCoin);
	boostBut.addEventListener("click", upAddCoin);
	infoBut.addEventListener("click", function(){
		alert("Скоро будут бусты");
	})
	resetBut.addEventListener("click", function(){
		coin = 0;
		textCoin.innerHTML = coin;
		skin();
	})

})