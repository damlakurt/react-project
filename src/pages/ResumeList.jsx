import React,{useState,useEffect} from 'react'
import ResumeService from '../service/ResumeService';
import { Table, Header} from "semantic-ui-react";

export default function ResumeList() {
    const [ resume,setResumes] = useState([]);
    useEffect(() => {
        let resumeService= new ResumeService()
        resumeService.getResumes()
        .then((result) => setResumes(result.data.data));
    }, []);

        
    return (
        <div>
            <Header as="h5">
      
      <Header.Content>İş Arayanlar</Header.Content>
    </Header>
    <Table  celled inverted selectable>
      <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Fotograf</Table.HeaderCell>
          <Table.HeaderCell>Yabancı Dil</Table.HeaderCell>
          
          <Table.HeaderCell>Okul</Table.HeaderCell>
          <Table.HeaderCell> Sosyal Meyda</Table.HeaderCell>
          <Table.HeaderCell> Deneyimler</Table.HeaderCell>
          <Table.HeaderCell> Yetenekler</Table.HeaderCell>
          <Table.HeaderCell>Tanıtım Yazısı</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {resume.map((resume) => (
          <Table.Row key={resume.id}>
            <Table.Cell>{resume.language}</Table.Cell>
            <Table.Cell>{resume.photo}</Table.Cell>
            <Table.Cell>{resume.school}</Table.Cell>
            <Table.Cell>{resume.socialMedia}</Table.Cell>
            <Table.Cell>{resume.experience}</Table.Cell>
            <Table.Cell>{resume.ability}</Table.Cell>
            <Table.Cell>{resume.coverLetter}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
        </div>
    )

        }