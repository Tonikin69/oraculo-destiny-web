// Solo la dirección PÚBLICA del alojamiento. Nunca claves ni tokens.
const APP_URL = "https://oraculo-destiny.onrender.com";
if (APP_URL) {
  const destination = new URL(APP_URL);
  if (destination.protocol === "https:" && !destination.username && !destination.password && destination.pathname === "/" && !destination.search && !destination.hash) {
    const link = document.querySelector("#enter");
    link.href = destination.href;
    link.hidden = false;
    document.querySelector("#status").textContent = "El servidor gratuito puede tardar en arrancar. Espera a que abra la aplicación para iniciar sesión.";
  }
}
