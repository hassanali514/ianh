import React from 'react'
import { ClipLoader } from 'react-spinners';
import './loader.css'


const Loader = ({color,loading,size,titleValue,titleShow,heightVal,...rest}) => {
    return (
        <div {...rest} style={{height:heightVal}}>
            <ClipLoader color={color} loading={loading} size={size} />
            <div style={{visibility: titleShow}}>{titleValue}</div>
        </div>
    )
}

export default Loader