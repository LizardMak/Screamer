
window.onload = function() {
  let form = document.querySelector('form');
  console.log('loaded');
  form.onsubmit = function(e) {
  console.log('form subitted')
  const screamInput = document.getElementById("screamInput").value;

  document.querySelector("h1#screamOutput").innerText = screamInput;
  e.preventDefault();
  };
}