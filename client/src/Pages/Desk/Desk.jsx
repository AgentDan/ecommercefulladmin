import ReactCardFlip from "react-card-flip"
import React, {useCallback, useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import Contacts from "../Contacts/Contacts"
import {Menu} from "../Menu/Menu"
import axios from "axios"

const Desk = ({project, currentLang}) => {
    const [stateFull, setStateFull] = useState([])
    const [stateCards, setStateCards] = useState([])
    console.log("STATE CARDS: ", stateCards)

    // const getCards = useCallback(async () => {
    //     try {
    //         await axios.get(`/api/cards/${currentProject}`,{
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //             // .then((response) => setStateGlobal(response.data))
    //             .then((response) => console.log(response.data))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [stateGlobal])


    const getState = useCallback(async () => {
        try {
            await axios.get('/api/', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setStateFull(response.data))
        } catch (error) {
            console.log( error)
        }
    }, [])

    useEffect(() => {
        getState()
    }, [])

    const a = []
    useEffect(() => {
        if (stateFull !==undefined)  {stateFull.map((t) => t.project === project ? a.push(t) : "")}
        setStateCards(a)
    }, [stateFull])

    const clickFlipped = (id, check) => {
        setStateFull(stateCards.map(t => t._id === id ? {...t, check} : t))
    }
    const [open, setOpen] = useState(false)
    const [fullScreenImgPath, setFullScreenImgPath] = useState("")
    const onClickFullScreenImg = (pathFullScreenImg) => {
        setOpen(true)
        setFullScreenImgPath(pathFullScreenImg)
    }
    const onClickImages = (idComp) => {
        setStateFull(stateCards.map(t => t._id !== idComp
                ? t
                : t.imagesCounter > t.images.length-2
                    ? {...t, imagesCounter: 0}
                    : {...t, imagesCounter: t.imagesCounter + 1}
            )
        )
    }

    const comp =
        stateCards.map((i, index) => {

            const onClickButton = () => {
                clickFlipped(i._id, !i.check)
            }

            return (
                <div key={i._id}>
                    {i.images[0] ?
                        <ReactCardFlip isFlipped={i.check} flipDirection={"horizontal"}>
                            <div className="card h-3/4 bg-white p-2">
                                <div className="p-5 flex flex-col ">
                                    <div className="rounded-xl overflow-hidden ">
                                        <img src={'./fotos/' + i.images[i.imagesCounter]} alt=""
                                             className="h-auto w-auto "
                                             onClick={() => onClickFullScreenImg('./fotos/' + i.images[i.imagesCounter])}
                                        />
                                    </div>

                                    <div className="h-auto flex flex-row gap-2 p-2">
                                        <div
                                            className="h-auto w-1/2 rounded-lg bg-gray-500 text-white content-center text-center text-2xl cursor-pointer"
                                            onClick={() => onClickImages(i._id)}
                                        >
                                            IMAGES
                                        </div>
                                        <Link to={`/project/${i._id}/`}
                                              className="h-12 w-1/2 text-2xl text-white pt-1 content-center text-center cursor-pointer bg-blue-600 rounded-lg"
                                        >
                                            <span className="text-3xs">3D models </span>
                                        </Link>
                                    </div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-12 text-center text-white py-2 rounded-lg text-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
                                    </a>
                                </div>
                            </div>
                            <div className="card h-3/4 bg-white">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={'./fotos/' + i.images[0]} alt=""
                                             alt=""
                                             className="h-auto w-auto "
                                             onClick={() => onClickFullScreenImg('./fotos/' + i.images[0])}
                                        />
                                    </div>
                                    <div
                                        className="h-12 text-3xl font-bold pt-1 text-center rounded-lg">
                                        {i.price} {'\u20AC'}
                                    </div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
                                    </a>
                                </div>
                            </div>
                        </ReactCardFlip>
                        : ""
                    }
                </div>
            )
        })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="mt-0 w-screen h-16 fixed fixed-row right-1 backdrop-blur-sm bg-gray-500/50 z-20"></div>
            <Contacts/>
            <Menu currentLang={currentLang}/>
            <div className="flex items-center justify-center mx-auto h-auto w-screen bg-yellow-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-2 mt-12 gap-16">

                    {comp}

                    <div
                        onClick={() => setOpen(false)}
                        className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/80" : "invisible"} `}
                    >
                        <img src={fullScreenImgPath} alt="" className="md:h-full md:w-auto "/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Desk