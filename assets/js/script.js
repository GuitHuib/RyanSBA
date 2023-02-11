const form = $('#listForm');
form.bind('submit', (e) => {
    e.preventDefault();
    submitForm()
});

function submitForm() {
  const fname = form.find('input[name="fname"]').val();
  const lname = form.find('input[name="lname"]').val();
  const email = form.find('input[name="email"]').val();
  const city = form.find('input[name="city"]').val();

  const li = document.createElement('li');
  let text = `${fname} ${lname}, ${email}`;
  if(city){ text += `, ${city}`}
  li.innerHTML = text;
  document.getElementById("resultList").append(li);
  form.trigger('reset');
}
