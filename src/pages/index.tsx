import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../_pages/components/Header/Header";
import {Motion, spring} from 'react-motion';
import {Button, Grid} from "@mui/material";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Flip from "../components/animations/flip/Flip";
import LandingSection from "../_pages/HomePage/components/LandingSection/LandingSection";
import ServicesSection from "../_pages/HomePage/components/ServicesSection/ServicesSection";
import JoinUsSection from "../_pages/HomePage/components/JoinUsSection/JoinUsSection";
import {NewsletterForm} from "../_pages/HomePage/components/LandingSection/components/NewsletterForm/NewsletterForm";
import {gql, GraphQLClient} from "graphql-request";
import { useQuery, useMutation } from "react-query";
import {useEffect} from "react";

const API_URL = `http://localhost:3000/graphql`;
const API_KEY = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGkiOjEsImdycCI6MSwiaWF0IjoxNjU1NzQ0NzUzLCJleHAiOjE3NTA0MTc1NTMsImF1ZCI6InVybjp3aWtpLmpzIiwiaXNzIjoidXJuOndpa2kuanMifQ.TVxew2ujYA-VgfwpGJN5fIigo_6mxHHhARqf58rDURYc3M0dazcj55iHAT-PfZWWoT3R1QpEWN1XQfbxiqwphrCap7gVvPWTCTWeH4ssO7hYT5jvYATytItnIPg1rcgxzFrUG8VaatS8l6jo0CSFLRFZNdMOUwH_BsQHvh8h3RYLVPA-qYECQ4iJQSNmu561YyFa_2_kFtMygsuMM75VhzXicPJiB-47vyGKE98cKmApV-g6WXsgZ5i3kAn7vKhhTXcHagdOfJPuIiwEVsfsCKiXBIuevJ5utN6TdZkccxUMEXAWQujmjQaj7UaE8fUnhUyigEHcs5a75HjtY_-knw';


const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Access-Control-Allow-Origin': '*',


}
});

export function useGetPost(userId) {
    return useQuery(["get-user", userId], async () => {
        const { users: {single} } = await graphQLClient.request(
            gql`query getUser($userId:Int!) {
                  users {
                    single(id: $userId){
                      id,
                      name,
                      email
                    }
                  }
                }
            `,
            { userId }
        );
        console.log('ree', single)
        return single;
    });
}
export function useCreateUser(email, name, rawPassword, providerKey, groups) {
    return useQuery(["create-user", email], async () => {
        const { users: {create: {responseResult: {message}}}} = await graphQLClient.request(
            gql`
                mutation createUser ($name: String!, $email: String!, $rawPassword: String!, $providerKey: String!, $groups: [Int]!) {
                  users {
                    create (name:$name, email:$email, passwordRaw: $rawPassword, providerKey:$providerKey, groups:$groups) {
                      responseResult {
                        message
                      },
                      user {name},
                    }
                  }
                }
            `,
            { email, name, rawPassword, providerKey, groups }
        );
        console.log('ree', message)
        return message;
    });
}

const Home: NextPage = ({contentScrolled}) => {
    // const { data, error, isLoading, isSuccess, ...rest } = useGetPost(1);
    const { data, error, isLoading, isSuccess, ...rest } = useCreateUser('asd@asd.asd', 'asd', 'asdasd', 'local', [1]);
    if (error) return <h1>Something went wrong!</h1>;
    if (isLoading) return <h1>Loading...</h1>;
    isSuccess && console.log('d', data)
    return <>
        {/*{data.name}*/}
      <LandingSection contentScrolled={contentScrolled} />
      <Element name="test1" className="element" >
        <ServicesSection />
      </Element>
      <JoinUsSection />
      <Grid container sx={{mt: 5, background: '#D4AF37', p: 5, mt: 0}}>
          <Grid items md={5} style={{margin: '0 auto'}}>
            <NewsletterForm x={1}/>
          </Grid>
      </Grid>
    </>;
}

export default Home
