// Embed 'header', 'main' and 'footer' parts to main page
fetch('/src/views/header.html')
.then(response => response.text())
.then(text => document.getElementById('header').innerHTML = text)

fetch('/src/views/main.html')
.then(response => response.text())
.then(text => document.getElementById('main').innerHTML = text)

fetch('/src/views/footer.html')
.then(response => response.text())
.then(text => document.getElementById('footer').innerHTML = text)

// Edit site's title from 'manifest.json'
fetch('/manifest.json')
.then(response => response.json())
.then(jsonResponse => document.getElementById('title').innerHTML = jsonResponse["title"] )