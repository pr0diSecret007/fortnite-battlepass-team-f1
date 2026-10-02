const races = [
    ['Australia', 'Melbourne', '8 MAR', '15:00', 'Albert Park', 'George Russell', 'George Russell | Kimi Antonelli | Charles Leclerc', 1],
    ['Cina', 'Shanghai', '15 MAR', '15:00', 'Shanghai International', 'Kimi Antonelli', 'Kimi Antonelli | George Russell | Lewis Hamilton', 1],
    ['Giappone', 'Suzuka', '29 MAR', '14:00', 'Suzuka Circuit', 'Kimi Antonelli', 'Kimi Antonelli | Oscar Piastri | Charles Leclerc', 1],
    ['Malaysia', 'Sepang', '4 OTT', '15:00', 'Sepang International', '—', 'Gara non disputata', 0],
    ['Arabia Saudita', 'Jeddah', '19 APR', '20:00', 'Jeddah Corniche', '—', 'Gara non disputabile', 1],
    ['Miami', 'USA', '3 MAG', '16:00', 'Miami International', 'Kimi Antonelli', 'Kimi Antonelli | Lando Norris | Oscar Piastri', 1],
    ['Canada', 'Montreal', '24 MAG', '16:00', 'Circuit Gilles-Villeneuve', 'Kimi Antonelli', 'Kimi Antonelli | Lewis Hamilton | Max Verstappen', 1],
    ['Monaco', 'Monte Carlo', '7 GIU', '15:00', 'Circuit de Monaco', 'Kimi Antonelli', 'Kimi Antonelli | Lewis Hamilton | Isack Hadjar', 1],
    ['Spagna', 'Barcelona', '14 GIU', '15:00', 'Barcelona-Catalunya', 'Lewis Hamilton', 'Lewis Hamilton | George Russell | Lando Norris', 1],
    ['Austria', 'Spielberg', '28 GIU', '15:00', 'Red Bull Ring', 'George Russell', 'George Russell | Max Verstappen | Kimi Antonelli', 1],
    ['Gran Bretagna', 'Silverstone', '5 LUG', '15:00', 'Silverstone', 'Charles Leclerc', 'Charles Leclerc | George Russell | Lewis Hamilton', 1],
    ['Belgio', 'Spa', '19 LUG', '15:00', 'Spa-Francorchamps', 'Kimi Antonelli', 'Kimi Antonelli | Charles Leclerc | Max Verstappen', 1],
    ['Ungheria', 'Budapest', '26 LUG', '15:00', 'Hungaroring', 'Lando Norris', 'Lando Norris | Max Verstappen | Kimi Antonelli', 1],
    ['Paesi Bassi', 'Zandvoort', '23 AGO', '15:00', 'Circuit Zandvoort', 'Lando Norris', 'Lando Norris | Kimi Antonelli | George Russell', 1],
    ['Italia', 'Monza', '6 SET', '15:00', 'Autodromo Nazionale Monza', 'Kimi Antonelli', 'Kimi Antonelli | George Russell | Max Verstappen', 1],
    ['Spagna', 'Madrid', '13 SET', '15:00', 'Madrid IFEMA', 'Kimi Antonelli', 'Kimi Antonelli | Max Verstappen | Lando Norris', 1],
    ['Azerbaijan', 'Baku', '26 SET', '14:00', 'Baku City Circuit', 'George Russel', 'George Russel | Max Verstappen | Isack Hadjar', 1],
    ['Singapore', 'Marina Bay', '11 OTT', '20:00', 'Marina Bay', '—', 'In attesa della gara', 0],
    ['USA', 'Austin', '25 OTT', '15:00', 'Circuit of the Americas', '—', 'In attesa della gara', 0],
    ['Messico', 'Mexico City', '1 NOV', '14:00', 'Autódromo Hermanos Rodríguez', '—', 'In attesa della gara', 0],
    ['Brasile', 'São Paulo', '8 NOV', '14:00', 'Interlagos', '—', 'In attesa della gara', 0],
    ['Las Vegas', 'USA', '21 NOV', '20:00', 'Las Vegas Strip Circuit', '—', 'In attesa della gara', 0],
    ['Qatar', 'Lusail', '29 NOV', '19:00', 'Lusail International', '—', 'In attesa della gara', 0],
    ['Abu Dhabi', 'Yas Marina', '6 DIC', '17:00', 'Yas Marina Circuit', '—', 'In attesa della gara', 0]
];


