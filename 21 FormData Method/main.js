const productForm = document.querySelector(".product-form");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productDescription = document.querySelector(".product-description");

productName.innerHTML = productName.value ?? "Enter Project Name";
productPrice.innerHTML = productPrice.value ?? "0.0";
productDescription.innerHTML =
	productDescription.value ?? "Nothing to describe";

const onFormSubmitHandler = (event) => {
	// prevent the default behaviour of page reload
	event.preventDefault();

	const formData = new FormData(event.target);

	// formData is not good to print so we convert it into object.
	const dataObjects = Object.fromEntries(formData.entries());

	productName.innerHTML = dataObjects.name;
	productPrice.innerHTML = dataObjects.price;
	productDescription.innerHTML = dataObjects.description;
};
productForm.addEventListener("submit", onFormSubmitHandler);
