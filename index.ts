let data = [
	{
		id: 1,
		title: 'Battle Through The Heavens S5',
		genre: 'Action, Adventure, Fantasy, Romance, Supernatural, Martial Arts, Mythology ',
		release: '2018',
		Episode: 116,
		network: 'WeTV',
	},
	{
		id: 2,
		title: 'Perfect World',
		genre: 'Action, Adventure, Fantasy',
		release: '2022',
		Episode: 184,
		network: 'WeTV',
	},
	{
		id: 3,
		title: 'Slay The Gods',
		genre: 'Action, Adventure, Fantasy, Martial Arts',
		release: '2024',
		Episode: 15,
		network: 'WeTV',
	},
	{
		id: 4,
		title: 'Soul Land 2',
		genre: 'Action, Adventure, Fantasy, Martial Arts',
		release: '2023',
		Episode: 70,
		network: 'WeTV',
	},
];

// TODO 1: Mendapatkan semua data
let allData = data;
console.log(allData);

// TODO 2: Mendapatkan data dengan nama tertentu
let titleData = data.find(item => item.title === 'Battle Through The Heavens S5');
console.log(titleData);

// TODO 3: Mendapatkan data genre
let genres = data.map(item => item.genre);
console.log(genres);

// TODO 4: Mendapatkan data episode
let episodes = data.map(item => item.Episode);
console.log(episodes);