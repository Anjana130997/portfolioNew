$(document).ready(function(){


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


});
document.getElementById('resume-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    const resumeUrl = this.href; // Get the URL of the resume

    // Open the PDF in a new tab
    window.open(resumeUrl, '_blank');

    // Create an invisible link to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AnjanaResume.pdf.pdf'; // Specify the file name for download

    // Append the link to the body and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the link after triggering the download
    document.body.removeChild(link);
});
document.getElementById('resume-btn2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    const resumeUrl = this.href; // Get the URL of the resume

    // Open the PDF in a new tab
    window.open(resumeUrl, '_blank');

    // Create an invisible link to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AnjanaResume.pdf.pdf'; // Specify the file name for download

    // Append the link to the body and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the link after triggering the download
    document.body.removeChild(link);
});

document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
