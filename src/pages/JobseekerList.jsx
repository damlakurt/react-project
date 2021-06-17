import React, { useEffect ,useState} from 'react'
import JobseekerService from '../service/JobseekerService';
import { Table, Header, Icon } from "semantic-ui-react";

export default function JobseekerList() {
    const [jobseekers, setjobseekers] = useState([])
    useEffect(() => {
        let jobseeerService= new JobseekerService()
        jobseeerService.getJobseekers()
        .then((result) => setjobseekers(result.data.data));
    }, []);
        

    return (
        <div>
            <Header as="h2">
      <Icon name="list alternate outline" />
      <Header.Content>İŞ ARAYANLAR</Header.Content>
    </Header>
    <Table color="violet" key="violet">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ad</Table.HeaderCell>
          <Table.HeaderCell>Soyad</Table.HeaderCell>
          <Table.HeaderCell>TCNO</Table.HeaderCell>
          <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {jobseekers.map((jobseekers) => (
          <Table.Row key={jobseekers.id}>
            <Table.Cell>{jobseekers.firstName}</Table.Cell>
            <Table.Cell>{jobseekers.lastName}</Table.Cell>
            <Table.Cell>{jobseekers.nationalityId}</Table.Cell>
            <Table.Cell>{jobseekers.yearOfBirth}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
        </div>
    )
}
