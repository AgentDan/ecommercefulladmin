import React, {useCallback} from 'react'
import {v1} from "uuid"
import axios from "axios"

const AdminCards = ({currentCards, setLocalCard, localCard, setStateGlobal}) => {

    const onClickDeleteCard = useCallback(async (id) => {
        try {
            await axios.delete(`/api/delcard/${id}`, {id}, {
                headers: {'Content-Type': 'application/json'}
            })
                // .then((response) => console.log(response.data))
                .then((response) => setStateGlobal(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div
                key={v1()}
                className="h-10 w-auto content-end text-xl bg-white "
            >
                Cards:
            </div>
            <div className="text-xs text-white h-auto flex flex-wrap justify-start ">

                {currentCards.map((t) => {
                        return (
                            <div key={v1()}
                                 className={`w-auto h-8 pr-6 m-1 rounded-2xl content-start border-2 border-black text-left cursor-pointer relative `}
                                 onClick={() => setLocalCard(t)}
                            >
                                <div
                                    className={`h-auto w-auto text-xl px-2 rounded-tl-2xl rounded-bl-2xl bg-gray-400 top-0 left-0 hover:bg-green-700 ${localCard && localCard._id === t._id ? "bg-green-700" : ""}`}>
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
                )
                }

            </div>

        </>
    );
};

export default AdminCards;