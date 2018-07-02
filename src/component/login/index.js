import React, { Component } from 'react'
import './index.css'
import { Container, Row, Col, Form, FormGroup, Label, Button, Card, CardBody, CardTitle,Alert} from 'reactstrap'; 
import { Link ,Route,Redirect } from 'react-router-dom'
import route from '../../store/router'
import {auth} from '../../store/firebase'

class Login extends Component { 
    constructor(props){
        super(props);
        this.email = null
        this.passwd = null
        this.authentication = this.authentication.bind(this);        
        this.state = {
            isLoggedIn: false,
            error: false,
            isLogging: false
        }
    } 
    authentication(){
        this.setState({ isLogging: true, error: false})
        auth.signInWithEmailAndPassword(this.email.value, this.password.value).then((user)=>{
            this.setState({
                isLoggedIn: true
            })
        }).catch(err =>{
            console.log('error',err)
            this.setState({
                error: true,
                isLogging: false
            })
        })
    }
    render() {
        if(this.state.isLoggedIn){
            return <Redirect to='/admin' />
        }
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
                                <CardTitle>Login</CardTitle> 
                                <Form>
                                    <FormGroup>
                                        <Label for="examplePassword">E-mail:</Label>
                                        <input type="email" ref={ref => this.email = ref} placeholder="Senha" className='form-control' required />
                                    </FormGroup> 
                                    <FormGroup>
                                        <Label for="examplePassword">Senha:</Label>
                                        <input type="password" ref={ref => this.password = ref} placeholder="Senha" className='form-control' required/>
                                    </FormGroup> 
                                    <FormGroup>
                                        <Link to={route.REGISTER}>
                                            Não tem acesso?
                                        </Link>  
                                    </FormGroup> 
                                    <Button color="success" disabled={this.state.isLogging} onClick={this.authentication}>Entrar</Button>
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

export default Login
