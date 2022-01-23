let app = new Vue({
	el: "#app",
	data: {
		newItem: "",
		news: [
			{
				text: "Собянин продлил ограничения в Москве из-за омикрона",
				url: "https://lenta.ru/news/2022/01/18/sobyaninogranich/?utm_source=yxnews&utm_medium=desktop",
			},
			{
				text: "Главком ВМС Германии ушел в отставку после слов о Крыме",
				url: "https://ria.ru/20220123/dolzhnost-1769094584.html?utm_source=yxnews&utm_medium=desktop",
			},
			{
				text: "Овечкин вышел на второе место в истории НХЛ по голам в ворота «Оттавы»",
				url: "https://www.championat.com/hockey/news-4584687-ovechkin-vyshel-na-vtoroe-mesto-v-istorii-nhl-po-golam-v-vorota-ottavy.html?utm_source=yxsport&utm_medium=desktop",
			},
		],
	},
});

function deleteEvent(index) {
	app.news.splice(index, 1);
}

function addNews() {
	let text = document.getElementById("text").value;
	let url = document.getElementById("url").value;
	let newItem = {
		text: text,
		url: url,
	};

	app.news.push(newItem);
}
