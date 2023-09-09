import './newUser.css';
import React, { useState, Fragment, useRef, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom'
import MetaData from '../../MetaData/MetaData';
import { clearErrors,userRegister } from '../../../Redux/actions/userAction';
import Sidebar from '../../Layout/Sidebar/Sidebar';

const NewUser = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useHistory();
    const inputRef = useRef(null);

    const [registerUserName, setRegisterUserName] = useState("");
    const [registerUserOrigin, setRegisterUserOrigin] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const { error, loading, isAuthenticated, user } = useSelector(state => state.user)




    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        // if(isAuthenticated){
        //     if(user.role === "user"){
        //         history.push("/user/dashboard");
        //     }

        //     if(user.role === "admin")
        //     {
        //         history.push("/dashboard");
        //     }

        // }

    }, [dispatch, error, alert, isAuthenticated, history])

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userRegister(registerUserName,registerUserOrigin,registerName,registerPassword,alert));
    }

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <MetaData title={'REGISTER USER'} />
            <Sidebar role={user.role}/>
            <Form onSubmit={handleSubmit}>
                <Form.Group
                    className="mb-3"
                    controlId="username"
                >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        ref={inputRef}
                        type="username"
                        placeholder="Enter User Name"
                        name="username"
                        value={registerUserName}
                        onChange={(e) => setRegisterUserName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="origin"
                >
                    <Form.Label>Origin</Form.Label>
                    <Form.Control
                        type="origin"
                        placeholder="Enter Origin"
                        name="origin"
                        value={registerUserOrigin}
                        onChange={(e) => setRegisterUserOrigin(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="name"
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Name"
                        name="name"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button className='login-btn' type="submit">
                    Register
                </Button>
                <Button className='login-btn' onClick={handleGoBack}>
                    Go Back
                </Button>
            </Form>
        </Fragment>
    )
}

export default NewUser;