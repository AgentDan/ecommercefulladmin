import React from 'react'
import {RenderElements} from "./RenderElements";

const RenderElems = ({elems}) => {

    return (
        <>
            {
                elems.map((t) => {
                    return (
                        <RenderElements myPath={t}/>
                    )
                })
            }
        </>
    )
}

export default RenderElems