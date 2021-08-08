(function () {
	document.querySelector('.dropbtn').addEventListener('click', () => {
		console.log('dropping down');
		document.querySelector('.dropdown-content').classList.toggle('show');
	});
})();
