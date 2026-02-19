let habits = {};

function makeCalendar() {
    let html = '';
    
    for (let i = 0; i < 365; i++) {
        const level = Math.floor(Math.random() * 4);
        html += `<div class="day level-${level}" onclick="clickDay(${i})"></div>`;
    }
    
    document.getElementById('calendar').innerHTML = html;
}

function clickDay(index) {
    const days = document.querySelectorAll('.day');
    const day = days[index];
    
    if (day.classList.contains('level-0')) {
        day.className = 'day level-1';
    } else if (day.classList.contains('level-1')) {
        day.className = 'day level-2';
    } else if (day.classList.contains('level-2')) {
        day.className = 'day level-3';
    } else {
        day.className = 'day level-0';
    }
    
    updateStats();
}

function updateStats() {
    const days = document.querySelectorAll('.day');
    let total = 0;
    
    days.forEach(day => {
        if (!day.classList.contains('level-0')) {
            total++;
        }
    });
    
    document.getElementById('total').textContent = total;
    document.getElementById('streak').textContent = Math.floor(total / 7);
}

makeCalendar();
updateStats();
