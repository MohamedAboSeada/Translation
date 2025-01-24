import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from 'react-query';
import { getTranslation } from "../util/util";
import debounce from 'lodash.debounce';

const TranslateContext = createContext();

export function TranslateProvider({ children }) {
	const [translateText, setTranslateText] = useState("Hello, World!");
	const [debouncedText,setDebouncedText] = useState("Hello, World!");
	const [from, setFrom] = useState("en");
	const [to, setTo] = useState("ar");
	
	useEffect(() => {
		const debounceHandle = debounce(() => {
			setDebouncedText(translateText);
		},500);
		debounceHandle();
		return () => debounceHandle.cancel();
	},[translateText])

	const {
		isLoading,
		isError,
		error,
		data: translatedText,
		refetch,
	} = useQuery(
		["Translation", debouncedText, from, to],
		() => getTranslation(debouncedText ,from, to),
		{
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			enabled: !!debouncedText, // Only fetch if `translateText` is not empty
			select: (data) => {
				if (data?.responseData?.translatedText) {
					return data.responseData.translatedText;
				}
				throw new Error("Invalid response structure.");
			},
		}
	);

	const handleSwap = () => {		
		if(translatedText){
			setFrom(to);
			setTo(from);
			setTranslateText(translatedText);
		}
	};

	return (
		<TranslateContext.Provider
			value={{
				handleSwap,
				from,
				to,
				setFrom,
				setTo,
				translateText,
				setTranslateText,
				translatedText,
				refetch,
				isLoading,
				isError,
				error,
			}}
		>
			{children}
		</TranslateContext.Provider>
	);
}

export function useTranslateContext() {
	return useContext(TranslateContext);
}