import React from 'react'
import { useFormik } from 'formik'
import { Button, Form, Message } from 'semantic-ui-react'
import *as Yup from "yup"
import JobAdvertiseServicee from '../service/JobAdvertiseServicee';


export default function JobAdversiteAdd() {
   
        
            const{ values, errors, handleChange, handleSubmit,touched } = useFormik({
        initialValues: {
            jobDescription: "",
            minSalary: "",
            maxSalary: "",
            numberOfOpenPosition: "",
            applicationDeadline: "",
            employerId: "",
            jobPositionId: "",
            cityId: "",
        },
        validationSchema:
            Yup.object({
                jobDescription: Yup.string().required("Boş Geçilemez!"),
                minSalary: Yup.number().required("Boş Geçilemez!"),
                maxSalary: Yup.number().required("Boş Geçilemez!"),
                numberOfOpenPosition: Yup.number().required("Boş Geçilemez!"),
                applicationDeadline: Yup.date().required("Boş Geçilemez!"),
                employerId: Yup.number().required("Boş Geçilemez!"),
                jobPositionId: Yup.string().required("Boş Geçilemez!"),
                cityId: Yup.number().required("Boş Geçilemez!"),
            }),
        onSubmit: values => {
            let jobadvertiseService = new JobAdvertiseServicee();
            jobadvertiseService.add(values).then();
        }
    });

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Field >
                    <label>Açıklama</label>
                    <input name="jobDescription" placeholder='Açıklama' value={values.jobDescription} onChange={handleChange} />
                    {
                        errors.jobDescription && touched.jobDescription &&
                        <Message color='red'>{errors.jobDescription}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Minimum Maaş</label>
                    <input name="minSalary" placeholder='Minimum Maaş' value={values.minSalary} onChange={handleChange} />
                    {
                        errors.minSalary && touched.minSalary &&
                        <Message color='red'>{errors.minSalary}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Maksimum Maaş</label>
                    <input name="maxSalary" placeholder='Maksimum Maaş' value={values.maxSalary} onChange={handleChange} />
                    {
                        errors.maxSalary && touched.maxSalary &&
                        <Message color='red'>{errors.maxSalary}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Açık Pozisyon Sayısı</label>
                    <input name="numberOfOpenPosition" placeholder='Açık Pozisyon Sayısı' value={values.numberOfOpenPosition} onChange={handleChange} />
                    {
                        errors.numberOfOpenPosition && touched.numberOfOpenPosition &&
                        <Message color='red'>{errors.numberOfOpenPosition}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Son Başvuru Tarihi</label>
                    <input name="applicationDeadline" type="date" value={values.applicationDeadline} onChange={handleChange} />
                    {
                        errors.applicationDeadline && touched.applicationDeadline &&
                        <Message color='red'>{errors.applicationDeadline}</Message>
                    }
                </Form.Field>
                <Form.Field>
                
                    <label>Çalışma Türü</label>
                    <input name="typeOfWorkingId" value={values.typeOfWorkingId} onChange={handleChange} />
                    {
                        errors.typeOfWorkingId && touched.typeOfWorkingId &&
                        <Message color='red'>{errors.typeOfWorkingId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Çalışma Zamanı Şekli</label>
                    <input name="wayOfWorkingId" value={values.wayOfWorkingId} onChange={handleChange} />
                    {
                        errors.wayOfWorkingId && touched.wayOfWorkingId &&
                        <Message color='red'>{errors.wayOfWorkingId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>İşveren</label>
                    <input name="employerId" value={values.employerId} onChange={handleChange} />
                    {
                        errors.employerId && touched.employerId &&
                        <Message color='red'>{errors.employerId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>İş pozisyonu</label>
                    <input name="jobPositionId" value={values.jobPositionId} onChange={handleChange} />
                    {
                        errors.jobPositionId && touched.jobPositionId &&
                        <Message color='red'>{errors.jobPositionId}</Message>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Şehir</label>
                    <input name="cityId" value={values.cityId} onChange={handleChange} />
                    {
                        errors.cityId && touched.cityId &&
                        <Message color='red'>{errors.cityId}</Message>
                    }
                </Form.Field>
                <Button color=" orange"type='submit'>İlan Ver</Button>
            </Form>
        </div>
        
    )
}
