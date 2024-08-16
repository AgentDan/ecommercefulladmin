import React, {useCallback, useEffect, useState} from 'react'
import {v1} from "uuid"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const AdminCards = ({
                        currentCards,
                        localCard,
                        currentProject,
                        setLocalCard,
                        setCurrentCards
                    }) => {
    const navigate = useNavigate()

    const getCards = useCallback(async () => {
        try {
            await axios.get(`/api/cards/${currentProject}`,{
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setCurrentCards(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    const onClickDeleteCard = useCallback(async (id) => {
        try {
            await axios.delete(`/api/delcard/${id}`, {id}, {
                headers: {'Content-Type': 'application/json'}
            })
                .then((response) => setCurrentCards(response.data))

        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(()=>{
        getCards()
    }, [currentProject])

    const onClickCards = (t) => {
        const localCard = JSON.stringify(t)
        localStorage.setItem("upload", localCard)
        setLocalCard(t)
        navigate('/admin197908/upload')
    }

    return (
        <>
            <div
                key={v1()}
                className="h-10 w-auto content-end text-xl bg-white "
            >
                Cards:
            </div>
            <div className="text-xs text-white h-auto flex flex-wrap justify-start ">

                {currentCards ? currentCards.map((t) => {
                        return (
                            <div key={v1()}
                                 className={`w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left cursor-pointer relative `}
                            >
                                <div
                                    className={`h-auto w-auto text-xl px-2 rounded-tl-2xl rounded-bl-2xl bg-gray-400 top-0 left-0 hover:bg-green-700 ${localCard && localCard._id === t._id ? "bg-green-700" : ""}`}
                                    onClick={() => onClickCards(t)}
                                >
                                    {t.name}
                                </div>
                                <span
                                    className="bg-red-300 h-7 w-6 text-xl text-center content-center rounded-tr-2xl rounded-br-2xl absolute top-0 right-0 hover:bg-red-700"
                                    onClick={() => onClickDeleteCard(t._id)}
                                >
                                    X
                                </span>
                            </div>
                        )
                    }
                ) : ""
                }

            </div>

        </>
    );
};

export default AdminCards;