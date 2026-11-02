'use strict';

const clock = document.querySelector('#header-clock');
const dateFormatter = new Intl.DateTimeFormat('es-PE', {
  timeZone: 'America/Lima',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});
const timeFormatter = new Intl.DateTimeFormat('es-PE', {
  timeZone: 'America/Lima',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});

function updateClock() {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = `${dateFormatter.format(now)} · ${timeFormatter.format(now)} (Lima)`;
}

updateClock();
setInterval(updateClock, 1000);
