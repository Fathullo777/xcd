let count = 0;

const circle = document.getElementById('circle');
const counter = document.getElementById('counter');
const surprise = document.getElementById('surprise');

circle.addEventListener('click', () => {
    count++;
    counter.textContent = count;

    if (count === 20) {
        surprise.classList.remove('hidden');
    }
});
