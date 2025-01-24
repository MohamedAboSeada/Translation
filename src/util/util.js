export async function getTranslation(translateText, from, to) {
	const apiEndpoint = "https://api.mymemory.translated.net/get";
	const params = new URLSearchParams({
		q: translateText, // Fixed: Use `translateText` instead of `translatedText`
		langpair: `${from}|${to}`,
		key: import.meta.env.APP_API_KEY,
	}).toString();

	const res = await fetch(`${apiEndpoint}?${params}`);
	if (!res.ok) {
		throw new Error("Failed to fetch translation data.");
	}
	const data = await res.json();
	return data;
}

export const TestRTL = (text) => {
	return /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(text);
};