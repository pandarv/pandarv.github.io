// const formInput = document.querySelector("form");
// const submitBtn = document.querySelector("button");
// console.log(submitBtn);
// // console.log(formInput.elements["email"]);

// submitBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	console.log(formInput.elements["email"].value);
// 	console.log(formInput.elements["name"].value);
// 	console.log(formInput.elements["subject"].value);
// 	console.log(formInput.elements["message"].value);
// 	Email.send({
// 		Host: "smtp.gmail.com",
// 		// Username: "knowna700@gmail.com",
// 		// Password: "kmyxxadmihazjahx",
// 		To: formInput.elements["email"].value,
// 		From: "knowna700@gmail.com",
// 		Subject: formInput.elements["subject"].value,
// 		Body: formInput.elements["message"].value,
// 	})
// 		.then(() => alert("Successful"))
// 		.then(() => {
// 			formInput.elements["name"].value = "";
// 			formInput.elements["email"].value = "";
// 			formInput.elements["subject"].value = "";
// 			formInput.elements["message"].value = "";
// 		});
// });
