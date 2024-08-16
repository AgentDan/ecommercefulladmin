import React, {Suspense} from 'react'
import {RenderElements} from "./RenderElements.jsx"
import Box from "./Box.jsx"

const RenderBlockNew = ({myElements}) => {
    return (
        <>

            <Suspense fallback={<Box/>}>
                {
                    myElements.map((t) => {
                        return (
                            t.check && <RenderElements myPath={t.file}/>
                        )
                    })
                }
            </Suspense>
        </>
    )
}

export default RenderBlockNew;