import React, {useEffect, useState} from 'react'
import { getCandidateDetails } from '../../../Redux/actions/candidateAction'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "@mui/material";
import { downloadFile, viewFile } from '../../../Redux/actions/userAction';
import { useAlert } from "react-alert";



const CandidateDetail = ({ match }) => {

    const { candidate } = useSelector(state => state.candidateDetail);
    const { url } = useSelector(state => state.viewFilw);

    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(() => {
        dispatch(getCandidateDetails(match.params.id));
    },[])
    

    const handleDownload = () => {
        let str = match.params.val;
        // dispatch(downloadFile(candidate[str],alert));

        
        dispatch(viewFile(candidate[str],alert));
        // console.log(url)
    }

    return (
        <>
            <Button onClick={handleDownload}>download</Button>
        </>
    )
}

export default CandidateDetail