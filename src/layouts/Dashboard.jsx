import React from 'react'
import { Grid } from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
import JobAdversiteAdd from '../pages/JobAdversiteAdd';
import JobAdvertiseList from '../pages/JobAdvertiseList';
import SystemUserList from '../pages/SystemUserList';

import SideBarr from './SideBarr';
import { Route } from "react-router";
import ResumeList from '../pages/ResumeList';




export default function Dashboard() {
    return (
        <div>
          
        <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBarr/>
          </Grid.Column>
          <Grid.Column width={12}>
             
              <Route exact path="/jobadvertises" component={JobAdvertiseList}/>
                        
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/resumes" component={ResumeList}/>
                        <Route exact path="/systemusers" component={SystemUserList}/>
                        <Route exact path="/jobAdversiteAdd" component={JobAdversiteAdd}/>

                        
                        
              
           
           
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
}
