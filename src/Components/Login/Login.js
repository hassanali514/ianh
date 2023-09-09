import React, { useRef, useEffect, useState, Fragment } from 'react'
import './login.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../Assets/LoginContent/Carousal_image1.jpg';
import carousel2 from '../../Assets/LoginContent/Carousal_image2.jpg';
import carousel3 from '../../Assets/LoginContent/Carousal_image3.jpg';
import logo from '../../Assets/LoginContent/logo.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MetaData from '../MetaData/MetaData';
import { useDispatch, useSelector } from "react-redux"
import { userLogin, clearErrors } from '../../Redux/actions/userAction';
import { useAlert } from 'react-alert';
import Loader from '../Layout/Loader/Loader';
import {useHistory} from 'react-router-dom'


const Login = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const history = useHistory();
    const { error, loading, isAuthenticated,user } = useSelector(state => state.user)

    const inputRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if(isAuthenticated){
            if(user.role === "user"){
                history.push("/user/dashboard");
            }

            if(user.role === "admin")
            {
                history.push("/dashboard");
            }
            
        }

    }, [dispatch, error, alert, isAuthenticated,history])

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin(loginUserName,loginPassword,alert));
    }


    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'LOGIN'} />
                    <Container fluid className='login'>
                        <Row>
                            <Col sm={12} lg={6} className="left-side d-flex">
                                <div className='container d-flex justify-content-center align-items-center'>
                                    <Carousel>
                                        <Carousel.Item interval={1000}>
                                            <img
                                                className="d-block w-100"
                                                src={carousel1}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>HR Consultants</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img
                                                className="d-block w-100"
                                                src={carousel2}
                                                alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>Blue Color Jobs</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={carousel3}
                                                alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>White Color Jobs</h3>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Col>
                            <Col sm={12} lg={6} className='right-side d-flex'>
                                <div className='container d-flex flex-column justify-content-center align-items-center'>
                                    <div className='image-box'>
                                        <img src={logo} />
                                    </div>
                                    <div className='title'>
                                        <h3>Login</h3>
                                    </div>
                                    <div className='login-form'>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="username"
                                            >
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control
                                                    ref={inputRef}
                                                    type="text"
                                                    placeholder="Enter User Name"
                                                    name="username"
                                                    value={loginUserName}
                                                    onChange={(e) => setLoginUserName(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Password"
                                                        name="password"
                                                        value={loginPassword}
                                                        onChange={(e) => setLoginPassword(e.target.value)}
                                                        required
                                                    />
                                                    <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                                    </Button>
                                                </InputGroup>
                                            </Form.Group>
                                            <Button className='login-btn' type="submit">
                                                Login
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>}
        </Fragment>
    )
}

export default Login