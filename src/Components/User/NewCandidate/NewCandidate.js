import React, { Fragment, useState, useEffect } from 'react';
import MetaData from '../../MetaData/MetaData';
import './newCandidate.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './newCandidate.css';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { createCandidate, clearErrors } from '../../../Redux/actions/candidateAction';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import { NEW_CANDIDATE_RESET } from '../../../Redux/constants/candidateConstant';


const NewCandidate = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newCandidate);

  const { user } = useSelector(state => state.user)


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      history.push("/user/dashboard");
      dispatch({ type: NEW_CANDIDATE_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [passportExpiryDate, setPassportExpiryDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [trade, setTrade] = useState("");
  const [careOf, setCareOf] = useState("");
  const [status, setStatus] = useState("");
  const [passportImage1, setPassportImage1] = useState("");
  const [passportImage2, setPassportImage2] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [visaImageUrl, setVisaImageUrl] = useState("");
  const [cvImageUrl, setCvImageUrl] = useState("");
  const [cnicImageUrl, setCnicImageUrl] = useState("");
  const [licenseImageUrl, setLicenseImageUrl] = useState("");



  const [stepMessage, setStepMessage] = useState("Details");

  const handleNext = () => {
    setStep(step + 1);
    setStepMessage("Documents");
  };

  const handlePrevious = () => {
    setStep(step - 1);
    setStepMessage("Details");
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("fatherName", fatherName);
    myForm.append("passportNo", passportNo);
    myForm.append("dateOfBirth", dateOfBirth);
    myForm.append("passportExpiryDate", passportExpiryDate);
    myForm.append("nationality", nationality);
    myForm.append("trade", trade);
    myForm.append("careOf", careOf);
    myForm.append("status", status);
    myForm.append("passportImage1", passportImage1);
    myForm.append("passportImage2", passportImage2);
    myForm.append("imageUrl", imageUrl);
    myForm.append("visaImageUrl", visaImageUrl);
    myForm.append("cvImageUrl", cvImageUrl);
    myForm.append("cnicImageUrl", cnicImageUrl);
    myForm.append("licenseImageUrl", licenseImageUrl);

    // @check values of the form
    // for (const [key, value] of myForm.entries()) {
    //   console.log(key, value);
    // }

    dispatch(createCandidate(myForm));

  };



  return (
    <Fragment>
      <MetaData title={'CREATE RECORD'} />
      <Sidebar role={user.role} />
      <Fragment>
        <h1>{stepMessage}</h1>
        <Form
          onSubmit={handleSubmit}
        >
          {step === 1 && (
            <div className='container'>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="fatherName">
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fatherName"
                      value={fatherName}
                      onChange={(event) => setFatherName(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="passportNo">
                    <Form.Label>Passport No.</Form.Label>
                    <Form.Control
                      type="text"
                      name="passportNo"
                      value={passportNo}
                      onChange={(event) => setPassportNo(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="dateOfBirth">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control
                      type="text"
                      name="dateOfBirth"
                      value={dateOfBirth}
                      onChange={(event) => setDateOfBirth(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="passportExpiryDate">
                    <Form.Label>Passport Exp. Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="passportExpiryDate"
                      value={passportExpiryDate}
                      onChange={(event) => setPassportExpiryDate(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="nationality">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control
                      type="text"
                      name="nationality"
                      value={nationality}
                      onChange={(event) => setNationality(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="trade">
                    <Form.Label>Trade</Form.Label>
                    <Form.Control
                      type="text"
                      name="trade"
                      value={trade}
                      onChange={(event) => setTrade(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="careOf">
                    <Form.Label>Care Of</Form.Label>
                    <Form.Control
                      type="text"
                      name="careOf"
                      value={careOf}
                      onChange={(event) => setCareOf(event.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      type="text"
                      name="status"
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                    />
                  </Form.Group>
                </Col>


              </Row>

              <Button className='mt-4' onClick={handleNext}>
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <Form.Group controlId="passportImage1">
                <Form.Label>passportImage1</Form.Label>
                <Form.Control
                  type="file"
                  name="passportImage1"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setPassportImage1(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="passportImage2">
                <Form.Label>passportImage2</Form.Label>
                <Form.Control
                  type="file"
                  name="passportImage2"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setPassportImage2(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="imageUrl">
                <Form.Label>imageUrl</Form.Label>
                <Form.Control
                  type="file"
                  name="imageUrl"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setImageUrl(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="visaImageUrl">
                <Form.Label>visaImageUrl</Form.Label>
                <Form.Control
                  type="file"
                  name="visaImageUrl"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setVisaImageUrl(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="cvImageUrl">
                <Form.Label>cvImageUrl</Form.Label>
                <Form.Control
                  type="file"
                  name="cvImageUrl"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setCvImageUrl(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="cnicImageUrl">
                <Form.Label>cnicImageUrl</Form.Label>
                <Form.Control
                  type="file"
                  name="cnicImageUrl"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setCnicImageUrl(event.target.files[0])}
                />
              </Form.Group>

              <Form.Group controlId="licenseImageUrl">
                <Form.Label>licenseImageUrl</Form.Label>
                <Form.Control
                  type="file"
                  name="licenseImageUrl"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(event) => setLicenseImageUrl(event.target.files[0])}
                />
              </Form.Group>

              <Button variant="primary" onClick={handlePrevious}>
                Previous
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          )}
        </Form>
      </Fragment>
    </Fragment>
  )
}

export default NewCandidate