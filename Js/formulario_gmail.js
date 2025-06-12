document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/enviar-correo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    ##
    HOLA MUNDO
    VOND

    const result = await response.json();
    alert(result.message);
});