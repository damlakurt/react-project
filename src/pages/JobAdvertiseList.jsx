import React, { useEffect ,useState} from 'react'
import { Table, Header,  Button } from "semantic-ui-react";
import JobAdvertiseServicee from '../service/JobAdvertiseServicee';


export default function JobAdvertiseList() {
const [jobAdvertise, setjobAdvertise] = useState([]);

useEffect(() => {
    let jobAdversiteService= new JobAdvertiseServicee()
    jobAdversiteService.getJobAdvertises()
    .then((result) => setjobAdvertise(result.data.data));
}, []);
    
    return (
        <div>
            <Header as="h7" icon textAlign='center'>
     
        <Header.Content >İŞ İLANLARI</Header.Content>
      </Header>
     
      <Table  celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            <Table.HeaderCell>Maaş</Table.HeaderCell>
        
            <Table.HeaderCell>Etkin Mi</Table.HeaderCell>
            <Table.HeaderCell>İlanın Oluşturulma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertise.map((jobAdvertise) => (
            <Table.Row key={jobAdvertise.id}>
              <Table.Cell>{jobAdvertise.jobPosition}</Table.Cell>
              <Table.Cell>{jobAdvertise.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertise.city.name}</Table.Cell>
              <Table.Cell>{jobAdvertise.jobDescription}</Table.Cell>
              <Table.Cell>
                {jobAdvertise.minSalary}TL - {jobAdvertise.maxSalary}TL
              </Table.Cell>
              <Table.Cell>{jobAdvertise.enable}</Table.Cell>
              <Table.Cell>{jobAdvertise.createdAt}</Table.Cell>
              <Table.Cell>{jobAdvertise.applicationDeadLine}</Table.Cell>
              <Table.Cell>{jobAdvertise.numberOfOpenPosition}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      
        </div>
    )
}
