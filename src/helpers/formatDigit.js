export const formatDigit = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDollar = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(labelValue));
};

export const formatBillion = (value) => {
  return (Math.abs(Number(value)) / 1.0e9).toFixed(2);
};

export const formatMillion = (value) => {
  return (Math.abs(Number(value)) / 1.0e6).toFixed(2);
};

export const formatRupiah = (value) => {
  if (!value) return null;
  value = value?.toString();
  let number_string = value?.replace(/[^,\d]/g, '')?.toString(),
    split = number_string?.split(','),
    sisa = split[0]?.length % 3,
    rupiah = split[0]?.substr(0, sisa),
    ribuan = split[0]?.substr(sisa)?.match(/\d{3}/gi);

  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan?.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return rupiah;
};

export const formatRupiahV2 = (value) => {
  return String(value)
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3}\B)/g, '$1.')
    .split('')
    .reverse()
    .join('')
    .replace(/\.00$/, '');
};
