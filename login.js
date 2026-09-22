function login() {
  const usernameElement = document.getElementById("username");
  const passwordElement = document.getElementById("password");
  if (!usernameElement || !passwordElement) {
    console.error("Champs de connexion introuvables");
    return false;
  }
  const username = usernameElement.value;
  const password = passwordElement.value;
  if (!username || !password) {
    console.error("Identifiant et mot de passe requis");
    return false;
  }
  console.log("Connexion de", username);
  return true;
}
