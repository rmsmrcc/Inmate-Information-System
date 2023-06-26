window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        const options = {
            perPage: 5,
        };
        new simpleDatatables.DataTable(datatablesSimple, options);
    }
});