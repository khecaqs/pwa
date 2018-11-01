const main = document.querySelector('main');

window.addEventListener('load', e => {
    ListData();
});

async function ListData() {
    const res = await fetch('http://192.168.90.36/pwa/api/read.php');
    const json = await res.json();

    main.innerHTML = json.map(dataBlog).join('\n');
}

function dataBlog(data) {
    return `
        <div class="blog">
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <p>${data.author}</p>
    `;
}