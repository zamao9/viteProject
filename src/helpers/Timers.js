// src/helpers/Timers.js
export function formatTime({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
    let result = '';

    if (days > 0) result += `${days}d `;
    if (hours > 0) result += `${hours}h `;
    if (minutes > 0) result += `${minutes}m `;
    if (seconds > 0) result += `${seconds}s`;

    return result.trim();
}
