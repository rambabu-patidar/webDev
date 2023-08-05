const loginForm = document.querySelector(".login-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const passwordInput = document.querySelector("#password");
const passwordRules = document.querySelector(".password-rules");
const passwordRuleFirst = document.querySelector(".password-rule-1");
const passwordRuleSecond = document.querySelector(".password-rule-2");
const passwordRuleThird = document.querySelector(".password-rule-3");
const passwordInputShowButton = document.querySelector(".input-password-img");
const confirmPasswordShowButton = document.querySelector(
	".confirm-password-img"
);
const confirmPasswordInput = document.querySelector("#confirm-password");
const termConditionCheckBox = document.querySelector("#term-condition");

const submitButton = document.querySelector(".submit-button");
const errorMessage = document.querySelector(".error-message");

submitButton.textContent = "Submit";

// UTILITY FUNCTIONS

const addClass = (classname, element) => {
	element.classList.add(classname);
};

const removeClass = (classname, element) => {
	element.classList.remove(classname);
};

// UTILIRY FUNCTIONS END

const onSubmitHandler = (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);

	const dataObject = Object.fromEntries(formData.entries());
	if (
		dataObject.name !== "" &&
		dataObject.email.includes("@") &&
		dataObject.password.length >= 8 &&
		dataObject["confirm-password"].length >= 8 &&
		dataObject.password === dataObject["confirm-password"] &&
		dataObject["term-condition"] === "on" &&
		dataObject["g-recaptcha-response"] !== ""
	) {
		removeClass("show", errorMessage);
		submitButton.setAttribute("disabled", "true");
		submitButton.textContent = "Submitting...";
		console.log(dataObject);
		setTimeout(() => {
			submitButton.setAttribute("disabled", "false");
			submitButton.textContent = "Submitted";
		}, 1500);
	} else {
		addClass("show", errorMessage);
	}
};

const onPasswordInputFocusHandler = (event) => {
	addClass("focus", passwordRules);
};

const onPasswordInputBlurHandler = (event) => {
	removeClass("focus", passwordRules);
};

const onPasswordInputChangeHandler = (event) => {
	const enteredPassword = event.target.value;

	// for password rule 1
	if (enteredPassword.length >= 8) {
		addClass("hide", passwordRuleFirst);
	} else {
		removeClass("hide", passwordRuleFirst);
	}

	// for password rule 2
	// write logic to check if the string contain digit or not.
	// regex are the powerfull ways to do that.
	const regex = /\d/;
	const containDigit = regex.test(enteredPassword);

	const regex2 = new RegExp("_");
	const containUnderscore = regex2.test(enteredPassword);

	if (containUnderscore && containDigit) {
		addClass("hide", passwordRuleSecond);
	} else {
		removeClass("hide", passwordRuleSecond);
	}

	// password rule 3
	const regex3 = new RegExp("[A-Z]");
	const containsUppercase = regex3.test(enteredPassword);
	if (containsUppercase) {
		addClass("hide", passwordRuleThird);
	} else {
		removeClass("hide", passwordRuleThird);
	}
};

const onConfirmPasswordInputChangeHandler = (event) => {
	const enteredPassword = passwordInput.value;
	const enteredConfirmPassword = event.target.value;

	if (enteredConfirmPassword !== enteredPassword) {
		addClass("different", confirmPasswordInput);
	} else {
		removeClass("different", confirmPasswordInput);
	}
};

const togglePasswordHandler = (event) => {
	const type =
		passwordInput.getAttribute("type") === "password" ? "text" : "password";

	passwordInput.setAttribute("type", type);
};

const toggleConfirmPasswordHandler = (event) => {
	const type =
		confirmPasswordInput.getAttribute("type") === "password"
			? "text"
			: "password";

	confirmPasswordInput.setAttribute("type", type);
};

loginForm.addEventListener("submit", onSubmitHandler);
passwordInput.addEventListener("focus", onPasswordInputFocusHandler);
passwordInput.addEventListener("blur", onPasswordInputBlurHandler);

passwordInput.addEventListener("input", onPasswordInputChangeHandler);
confirmPasswordInput.addEventListener(
	"input",
	onConfirmPasswordInputChangeHandler
);
passwordInputShowButton.addEventListener("click", togglePasswordHandler);
confirmPasswordShowButton.addEventListener(
	"click",
	toggleConfirmPasswordHandler
);
