import {useEffect} from 'react';
import axios from 'axios';

const url = 'https://course-api.com/react-store-products';
const GetReq = ()=>{
    const fetchData = async()=>{
        const response = await axios(url);
        const data = response.data;
        console.log(data);
    }

    useEffect(()=>{
        fetchData();
    },[]);

}

export default GetReq;