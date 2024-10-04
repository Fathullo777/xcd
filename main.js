let count = 0;

const circle = document.getElementById('circle');
const counter = document.getElementById('counter');
const surprise1 = document.getElementById('surprise1'); // Первое видео
const surprise2 = document.getElementById('surprise2'); // Второе видео

circle.addEventListener('click', () => {
    count++;
    counter.textContent = count;

    if (count === 20) {
        surprise1.classList.remove('hidden'); // Показываем первое видео
        surprise1.play(); // Автоматически воспроизводим видео
        circle.style.display = 'none'; // Скрываем кликер
    }

    if (count === 40) {
        surprise1.classList.add('hidden'); // Скрываем первое видео
        surprise2.classList.remove('hidden'); // Показываем второе видео
        surprise2.play(); // Автоматически воспроизводим второе видео
        circle.style.display = 'none'; // Скрываем кликер
    }
});

// Обработчик события окончания воспроизведения первого видео
surprise1.addEventListener('ended', () => {
    surprise1.classList.add('hidden'); // Скрываем первое видео
    circle.style.display = 'block'; // Показываем кликер снова
});

// Обработчик события окончания воспроизведения второго видео
surprise2.addEventListener('ended', () => {
    surprise2.classList.add('hidden'); // Скрываем второе видео
    circle.style.display = 'block'; // Показываем кликер снова
});
