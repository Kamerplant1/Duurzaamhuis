document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMenu");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        toggleButton.classList.toggle("open");
    });

    function updateDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('nl', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const formattedTime = now.toLocaleTimeString('en-GB');

        document.getElementById("date-time").innerText = `${formattedDate} - ${formattedTime}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
