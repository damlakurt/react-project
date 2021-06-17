import React, { useEffect ,useState} from 'react'
import EmployerService from '../service/EmployerService';
import { Table, Header } from "semantic-ui-react";



export default function EmployerList() {
    const [ employers,setEmployers] = useState([]);
    useEffect(() => {
        let employerService= new EmployerService()
        employerService.getEmployers()
        .then((result) => setEmployers(result.data.data));
    }, []);

        
    return (
        <div>
            <Header as="h5">
      
      <Header.Content>İŞ VERENLER</Header.Content>
    </Header>
    <Table  celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
          <Table.HeaderCell>Website</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {employers.map((employer) => (
          <Table.Row key={employer.id}>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.webAddress}</Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
        </div>
    )
}
