const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;

	if (!validateName(name)) {
		alert('Nome inválido. Máximo 100 caracteres e não pode conter números.');
		return;
	}

	if (!validateEmail(email)) {
		alert('Email inválido.');
		return;
	}

	if (!validatePhone(phone)) {
		alert('Telefone inválido. Exemplo: (xx) xxxx-xxxx');
		return;
	}

	alert('Formulário válido!');
});

function validateName(name) {
	const regex = /^[a-zA-ZáàâãéèêíïóôõúçÁÀÂÃÉÈÊÍÏÓÔÕÚÇ ]{1,100}$/;
	return regex.test(name);
}

function validateEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

function validatePhone(phone) {
	const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
	return regex.test(phone);
}