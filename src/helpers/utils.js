import { isObject } from "lodash";
import axiosBookAppointment from "./axiosBookAppointment";

export const formatDate = (str, isDay = true, format = "dd MMMM yyyy") => {
	if (typeof str !== "string") return false;
	const date = new Date(str);
	const days = [
		"Minggu",
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jum'at",
		"Sabtu",
	];
	const months = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];
	const getDay = days[date.getDay()];
	let tempDate = "";
	if (format === "MMMM yyyy") {
		tempDate = `${months[date.getMonth()]} ${date.getFullYear()}`;
	} else if (format === "dd-mm-yyyy") {
		tempDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	} else {
		tempDate = `${date.getDate()} ${
			months[date.getMonth()]
		} ${date.getFullYear()}`;
	}
	const result = isDay && `${getDay}, ${tempDate}`;
	return result || tempDate;
};

export const formatDateAsData = (value) => {
	if (!value) return false;
	const d = new Date(value);
	const yyyy = d.getFullYear();
	let mm = d.getMonth() + 1;
	let dd = d.getDate();
	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;
	return yyyy + "-" + mm + "-" + dd;
};

export const formatDateTimeAsData = (value) => {
	if (!value) return false;
	const d = new Date(value.replace("Z", ""));
	const yyyy = d.getFullYear();
	let mm = d.getMonth() + 1;
	let dd = d.getDate();
	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;
	let hh = d.getHours();
	let minutes = d.getMinutes();
	let ss = d.getSeconds();

	return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + minutes + ":" + ss;
};

export const isNumber = (value) => {
	return /^[0-9]+$/.test(value);
};

export const isCharacterALetter = (char) => {
	return /^[A-Za-z\s]*$/.test(char);
};

export const terbilang = (value) => {
	const separation = value.toString().split(".");
	// return separation.length
	const bilne = [
		"",
		"satu",
		"dua",
		"tiga",
		"empat",
		"lima",
		"enam",
		"tujuh",
		"delapan",
		"sembilan",
		"sepuluh",
		"sebelas",
	];
	if (separation.length > 1) {
		const terbilangPrefix = terbilang(parseInt(separation[0]));
		const terbilangKoma = terbilang(parseInt(separation[1]));
		return terbilangPrefix + " koma " + terbilangKoma;
	}
	if (value < 12) {
		return bilne[value];
	} else if (value < 20) {
		return terbilang(value - 10) + " belas";
	} else if (value < 100) {
		return (
			terbilang(Math.floor(parseInt(value) / 10)) +
			" puluh " +
			terbilang(parseInt(value) % 10)
		);
	} else if (value < 200) {
		return "seratus " + terbilang(parseInt(value) - 100);
	} else if (value < 1000) {
		return (
			terbilang(Math.floor(parseInt(value) / 100)) +
			" ratus " +
			terbilang(parseInt(value) % 100)
		);
	} else if (value < 2000) {
		return "seribu " + terbilang(parseInt(value) - 1000);
	} else if (value < 1000000) {
		return (
			terbilang(Math.floor(parseInt(value) / 1000)) +
			" ribu " +
			terbilang(parseInt(value) % 1000)
		);
	} else if (value < 1000000000) {
		return (
			terbilang(Math.floor(parseInt(value) / 1000000)) +
			" juta " +
			terbilang(parseInt(value) % 1000000)
		);
	} else if (value < 1000000000000) {
		return (
			terbilang(Math.floor(parseInt(value) / 1000000000)) +
			" milyar " +
			terbilang(parseInt(value) % 1000000000)
		);
	} else if (value < 1000000000000000) {
		return (
			terbilang(Math.floor(parseInt(value) / 1000000000000)) +
			" trilyun " +
			terbilang(parseInt(value) % 1000000000000)
		);
	}
};

export const formatNumber = (value) => {
	return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
};

export const getMonth = (value) => {
	const months = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];

	return months[value - 1];
};
export const rupiah = (value, locale = "id-Id") => {
	if (!value || isNaN(value)) return 0;
	const currency = new Intl.NumberFormat(locale);
	return currency.format(value);
};

