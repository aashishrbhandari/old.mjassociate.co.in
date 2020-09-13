const companyLogoImg = "images/company-logo/logo.png";


/*

    Home
    Services
        - Consulting
    Achievements
        - Client Reviews
        - Awards
        - Events
    Contact Us
        - Direct Contact
        - Work With Us
        - Feedback
    Knowledge base
        - Law Acts
        - Cyber Law
    About Us

*/

links_json = {
    "Home": {
        "Link": "home.html"
    },
    "Services": {
        "Link": "home.html",
        "SubSection": [
            {
                "Consulting": {
                    "Link": "consulting.html"
                }
            }
        ]
    }

}




function NavBarLinks() {
    let NavBarLink = `<div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Consulting</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                        Achievements
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Client Reviews</a></li>
                        <li><a class="dropdown-item" href="#">Awards</a></li>
                        <li><a class="dropdown-item" href="#">Events</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                        Contact Us
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Direct Contact</a></li>
                        <li><a class="dropdown-item" href="#">Work With Us</a></li>
                        <li><a class="dropdown-item" href="#">Feedback</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                        Knowledge base
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Law Acts</a></li>
                        <li><a class="dropdown-item" href="#">Cyber Law</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">About Us</a>
                </li>
            </ul>
        </div>`
    return NavBarLink
}

function NavBarComponent(companyLogoImg,) {

    let NavBar = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#">
                            <img src="${companyLogoImg}" width="30" height="30" class="d-inline-block align-top" alt=""
                                loading="lazy">
                            <!-- Company Name -->
                            Assosciates
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        ${NavBarLinks()}
                        
                    </div>
                </nav>`;
    return NavBar
}




const ImageSliderComponent = `<div class="image-slider m-2 p-2 ">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="images/company-image-slides/Law1.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="images/company-image-slides/Law2.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="images/company-image-slides/Law3.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
</div>`

const IntroductionComponent = `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`


document.querySelector('div.navbar-component').innerHTML = NavBarComponent(companyLogoImg);
document.querySelector('div.image-slider-component').innerHTML = ImageSliderComponent;
document.querySelector('div.introduction-component').innerHTML = IntroductionComponent;


