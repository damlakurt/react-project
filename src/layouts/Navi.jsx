import React,{useState} from 'react'
import { Icon, Menu , Button} from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import SignedIn from './SignedIn';
import SignedOut from './SignedOut';




export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  
  function handleSignOut(){
      setIsAuthenticated(false)
      
  }

  function handleSignIn(){
    setIsAuthenticated(true)}


    return (
        <div>
         <Menu fixed="top" size="small">
        <Container>
          <Menu.Item name="İNSAN KAYNAKLARI YÖNETİM SİSTEMİ" />


          <Menu.Item name="home" >
          <Icon name="home" size="large"/>
          Ana Sayfa
          </Menu.Item>

          <Menu.Item name="search" >
          <Icon name="world" size="large"/>
          Kariyer Yolculuğu      
              </Menu.Item>


          <Menu.Item name="clipboard" as={Link} to={"/systemusers"} >
            <Icon name="user" size="large"/>
            Kullanıcılar
            </Menu.Item>

          
        <Menu.Menu position="right">
            
          {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> 
                        : <SignedOut signIn={handleSignIn}/>}

      <Button inverted color="orange"size="big" as={Link} to={"/jobAdversiteAdd"}>İlan Yayınla</Button>
    


          </Menu.Menu>
        </Container>
      </Menu>
      </div>
    )
  }
    
