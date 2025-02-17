document.getElementById('emailForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const to = document.getElementById('to').value;
    const subject = document.getElementById('nombre').value;
    const gmail = document.getElementById('gmail').value;
    const mensaje = document.getElementById('mensaje').value;

    const response = await fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, message })
    });

    const result = await response.json();
    alert(result.message);
});