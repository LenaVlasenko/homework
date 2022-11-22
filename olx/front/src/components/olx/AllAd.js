import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import "./olxAd.css"


export default function AllAd(){

    const [ads, setAds] = useState([])
    const [user, setUser] = useState({name: "гость", _id: 0}) // по умолчанию у нас гость
    const [total, setTotal] = useState(null)
    const [page, setPage] = useState(1)
    const [per_page, setPerPage] = useState(2)

    const totalPages = Math.ceil(total / per_page)

    const loadAd = function (){
        //toast.error('?page=' + page + "&per_page" + per_page)
            fetch("http://localhost:3333/api"
                + "/ad?page=" + page + "&per_page" + per_page, {
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
                    //toast.success("Вы успешно получили обьявление")
                    console.log(data)
                    setTotal(data.total)// ВСего обьявлений
                    //setPage(data.page)// номер текущей страници
                    //setPerPage(data.per_page)// показывать на странице
                    setAds(data.data)// Обьявление???
                })
                .catch(err=>{
                    console.log(err)
                    toast.error(err)
                })

        }

    const deleteAd = function (ev){
        console.log("Start del")
        console.log(ev.target.value)
        let id = ev.target.value

        fetch("http://localhost:3333/api" + "/ad/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')

            }
        })
            .then(res => {
                if (res.status === 204){
                    toast.success(" Вы успешно удалили обьявление ")
                    loadAd()
                    return
                }
                toast.error(" Произошла ошибка ")

            })

            .catch(err=>{
                console.log(err)
                toast.error(err)
            })
    }

    // const updateAd = function (ev){
    //     console.log("Start update")
    //     console.log(ev.target.value)
    //     let id = ev.target.value
    //
    //     fetch("http://localhost:3333/api" + "/ad/" + id, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': localStorage.getItem('jwtToken')
    //
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 204){
    //                 toast.success(" Вы успешно обновили обьявление ")
    //                 loadAd()
    //                 return
    //             }
    //             toast.error(" Произошла ошибка ")
    //
    //         })
    //
    //         .catch(err=>{
    //             console.log(err)
    //             toast.error(err)
    //         })
    // }

    useEffect(() => {
        //console.log("Start restore ads")
        if( localStorage.getItem('user')){ // если есть данные по пользователю - востановить их
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        loadAd()
    }, [])

    const goPrev = function () {
        if (page > 1)
        {
            setPage(page - 1)
        } else {
            toast.info("Вы на первой странице")
        }

    }

    const goNext = function () {
        if (page < total / per_page){
            setPage(page+1)
        }else {
            toast.info("Вы на последней странице")
        }

    }

    useEffect(() => {
        loadAd()
    }, [page])

    const goPage = function (ev) {
        console.log(ev.target.dataset.pege)
        setPage(ev.target.dataset.pege)

    }

    const loadMore = function (){
        // //let newData page = page + 1
        // fetch("http://localhost:3333/api"
        //     + "/ad?page=" + page + "&per_page" + per_page, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'authorization': localStorage.getItem('jwtToken')
        //
        //     }
        // })
        //     .then(res => {
        //         //console.log(res)
        //         if (res.status !== 200){
        //             toast.error("Ошибка")
        //             return null
        //         }
        //         return res.json()
        //     })
        //     .then(data =>{
        //         if (data === null) {
        //             // Ответ от сервера с ошибкой
        //             console.log("Я ничего не делаю")
        //             return
        //         }
        //         //toast.success("Вы успешно получили обьявление")
        //         console.log(newData)
        //         setTotal(newData.total)// ВСего обьявлений
        //         //setPage(data.page)// номер текущей страници
        //         //setPerPage(data.per_page)// показывать на странице
        //         // loadPage - информация о том, какие страници я уже загрузил
        //         let havingData = ads
        //         havingData.append(newData.data) // ???
        //         setAds(havingData)// Обьявление???
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //         toast.error(err)
        //     })

    }



    return (
        <>
            <div>{user.name}</div>
            {/*<CreateAd></CreateAd>*/}
            <div> Page {page} Total: {total} Per_page:{per_page} : Total pages = {totalPages}</div>
            <ul>
                {ads.map(ad =>(
                    <li key={ad._id}>
                        <h4>{ad.title}</h4>
                        { ad.author_id === user._id ?<p><button> Edit </button> <button value={ad._id} onClick={deleteAd}> Delete </button></p> : "Не мое"}
                        {/*<p>{ad.message}</p>*/}
                        {/*<p>Цена: {ad.price} грн</p>*/}
                        {/*<p>Город: {ad.city}</p>*/}
                        {/*<p>Район: {ad.location}</p>*/}
                    </li>
                ))}
            </ul>

            <div onClick={loadMore}>Загрузить еще</div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={goPrev}> Previous </a></li>

                    {/*{[...Array(totalPages)].map((x, i) =>*/}
                    {/*    <li className="page-item"><a className="page-link" data-page={i+1} onClick={goPage}>{i+1}</a></li>*/}
                    {/*)}*/}

                    {(() => {
                        let li = [];
                        for (let i = 1; i <= totalPages; i++) {
                            li.push(<li className="page-item"><a className="page-link" data-page={i} onClick={goPage}>{i}</a></li>);
                        }
                        return li;
                    })()}

                    <li className="page-item"><a className="page-link" onClick={goNext}> Next </a></li>
                </ul>
            </nav>


        </>
    )
}