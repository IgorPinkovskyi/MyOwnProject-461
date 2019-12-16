function valid(form) {
  let fail = false;
  const name = form.name.value;
  const email = form.email.value;
    if (name === "" || name === " ")
        fail = "Enter Your name";
    else if (email === "" || email === " ")
        fail = "Enter Your @mail";

  if (fail) alert(fail);
}
