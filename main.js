const icons = [
	{
		'name': 'cat',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'crow',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'dog',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'dove',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'dragon',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'horse',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'hippo',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'fish',
		'prefix': 'fa-',
		'type': 'animals',
		'family': 'fas',
	},
	{
		'name': 'carrot',
		'prefix': 'fa-',
		'type': 'vegetables',
		'family': 'fas',
	},
	{
		'name': 'apple-alt',
		'prefix': 'fa-',
		'type': 'vegetables',
		'family': 'fas',
	},
	{
		'name': 'lemon',
		'prefix': 'fa-',
		'type': 'vegetables',
		'family': 'fas',
	},
	{
		'name': 'pepper-hot',
		'prefix': 'fa-',
		'type': 'vegetables',
		'family': 'fas',
	},
	{
		'name': 'user-astronaut',
		'prefix': 'fa-',
		'type': 'people',
		'family': 'fas',
	},
	{
		'name': 'user-graduate',
		'prefix': 'fa-',
		'type': 'people',
		'family': 'fas',
	},
	{
		'name': 'user-ninja',
		'prefix': 'fa-',
		'type': 'people',
		'family': 'fas',
	},
	{
		'name': 'user-secret',
		'prefix': 'fa-',
		'type': 'people',
		'family': 'fas',
	},
];

const colors = ['blue', 'orange', 'purple'];
const typeList = [];
const iconsContainer = document.getElementById('icons-container');
const filter = document.getElementById('filter');


icons.forEach((element) => {
	const {type} = element;
	if (!typeList.includes(type)) {
		typeList.push(type);
	}
});

typeList.forEach ((element) => {
	filter.innerHTML += `
	<option value="${element}">${element}</option>
	`
});

$('#filter').change(function () {
	let value = $(this).val();
	iconsContainer.innerHTML = '';

	icons.forEach((element) => {
		const {name, prefix, type, family} = element;
		const typeIndex = typeList.indexOf(type);
		let color;

		if (typeIndex > -1) {
			color = colors[typeIndex];
		}

		if (type === value || value === 'All') {
			iconsContainer.innerHTML += `
			<div>
				<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
				<h2>${name.toUpperCase()}</h2>
			</div>
			`;
		}
	});

	$('#icons-container div').addClass('icon-container');
});

$('#filter').change();