function login() {
  const usr = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (!usr || !password) {
    console.error("Identifiant et mot de passe requis");
    return false;
  }
  console.log("Connexion de", usr);
  return true;
}
