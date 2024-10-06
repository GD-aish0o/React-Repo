import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res.rates) {
                    setData(res.rates);  // Set the rates object
                }
            });
    }, [currency]);

    return data;  // This now returns an object of currencies and their rates
}