import React, { useState } from 'react'
import './header.css'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { FaEllipsisV } from 'react-icons/fa'
import Toast from 'react-bootstrap/Toast';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { userLogout } from '../../../Redux/actions/userAction';
import {useAlert} from 'react-alert';


const Header = ({ handleShow }) => {

    const { user } = useSelector(state => state.user)
    const [showA, setShowA] = useState(false);
    const dispatch = useDispatch();
    const alert = useAlert();

    const toggleShowA = () => setShowA(!showA);

    const handleLogout = () => {
        dispatch(userLogout(alert));
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={6} md={8} lg={8}>
                    <Button onClick={handleShow}>
                        <AiOutlineMenuUnfold />
                    </Button>
                </Col>
                <Col xs={6} md={4} lg={4}>
                    <div className='d-flex justify-content-end'>
                        <div className='col-xs-9'>{user.name}</div>
                        <div className='col-xs-3'>
                            <Button onClick={toggleShowA}>
                                <FaEllipsisV />
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-end toast-part'>
                <Toast show={showA} onClose={toggleShowA} style={{ zIndex: 9999, position: 'absolute', width: '30vmin' }}>
                    <Toast.Body>
                        <Nav className="flex-column">
                            <Link className="nav-link" >Reset Password</Link>
                            <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                            <Link className="nav-link" >Profile</Link>
                        </Nav>
                    </Toast.Body>
                </Toast>
            </div>
        </Container>
    )
}

export default Header