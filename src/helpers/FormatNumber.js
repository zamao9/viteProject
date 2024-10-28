// src/helpers/FormatNumber.js
export function formatNumber(number) {
	return number.toLocaleString('en-US').replace(/,/g, "'");
}

export function formatNumberShort(number) {
	if (number >= 1_000_000) {
		return (number / 1_000_000).toFixed(1) + 'M';
	} else if (number >= 1_000) {
		return (number / 1_000).toFixed(1) + 'K';
	} else {
		return number.toString();
	}
}
