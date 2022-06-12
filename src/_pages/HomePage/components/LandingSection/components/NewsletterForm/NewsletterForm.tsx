import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import CountrySelect from "../CountryDropdown/CountryDropdown";
import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {CheckBox} from "@mui/icons-material";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    surname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export function NewsletterForm(props: { x: number }) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            surname: '',
            email: '',
            phoneNumber: '',
            country: '',
        },
        onSubmit: values => {
            alert(JSON.stringify({...values, country: country.label}, null, 2));
        },
        validationSchema: SignupSchema,
        validateOnBlur: true,
    });
    const [country, setCountry] = useState('');
    return <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        style={{
            background: "rgb(231,239,254)",
            color: "#FFF",
            padding: "25px",
            WebkitTransform: `translate3d(${props.x}px, 0, 0)`,
            transform: `translate3d(${props.x}px, 0, 0)`,
            borderRadius: "10px"
        }}>
        {!formik.isSubmitting ? <>
            <Typography variant="h5" style={{color: "#777"}}>Sign up to our newsletter</Typography><br/>
            <FormControl style={{display: "flex", flexDirection: "row", gap: "25px"}} sx={{mb: 3}}>
                <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    style={{width: "50%"}}
                    variant="standard"
                    label={"Name"}
                    error={formik.values.firstName && !!formik.errors.firstName}
                    helperText={formik.values.firstName && formik.errors.firstName}
                    aria-describedby="Newsletter registeree first name"/>
                <TextField
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                    style={{width: "50%"}}
                    variant="standard"
                    label={"Surname"}
                    error={formik.values.surname && !!formik.errors.surname}
                    helperText={formik.values.surname && formik.errors.surname}
                    aria-describedby="Newsletter registeree surname"/>
            </FormControl>
            <FormControl style={{width: "100%"}} sx={{mb: 3}}>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    variant="standard"
                    label={"Email"}
                    error={formik.values.email && !!formik.errors.email}
                    helperText={formik.values.email && formik.errors.email}
                    aria-describedby="my-helper-text"/>
            </FormControl><FormControl style={{width: "100%"}} sx={{mb: 5}}>
                <TextField
                    id="phoneNumber"
                    type='tel'
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    variant="standard"
                    label={"Phone (optional)"}
                    aria-describedby="Newsletter registeree phone number"/>
            </FormControl>
            <CountrySelect
                name='country'
                id='country'
                value={formik.values.country}
                onChange={value => setCountry(value)}
                style={{width: "100%"}}/><br/>
            <Button disabled={!formik.isValid} fullWidth color="primary" variant="contained" style={{background: !formik.isValid ? '#fafafa' : "#111"}} type='submit'>Sign Up</Button>
        </>
        : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <CheckBox style={{color: '#D4AF37', fontSize: '64px'}} /><br/>
                <Typography variant="h5" style={{color: "#777"}}>Thanks for subscribing!</Typography><br/>
                <Typography variant="subtitle" style={{color: "#777"}}>With our newsletter you'll have access to exclusive offers, as well as receive notifications about our latest additions to the knowledgebase</Typography><br/>
            </div>}
    </Box>;
}
