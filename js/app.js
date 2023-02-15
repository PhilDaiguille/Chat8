document.addEventListener("DOMContentLoaded", () => {
	/*APP*/
	console.log("charged");
	submit = document.querySelector("body > main > section > div.entrer > form > input[type=submit]:nth-child(2)");
	Conversation = document.querySelector("body > main > section > div.chat");
	let Chat = (texte) => {
		let randomIndex = Math.floor(Math.random() * data.reponse.length);
		Conversation.innerHTML += `<p class="user">${texte}</p>`;
		if (texte.includes("quoi")) {
			Conversation.innerHTML += `<p class="bot">feur</p>`;
		}
		else {
			Conversation.innerHTML += `<p class="bot">${data.reponse[randomIndex]}</p>`;
		}
	}
	let data = {
		"reponse": [
			"Essaye plus tard",
			"Essaye encore",
			"Pas d'avis",
			"C'est ton destin",
			"Le sort en est jeté",
			"Une chance sur deux",
			"Repose ta question",
			"D'après moi oui",
			"C'est certain",
			"Oui absolument",
			"Tu peux compter dessus",
			"Sans aucun doute ",
			"Très probable",
			"Oui",
			"C'est bien parti",
			"C'est non",
			"Peu probable",
			"Faut pas rêver",
			"N'y compte pas",
			"Impossible",
			"Vous avez raison",
			"Tu as tort",
			"Je suis neutre",
		],

	}
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		texte = document.querySelector("#text").value;
		if (texte != "") {
			Chat(texte);
			texte.value = "";
		}
		else {
			Conversation.innerHTML += `<p class="bot">Je ne suis pas sûr de comprendre<p>`
		}

	});
});