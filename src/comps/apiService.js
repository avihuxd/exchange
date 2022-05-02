import React, { useState } from 'react'

export default function ApiService(props) {
    const [ar, setAr] = useState([]);
    const doApi = async () => {
        try {
            let url = "/money.json";
            let resp = await fetch(url);
            let data = await resp.json();
            let quotes = data.quotes;
            let temp_ar = [];
            for (let key in quotes) {
                key = key.substring(3);
                temp_ar.push({ currency: key, value: quotes[key] })
            }
            setAr(temp_ar);
        }

        catch (err) {
            console.log(err);
            alert("Problem connection, please try again later")
            return err;
        }
    }


}
