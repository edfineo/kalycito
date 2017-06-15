// append css dynamically to head
var head = document.getElementsByTagName('head');
var element = document.createElement('link');
element.rel = 'stylesheet';
element.type = 'text/css';
element.href = '//www.my-external-css.com/my.css';

//here's the magic
element.media = 'non-existant-media';
head.appendChild(element, head.firstChild);
setTimeout(function () {
    element.media = 'all';
});