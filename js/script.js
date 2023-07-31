document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header');
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          headerContainer.innerHTML = xhr.responseText;
        } else {
          console.error('Error al cargar el archivo header.html');
        }
      }
    };
  
    xhr.open('GET', './header.html', true);
    xhr.send();
  });
  document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('footer');
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          headerContainer.innerHTML = xhr.responseText;
        } else {
          console.error('Error al cargar el archivo footer.html');
        }
      }
    };
  
    xhr.open('GET', './footer.html', true);
    xhr.send();
  });