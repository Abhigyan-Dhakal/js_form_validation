const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('check-password');

//Creating event listener for the form after submit button is triggered
form.addEventListener('submit', (e) => {
	//preventing default submit behaviour i.e. page refresh
	e.preventDefault();
	//Calling checkInputs() method for data verification
	checkInputs();
});

function checkInputs() {
	// Using trim on the text field values to remove all the unnecessary spaces
	const usernameVal = username.value.trim();
	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();
	const checkPasswordVal = checkPassword.value.trim();
	
	//Data verification using if-statement and operator
	if(usernameVal === '') {
		error(username, 'Username cannot be blank');
	} else {
		success(username);
	}
	
	if(emailVal === '') {
		error(email, 'Email cannot be left empty');
	} else if (!isEmail(emailVal)) {
		error(email, 'Provided email isnt correct');
	} else {
		success(email);
	}
	
	if(passwordVal === '') {
		error(password, 'Password cannot be left empty');
	} else {
		success(password);
	}
	
	if(checkPasswordVal === '') {
		error(checkPassword, 'Password need to be re-confirmed');
	} else if(passwordVal !== checkPasswordVal) {
		error(checkPassword, 'Re-entered password doesnot match');
	} else{
		success(checkPassword);
	}
}

//Creating an error function for adding an error class and appending error text
function error(input, message) {
	const formControl = input.parentElement;
	const para = formControl.querySelector('p');
	formControl.className = 'form-item error';
	para.innerText = message;
}

//Creating an success function for adding a success css class
function success(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-item success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}