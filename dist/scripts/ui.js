// this shows an alert (error or success) message to the user for 5 seconds
const showAlert = async (message, type) => {

  let alert = document.querySelector('#alert');
  alert.innerHTML = message;
  alert.classList.remove('translate-x-[100%]');
  if(type === 'success') {
    alert.classList.add('bg-green-600', 'show');
  }else if(type === 'error') {
    alert.classList.add('bg-red-600', 'show');
  }

  setTimeout(() => {
    if(type === 'success') {
      alert.classList.remove('bg-green-600', 'show');
    }else if(type === 'error') {
      alert.classList.remove('bg-red-600', 'show');
    }
    alert.textContent = '';
    alert.classList.add('translate-x-[100%]');
  }, 5000)
}

let phoneLink = document.querySelector('#phone-link');
phoneLink.addEventListener('click', (e) => {
  e.preventDefault();

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(phoneLink.childNodes[3].outerText);
  console.log(phoneLink.childNodes[3].outerText);
  showAlert('copied successfully', 'success');
} )