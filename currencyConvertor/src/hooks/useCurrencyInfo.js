import { useEffect, useState } from "react";

// custom hook: hook is a function which takes arr as input [var, fun]
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // useEffect used to show changes made from server 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo