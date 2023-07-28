
document.addEventListener('DOMContentLoaded', function() {
    var typedStrings = ["Welcome to my journey"];
    var options = {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        loop: false, // this ensures the typing animation does not loop
        autoInsertCss: true,
        onComplete: (self) => { self.cursor.remove() }
    };

    var typed = new Typed('.typing', options);
});
