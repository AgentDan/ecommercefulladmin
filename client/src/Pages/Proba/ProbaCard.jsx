import React from 'react'

const ProbaCard = ({card, setCard}) => {

    const onChange = (e) => {
        setCard({...card, [e.target.name]: e.target.value})
    }

    return (
        <div className="h-auto w-auto p-4">
            <div className="pl-4 mb-2 bg-gray-500 text-white">
                Card:
            </div>
            <div>
                <div className="h-auto">
                    <input className="border-2"
                           onChange={onChange}
                           type="text"
                           name="project"
                           placeholder={"Project"}
                    />
                </div>
                <div className="h-auto">
                    <input className="border-2"
                           onChange={onChange}
                           type="text"
                           name="name"
                           placeholder={"Name"}
                    />
                </div>
                <div className="h-auto">
                    <input className="border-2"
                           onChange={onChange}
                           type="text"
                           name="price"
                           placeholder={"Price"}
                    />
                </div>
                <div className="h-auto">
                    <input className="border-2"
                           onChange={onChange}
                           type="text"
                           name="nameEN"
                           placeholder={"NameEN"}
                    />
                </div>
                <div className="h-auto">
                    <input className="border-2"
                           onChange={onChange}
                           type="text"
                           name="nameRS"
                           placeholder={"NameRS"}
                    />
                </div>
                <div className="h-auto">
                    <input className="border-2"
                           onChange={onChange}
                           type="text"
                           name="nameRU"
                           placeholder={"NameRU"}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProbaCard;