import React, { Component } from 'react'
import './index.css'
import { Container, Row, Col, Form, FormGroup, Label, Button, Card, CardBody, CardTitle, Alert} from 'reactstrap';  
import { Link } from 'react-router-dom'
import route from '../../store/router'
import { auth }from '../../store/firebase'

class Register extends Component { 
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.email = null
        this.password = null
        this.state = {
            isLoggedIn: false,
            error: false,
            isLogging: false
        }
    }
    register(){
        this.setState({ isLogging: true, error: false})
        auth.createUserWithEmailAndPassword(this.email.value,this.password.value).then((user)=>{
            this.setState({
                isLoggedIn: true
            })
        }).catch((error)=>{
            console.log(error);
            this.setState({
                error: true,
                isLogging: false
            })
        })
    }
    render() {
        return (
        <div>
            <Container> 
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className='margin-card-login'>
                        {       
                            this.state.error &&
                                <Alert color="danger">
                                    Email e/ou senha invalidos
                                </Alert>
                        }
                        <Card>
                            <CardBody>
                                <CardTitle>Cadastar</CardTitle> 
                                <Form>
                                    <FormGroup>
                                        <Label for="examplePassword">E-mail:</Label>
                                        <input type="text" ref={ref => this.email = ref} placeholder="Senha" className='form-control' />
                                    </FormGroup> 
                                    <FormGroup>
                                        <Label for="examplePassword">Senha:</Label>
                                        <input type="password" ref={ref => this.password = ref} placeholder="Senha" className='form-control' />
                                    </FormGroup> 
                                    <FormGroup>
                                        <Link to={route.LOGIN}>
                                            Já tenho um conta.
                                        </Link>  
                                    </FormGroup> 
                                    <Button disabled={this.state.isLogging} color="success" onClick={this.register}>Cadastrar</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default Register
