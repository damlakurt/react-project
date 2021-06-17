import React, { useEffect ,useState} from 'react'
import JobPositionService from '../service/JobPositionService';
import { Table, Icon,Header } from "semantic-ui-react";

export default function JobPositionList() {
    const [jobpositions, setjobpositions] = useState([])
    useEffect(() => {
        let jobPositionService= new JobPositionService()
        jobPositionService.getJobPositions()
        .then((result) => setjobpositions(result.data.data));
    }, []);
        
  
    return (
        <div>
          <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>İş Pozisyonları</Header.Content>
      </Header>
      <Table color="violet" key="violet">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {jobpositions.map((jobpositions) => (
          <Table.Row key={jobpositions.id}>
            <Table.Cell>{jobpositions.positionName}</Table.Cell>
            
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
        </div>
    )
}
