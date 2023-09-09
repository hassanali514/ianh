import React, { Fragment, useEffect } from "react"
import MetaData from "../../MetaData/MetaData"
import Sidebar from "../../Layout/Sidebar/Sidebar";
import './candidate.css';
import { useSelector, useDispatch } from "react-redux";
import { getAllCandidates, getCandidateDetails } from '../../../Redux/actions/candidateAction';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Button } from "@mui/material";
import { downloadFile } from "../../../Redux/actions/userAction";
import { useAlert } from "react-alert";
import Carousel from "react-material-ui-carousel";
import { useHistory } from "react-router-dom"
import {FaDownload} from "react-icons/fa"
import {AiFillEye} from "react-icons/ai"

const MyCustomActionsCell = ({ data, onClickDownload, onClickAction2 }) => {
  return (
    <div>
      <button onClick={() => onClickDownload(data.value)}><FaDownload/></button>
      <button onClick={() => onClickAction2(data.row)}><AiFillEye/></button>
    </div>
  );
};


const Candidate = () => {

  const dispatch = useDispatch();

  const alert = useAlert();

  const history = useHistory();


  const { candidates } = useSelector(state => state.allCandidates);
  const { user } = useSelector(state => state.user);




  useEffect(() => {
    dispatch(getAllCandidates());
  }, [])


  const handleClick = (data, val) => {
    // dispatch(getCandidateDetails(data.id));
    // console.log(candidate)
    // dispatch(downloadFile(data.value,alert));
    history.push(`/user/candidate/${data.id}/${val}`);
  }

  return (
    <Fragment>
      <MetaData title={'CANDIDATES'} />
      <Sidebar role={user.role} />
      <Fragment>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={
              candidates.map((candidate) => {
                return {
                  id: candidate._id,
                  NAME: candidate.name,
                  FATHER_NAME: candidate.fatherName,
                  PASSPORT_NO: candidate.passportNo,
                  DATE_OF_BIRTH: candidate.dateOfBirth,
                  PASSPORT_EXPIRY_DATE: candidate.passportExpiryDate,
                  NATIONALITY: candidate.nationality,
                  TRADE: candidate.trade,
                  CARE_OF: candidate.careOf,
                  STATUS: candidate.status,
                  OWNER: candidate.owner,
                  PASSPORT_IMAGE1: candidate.passportImage1,
                  PASSPORT_IMAGE2: candidate.passportImage2,
                  IMAGE_URL: candidate.imageUrl,
                  VISA_IMAGE_URL: candidate.visaImageUrl,
                  CV_IMAGE_URL: candidate.cvImageUrl,
                  CNIC_IMAGE_URL: candidate.cnicImageUrl,
                  LICENSE_IMAGE_URL: candidate.licenseImageUrl,
                  CREATED_AT: candidate.createdAt,

                }
              })
            }
            columns={
              [
                { field: 'NAME', hideable: false },
                { field: 'FATHER_NAME', headerName: "FATHER NAME", hideable: false },
                { field: 'PASSPORT_NO', headerName: "P NO#", hideable: false },
                { field: 'DATE_OF_BIRTH', headerName: "DOB" },
                { field: 'PASSPORT_EXPIRY_DATE', headerName: "PED" },
                { field: 'NATIONALITY' },
                { field: 'TRADE' },
                { field: 'CARE_OF', headerName: "CO" },
                { field: 'STATUS' },
                { field: 'OWNER' },
                {
                  field: 'PASSPORT_IMAGE1',
                  headerName: "PI1",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                {
                  field: 'PASSPORT_IMAGE2',
                  headerName: "PI2",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                {
                  field: 'IMAGE_URL',
                  headerName: "IMAGE",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                {
                  field: 'VISA_IMAGE_URL',
                  headerName: "VISA",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                {
                  field: 'CV_IMAGE_URL',
                  headerName: "CV",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                {
                  field: 'CNIC_IMAGE_URL',
                  headerName: "CNIC",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                {
                  field: 'LICENSE_IMAGE_URL',
                  headerName: "LICENSE",
                  renderCell: (params) => (
                    <MyCustomActionsCell
                      data={params}
                      onClickDownload={(value) => {
                        dispatch(downloadFile(value,alert))
                      }}
                      onClickAction2={(row) => {
                        // Define the logic for Action 2 here, using the data in 'row'
                        console.log('Action 2 clicked for row:', row);
                      }}
                    />
                  ),
                },
                { field: 'CREATED_AT', headerName: "CREATED AT" },



              ]
            }
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </div>
      </Fragment>
    </Fragment>
  )
}

export default Candidate