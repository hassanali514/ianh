import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav'
import { AiOutlineMenuFold } from 'react-icons/ai'
import './sidebar.css';
import Header from '../Header/Header';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { userLogout } from '../../../Redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';


function Sidebar({ role }) {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const alert = useAlert();

    // const { error, loading, isAuthenticated, user } = useSelector(state => state.user)
    // console.log(user);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();

    const handleLogout = () => {
        dispatch(userLogout(alert));
    }

    return (
        <>
            <Header handleShow={handleShow} />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    <Button variant="link" onClick={handleClose}>
                        <AiOutlineMenuFold />
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/dashboard" className="flex-column">
                        {role === 'admin' && <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>}
                        {role === 'admin' && <Link className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`} to="/register">Register User</Link>}
                        {role === 'admin' && <Link className={`nav-link ${location.pathname === '/user/all/users' ? 'active' : ''}`} to="/user/all/users">User List</Link>}
                        {role === 'user' && <Link className={`nav-link ${location.pathname === '/user/dashboard' ? 'active' : ''}`} to="/user/dashboard">Dashboard</Link>}
                        {role === 'user' && <Link className={`nav-link ${location.pathname === '/user/new/candidate' ? 'active' : ''}`} to="/user/new/candidate">New Candidate</Link>}
                        {role === 'user' && <Link className={`nav-link ${location.pathname === '/user/candidate' ? 'active' : ''}`} to="/user/candidate">Candidate</Link>}
                        <Link className={`nav-link ${location.pathname === '/mytask' ? 'active' : ''}`} onClick={handleLogout}>Logout</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;