export const separator = (value) => {
	return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
};

export const removeDelimiter = (value) => {
	return value ? value.toString().replace(/\,/g, "") : 0;
};

export const removeNonNumeric = (value) => {
	return value ? value.toString().replace(/[^0-9]/g, "") : "";
};

export const accountingNegative = (value) => {
	return value < 0 ? `(${Math.abs(value)})` : value;
};

export const formatDateGMT7 = (value) => {
	if (!value) {
		return null;
	} else {
		const date = new Date(value);
		const formatter = new Intl.DateTimeFormat("id", {
			timeStyle: "short",
			dateStyle: "short",
			timeZone: "Asia/Jakarta",
		});
		return formatter.format(date);
	}
};

export const blockInvalidCharNumber = (event) =>
	["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

export class CurrencyParser {
	constructor(locale = "id-ID") {
		const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
		const numerals = [
			...new Intl.NumberFormat(locale, { useGrouping: false }).format(
				9876543210
			),
		].reverse();
		const index = new Map(numerals.map((d, i) => [d, i]));
		this._group = new RegExp(
			`[${parts.find((d) => d.type === "group").value}]`,
			"g"
		);
		this._decimal = new RegExp(
			`[${parts.find((d) => d.type === "decimal").value}]`
		);
		this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
		this._index = (d) => index.get(d);
	}
	parse(string) {
		if (!string) return;
		return (string = string
			.toString()
			.trim()
			.replace(this._group, "")
			.replace(this._decimal, ".")
			.replace(this._numeral, this._index))
			? +string
			: NaN;
	}
}

export function formAddLog(formObject, args = "") {
	/**
	 *? this function add 2 keys for any body data before sending
	 *? this function will add createdBy & updatedBy, and args for only send updatedBy
	 *   */

	if (!isObject(formObject) || (args && args !== "update")) return;
	const { fullName = "" } = JSON.parse(localStorage.getItem("user"));

	formObject.createdBy = fullName;
	formObject.updatedBy = fullName;

	if (args.toLowerCase() === "update") {
		delete formObject.createdBy;
	}

	return formObject;
}

export function getAge(dateString) {
	var now = new Date();
	var today = new Date(now.getYear(), now.getMonth(), now.getDate());

	var yearNow = now.getYear();
	var monthNow = now.getMonth();
	var dateNow = now.getDate();

	var dob = new Date(
		dateString.substring(6, 10),
		dateString.substring(0, 2) - 1,
		dateString.substring(3, 5)
	);

	var yearDob = dob.getYear();
	var monthDob = dob.getMonth();
	var dateDob = dob.getDate();

	let yearAge = yearNow - yearDob;

	if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
	else {
		yearAge--;
		var monthAge = 12 + monthNow - monthDob;
	}

	if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
	else {
		monthAge--;
		var dateAge = 31 + dateNow - dateDob;

		if (monthAge < 0) {
			monthAge = 11;
			yearAge--;
		}
	}

	return {
		years: yearAge >= 0 ? yearAge : 0,
		months: monthAge >= 0 ? monthAge : 0,
		days: dateAge >= 0 ? dateAge : 0,
	};
}

export function validatePhoneNumber(value) {
	/**
	 * ! this will return true / false only.
	 * ! this function's intended use is for antd validator
	 * ? https://codesandbox.io/s/9y5xtt?file=/demo.js
	 * value = nomor telpon ( start dari 08 / 62 )
	 * * /^(08|628)[1-9][0-9]{7,11}$/
	 * ^(08|628) start with 08 or 628
	 * [1-9] match with non 0 after 08 or 628
	 * [0-9] match with 0 to 9
	 * {7,11} length min 7 ~ 11 ( excluding 08 or 628 )
	 *
	 *   */
	if (!value || !/^(08|628)[1-9][0-9]{7,11}$/.test(value)) {
		return false;
	}
	return true;
}
