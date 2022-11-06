const lista = document.getElementById('lista');

Sortable.create(lista,{
	animation: 150,
	chosenClass: "seleccionado",
	ghostClass: "fantasma",
	dragClass: "drag",
	onEnd: () => {
		// codigo que se inserte un elemento.
	},
	group: "lista-personas",
	store: {
		set: (sortable) => {
			const orden = sortable.toArray();
			console.log(orden);
			localStorage.setItem(sortable.options.group.name, orden.join('---'));
		},

		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			console.log(orden)
			return orden ? orden.split('---') : [];
		}
	}
})