async function handleSubmit(event) {
  event.preventDefault();
  let message;
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok == true) {
      message = "Form submitted successfully!";
      showAlert(message, 'success');
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          message = data["errors"].map(error => error["message"]).join(", ");
          showAlert(message, 'error');
        } else {
          message = "Oops! There was a problem submitting your form";
          showAlert(message, 'error');
        }
      })
    }
  }).catch(error => {
    message = "Oops! There was a problem submitting your form";
    showAlert(message, 'error');
  });
}

