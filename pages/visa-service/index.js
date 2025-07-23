import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import visaStyles from '@/styles/components/visa.module.css';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';

const VisaService = () => {
    const [countries, setCountries]= useState([]);

    const getData= ()=>{
       fetch('visaCountries.json',{headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((res)=>{
            return res.json()
        }).then((count)=>{
            setCountries(count)
        })
    }

    useEffect(()=>{
        getData();
    },[])
    
  return (
    <>
    <ThemeProvider theme={theme}>
        <Layout>
            <div className={styles.bannerImg}>
              <img
                src="/assets/banner 2 fastholidays.jpg"
                alt={`all destinations banner`}
              />
            </div>
            <div>
              <h2 className={visaStyles.visaheading}>Apply Your Visa Now</h2>
            </div>
           <div className={visaStyles.airlinesContainer}>
              <div className={visaStyles.airlines}>
              {countries.map(count=>(
                    <Link key={count.id} href={`visa-service/${count.name}`} passHref>
                    <div className={visaStyles.airlineLogoContainer} >
                        <img
                            className={visaStyles.airlineLogo}
                            src={count.image}
                            alt={`all destinations banner`}
                        />
                        <span className={visaStyles.applyNowButton}>Apply Now</span>
                        {count.name}
                    </div>
                    </Link>
                ))}
              </div>
            </div>
        </Layout>
    </ThemeProvider>
    </>
  )
}

export default VisaService