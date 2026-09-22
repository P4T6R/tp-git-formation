function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (!username || !password) {
    console.error("Identifiant et mot de passe requis");
    return false;
  }
  console.log("Connexion de", username);
  return true;
}
