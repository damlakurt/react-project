import React, { useEffect ,useState} from 'react'
import SystemUserServicee from '../service/SystemUserServicee';
import { Table, Header } from "semantic-ui-react";


export default function SystemUserList() {
    const [systemUsers, setsystemUsers] = useState([])
    useEffect(() => {
        let systemUsersService= new SystemUserServicee()
        systemUsersService.getSystemUsers()
        .then((result) => setsystemUsers(result.data.data));
    }, []);
    return (
        <div>
            <Header as="h5">
   
      <Header.Content>SİSTEM KULLANICILARI</Header.Content>
    </Header>
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ad</Table.HeaderCell>
          <Table.HeaderCell>Soyad</Table.HeaderCell>
          <Table.HeaderCell>Bölüm No</Table.HeaderCell>
        
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {systemUsers.map((systemUsers) => (
          <Table.Row key={systemUsers.id}>
            <Table.Cell>{systemUsers.firstName}</Table.Cell>
            <Table.Cell>{systemUsers.lastName}</Table.Cell>
            <Table.Cell>{systemUsers.departmentId}</Table.Cell>
            
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
        </div>
    )
}
