import React, {useCallback, useEffect, useState} from 'react';
import ProbaImage from "./ProbaImage";
import ProbaComponents from "./ProbaComponents";
import ProbaCard from "./ProbaCard";
import axios from "axios";
import ProbaListProjects from "./ProbaListProjects";

const Proba = () => {
    const [card, setCard] = useState([])
    const [images, setImages] = useState([])
    const [components, setComponents] = useState([])
    const [cardProduct, setCardProduct] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setCardProduct({
            ...cardProduct,
            images,
            components,
            name: card.name,
            project: card.project,
            price: card.price,
            nameEn: card.nameEN,
            nameRS: card.nameRS,
            nameRU: card.nameRU
        })
    }, [images, components, card])

    const  getProjects = useCallback( async () => {
        try {
            await axios.get('/api', {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => setProjects(response.data))
        }catch (error){
            console.log(error)
        }
    }, [])

    useEffect(()=>{
        getProjects()
    }, [])

    const onClickServer = async () => {
        try {
            await axios.post('/api/addmainfull', {...cardProduct}, {
                headers: {'Content-Type': 'application/json'}
            })
                .then(()=> getProjects())

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-row p-4">
            <div className="w-3/4">
                <ProbaListProjects
                    projects={projects}
                    setProjects={setProjects}
                />
            </div>
            <div className="w-1/4">
                <div className="h-auto">
                    <button
                        className="bg-green-600 hover:bg-red-700 hover:text-white h-auto rounded-2xl w-1/3 m-4"
                        onClick={onClickServer}
                    >PRESS
                    </button>
                </div>
                <div className="h-auto">
                    <ProbaCard card={card} setCard={setCard}/>
                </div>
                <div className="h-auto mb-4">
                    <ProbaImage setImages={setImages} images={images}/>
                </div>
                <div className="h-auto">
                    <ProbaComponents components={components} setComponents={setComponents}/>
                </div>
            </div>

        </div>
    );
};

export default Proba;