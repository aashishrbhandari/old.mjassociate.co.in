// function load_footer() {
//     document.queryselector("div.footer-component").innerhtml = '<object type="text/html" data="footer.html" ></object>';
// }

async function load_navbar() {
    document.querySelector("div.navbar-component").innerHTML = await (await fetch('/navbar.html')).text();
}

async function load_footer() {
    document.querySelector("div.footer-component").innerHTML = await (await fetch('/footer.html')).text();
}

load_navbar();
load_footer();