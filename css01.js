var head = document.getElementsByTagName('head');
var element = document.createElement('link');
element.rel = 'stylesheet';
element.type = 'text/css';
element.href = '../templates/at_nine_flat/core/controllers/gzip72dd.css?L2hvbWUva2FseWNpdG9pbmZvdGVjaC9wdWJsaWNfaHRtbC9jYWNoZS9hdF9uaW5lX2ZsYXQvdGVtcGxhdGUuY3Nz';

//here's the magic
element.media = 'non-existant-media';
head.appendChild(element, head.firstChild);
setTimeout(function () {
    element.media = 'all';
});