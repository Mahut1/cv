var links = document.querySelectorAll('.file');
    // Вешаем обработчик "click" на все элементы с классом file
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            // Отменяем событие (преход по ссылке или submit) если "Отмена"
            if (!confirm('Точно будем качать?')) {
                e.preventDefault();
            }
        }, false);
    }