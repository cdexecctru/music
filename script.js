// Credos Music - Güvenlik Kalkanı
document.addEventListener('contextmenu', event => event.preventDefault()); // Sağ tık engelle

document.onkeydown = function(e) {
    // F12 engelle
    if (e.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I (İncele)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+J (Konsol)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+U (Kaynak Kodu)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+C (Element Seçici)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
};

console.log("%cDur! %cBu alan Credos Music güvenliği altındadır.", "color: red; font-size: 30px; font-weight: bold;", "color: white; font-size: 18px;");