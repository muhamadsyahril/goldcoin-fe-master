export const formatDate = (date) => {
	const fullDate = new Date(date);

	const formattedDate =
		fullDate.toLocaleString("en-US", {
			day: "2-digit",
		}) +
		" " +
		fullDate.toLocaleString("en-US", {
			month: "long",
		}) +
		" " +
		fullDate.toLocaleString("en-US", {
			year: "numeric",
		});

	return formattedDate;
};
