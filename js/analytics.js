// Reemplazar 'GA_MEASUREMENT_ID' con tu ID de medición de Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'GA_MEASUREMENT_ID', 'auto');
ga('send', 'pageview');

// Event tracking para enlaces externos
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            ga('send', 'event', 'outbound', 'click', url, {
                'transport': 'beacon',
                'hitCallback': function() {
                    document.location = url;
                }
            });
        });
    });
    
    // Event tracking para descargas de archivos
    const downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"], a[href$=".doc"]');
    
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            ga('send', 'event', 'download', 'click', url, {
                'transport': 'beacon'
            });
        });
    });
    
    // Event tracking para formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            ga('send', 'event', 'contact', 'submit', 'Contact Form');
        });
    }
});