const flags = {
    'Australia': '🇦🇺',
    'Cina': '🇨🇳',
    'Giappone': '🇯🇵',
    'Malaysia':'🇲🇾',
    'Arabia Saudita': '🇸🇦',
    'Miami': '🇺🇸',
    'Canada': '🇨🇦',
    'Monaco': '🇲🇨',
    'Spagna': '🇪🇸',
    'Austria': '🇦🇹',
    'Gran Bretagna': '🇬🇧',
    'Belgio': '🇧🇪',
    'Ungheria': '🇭🇺',
    'Paesi Bassi': '🇳🇱',
    'Italia': '🇮🇹',
    'Azerbaijan': '🇦🇿',
    'Bahrain/Malesia': '🇧🇭',
    'Singapore': '🇸🇬',
    'USA': '🇺🇸',
    'Messico': '🇲🇽',
    'Brasile': '🇧🇷',
    'Las Vegas': '🇺🇸',
    'Qatar': '🇶🇦',
    'Abu Dhabi': '🇦🇪'
};

const box = document.getElementById('races');
let only = false;

function render() {
    box.innerHTML = '';
    races.forEach((r, i) => {
    
        if (only && r[7] === 1) return;

        const country = r[0];
        const flag = flags[country] || '🏁'; 
        box.innerHTML += `
        <article class="race">
        <div class="track">
        <span class="round">${String(i + 1).padStart(2, '0')}</span>
        <span class="status ${r[7] ? 'done' : 'upcoming'}">${r[7] ? '✕ TERMINATA' : '✓ DA CORRERE'}</span>
        </div>
        <div class="race-body">
        <h3>${flag} ${country.toUpperCase()}</h3>
        <div class="place">${r[1]} • ${r[2]}</div>
        <div class="meta">📍 <b>${r[4]}</b><br>🕒 Gara: <b>${r[3]} locale</b><br>🏆 Vincitore: <b>${r[5]}</b></div>
        <div class="podium">${r[7] ? `🥇🥈🥉 <b>TOP 3</b><br>${r[6]}` : '⏳ <b>RISULTATI</b><br>Disponibili dopo la gara'}</div>
        </div>
        </article>
        `;
    });
}

render();

document.getElementById('filter').onclick = () => {
    only = !only;
    document.getElementById('filter').textContent = only ? 'MOSTRA TUTTE LE GARE' : 'MOSTRA SOLO PROSSIME GARE';
    render();
};


function initCountdown() {
    const mainSection = document.querySelector('main');
    if (!mainSection) return;

    const countdownContainer = document.createElement('div');
    countdownContainer.className = 'countdown-box';
    countdownContainer.innerHTML = `
    <div class="countdown-content">
    <p class="eyebrow" style="margin: 0 0 5px 0;">PROSSIMO GRAN PREMIO (MALESIA)</p>
    <h3 id="countdown-timer" style="font-family: 'Barlow Condensed'; font-size: 24px; margin: 0;">Caricamento conto alla rovescia...</h3>
    </div>
    `;

    countdownContainer.style.cssText = `
    background: var(--card);
    border: 1px solid var(--line);
    border-left: 4px solid var(--red);
    padding: 20px;
    margin-bottom: 35px;
    font-family: Inter, sans-serif;
    `;

    mainSection.insertBefore(countdownContainer, mainSection.firstChild);

    const targetDate = new Date("2026-10-04T15:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("countdown-timer").innerHTML = "IL GRAN PREMIO È IN CORSO O È TERMINATO!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timerEl = document.getElementById("countdown-timer");
        if(timerEl) {
            timerEl.innerHTML = `🇲🇾 Mancano: <b>${days}g</b> : <b>${hours}h</b> : <b>${minutes}m</b> : <b>${seconds}s</b> al GP di Malesia`;
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', initCountdown);
