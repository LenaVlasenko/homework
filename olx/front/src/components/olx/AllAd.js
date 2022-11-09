import CreateAd from "./CreateAd";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function AllAd(){

    const [ad, setAd] = useState([])

        const loadAd = function (){
            fetch("http://localhost:3333/api" + "/ad", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('jwtToken')

                }
            })
                .then(res => {
                    //console.log(res)
                    if (res.status !== 200){
                        toast.error("Ошибка")
                        return null
                    }
                    return res.json()
                })
                .then(data =>{
                    if (data === null) {
                        // Ответ от сервера с ошибкой
                        console.log("Я ничего не делаю")
                        return
                    }
                    toast.success("Вы успешно получили обьявление")
                    console.log(data)
                    setAd(data)
                })
                .catch(err=>{
                    console.log(err)
                    toast.error(err)
                })

        }

    useEffect(() => {
        loadAd()
    }, [])



    return (
        <>

        </>
    )
}