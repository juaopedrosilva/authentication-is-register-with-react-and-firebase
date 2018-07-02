import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Route,Redirect } from 'react-router-dom'
import { auth }from '../../store/firebase'

class Admin extends Component {
  constructor(props){
    super(props)
    this.signOut = this.signOut.bind(this);
    this.state = {
        isAuthing: true,
        isLoggedIn: false,
        user: null,
    }
  }
  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user, //Null pra true ou false
        user: user
      })
    })
  }
  signOut(){
    auth.signOut()
  }
  render() {
    if(this.state.isAuthing){
      return <p>Aguarde...</p>
    }
    if(!this.state.isLoggedIn){
      return <Redirect to='/'/>
    } 
    return (
      <div>
        <Container>
          <Row> 
            <Col sm="12" md={{ size: 8, offset: 2 }} style={{marginTop: '4vw'}}>
              <h2>Seja bem vinda:  {this.state.user.email} </h2>
              <Button onClick={this.signOut}>Sair</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Admin
