import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import {
    getAllUsers,
    clearErrors,
} from "../../../Redux/actions/userAction";

const CountButton = (props) => {
    // console.log("props.data",props.data.row.STATUS)
    const [Status, setStatus] = React.useState(props.data.row.STATUS);

    return (
        <Button onClick={() => setStatus(!Status)}>{
            Status ? 'Active' : 'DeActive'
        }</Button>
    );
};


const AllUsers = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const alert = useAlert();

    const { error, users: allUsersList } = useSelector((state) => state.allUsers);

    const { user } = useSelector((state) => state.user);

    // console.log("users", allUsersList);

    // useEffect(() => {
    //     if (error) {
    //         alert.error(error);
    //         dispatch(clearErrors());
    //     }

    //     dispatch(getAllUsers());
    // }, [dispatch, alert, error, history]);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <Fragment>
            <MetaData title={`ALL USERS`} />
            <Sidebar role={user.role} />
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                    rows={
                        allUsersList.map((user) => {
                            return {
                                id: user._id,
                                USER_NAME: user.userName,
                                NAME: user.name,
                                ORIGIN: user.origin,
                                ROLE: user.role,
                                STATUS: user.active
                            }
                        })
                    }
                    columns={
                        [
                            { field: 'USER_NAME', headerName: 'USER NAME' },
                            { field: 'NAME' },
                            { field: 'ORIGIN' },
                            { field: 'ROLE' },
                            { field: 'STATUS', renderCell: (data) => <CountButton data={data} /> }
                        ]
                    }
                />
            </div>
        </Fragment>
    );
};

export default AllUsers;