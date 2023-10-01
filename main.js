//Hamburger-Menu
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('mobile-menu'); // Add the "mobile-menu" class to toggle the menu
        menuOpen = true;
     } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('mobile-menu'); // Remove the "mobile-menu" class to hide the menu
        menuOpen = false;
     }
});

//Video
document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
        const popupVideo = document.querySelector('.popup-video');
        const popupVideoElement = popupVideo.querySelector('video');
        const navBar = document.querySelector('.navbar'); // Select the navbar element
        const menuButton = document.querySelector('.menu-btn'); // Select the menu button element
        
        // Disable download and picture-in-picture
        popupVideoElement.controlsList.value = 'nodownload';
        popupVideoElement.disablePictureInPicture = true;
        
        // Unmute the video
        popupVideoElement.muted = false;
        
        // Enable looping
        popupVideoElement.loop = true;
        
        popupVideoElement.src = vid.getAttribute('src');
        popupVideo.style.display = 'block';
        navBar.style.display = 'none'; // Hide the navbar
        menuButton.style.display = 'none'; // Hide the menu button
    }
});

document.querySelector('.popup-video span').onclick = () =>{
    const popupVideo = document.querySelector('.popup-video');
    const popupVideoElement = popupVideo.querySelector('video');
    const navBar = document.querySelector('.navbar'); // Select the navbar element
    const menuButton = document.querySelector('.menu-btn'); // Select the menu button element
    
    // Enable download and picture-in-picture (if needed)
    popupVideoElement.controlsList.value = '';
    popupVideoElement.disablePictureInPicture = false;
    
    // Pause and reset the video
    popupVideoElement.pause();
    popupVideoElement.src = '';
    
    // Mute the video again
    popupVideoElement.muted = true;
    
    // Disable looping
    popupVideoElement.loop = false;
    
    popupVideo.style.display = 'none';
    navBar.style.display = ''; // Show the navbar again
    menuButton.style.display = ''; // Show the menu button again
}

//Js Random Version
const randomVersion = Math.random().toString(36).substring(7);
const scriptElement = document.createElement('script');
scriptElement.src = `main.js?v=${randomVersion}`;

//InitMap
function initMap() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(44.4268, 26.1025),
        disableDefaultUI: true,
        keyboardShortcuts: false,
        gestureHandling: 'none',
        mapTypeControl: false,
        scrollwheel: false,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 21 }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#000000" }, { "lightness": 17 }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 18 }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 16 }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 19 }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 17 }]
        }]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
}

/*Send Email*/
function sendEmail() {
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var phoneValue = document.getElementById("subject").value;
    var messageValue = document.getElementById("message").value;
    var emailLink = '<a href="mailto:' + emailValue + '">' + emailValue + '</a>';
    var phoneLink = '<a href="tel:' + phoneValue + '">' + phoneValue + '</a>';
    var emailBody = "Name: " + nameValue + "<br> Email: " + emailLink + "<br> Phone No: " + phoneLink + "<br> Message: " + messageValue;
    Email.send({
        SecureToken: "61953f31-d199-4d32-b88c-d27cf707265b",
        To: 'contact@clipify.ro',
        From: 'contact@clipify.ro',
        Subject: "New Contact Form Enquiry",
        Body: emailBody
    }).then(
        message => {
            var Name = document.getElementById('name');
            var email = document.getElementById('email');
            var subject = document.getElementById('subject');
            if (Name.value !== '' || email.value !== '' || subject.value !== '') {
                const danger = document.getElementById('danger');
                danger.style.display = 'block';
            } else {
                const success = document.getElementById('success');
                success.style.display = 'block';
                setTimeout(() => {
                    success.style.display = 'none';
                }, 5000); 

            }
        }
    );
}


