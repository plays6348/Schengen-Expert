import React, { useEffect, useState } from 'react'
import { Grid, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import VisaForm from '@/components/VisaCountryComp/VisaForm';
import { useRouter } from 'next/router';
import visaCountries from 'public/visaCountries.json'

const useStyles= makeStyles(()=>{
  return {
    divCenter:{
      maxWidth: '1366px',
      margin: 'auto',
      justifyContent: 'center',
      marginTop: '2rem',
      marginBottom: '3rem',
      height: 'min-content'
    },
    gridPad:{
      padding: '12px',
      // backgroundColor: '#CEEAE6',
      borderRadius: '12px'
    },
    gridPadMin:{
      boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
      padding: '12px',
      // backgroundColor: '#CEEAE6',
      borderRadius: '12px'
    },
    imgWidth:{
      width: '100%',
      // height: '200px',
      [theme.breakpoints.down("md")]: {
        width: '100%',
        justifyContent: "center",
      },
    },
    gridCenter:{
      margin: 'auto',
      justifyContent: 'center',
    }
  }
})

const CountryVisaDetails = () => {

  const router= useRouter();
  const {name}= router.query;
  const country = visaCountries.filter((el)=> {return el.name == name});
  const classes= useStyles();
  const countryDetails= country.pop();

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
          <div style={{
            maxWidth: '1366px',
            margin: 'auto',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '3rem',
            height: 'min-content'
          }}>
            <Grid container gap={3} className={classes.gridCenter}>
              <Grid item xs={10} sm={8} md={4} gap={4} sx={{
                boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
                padding: '12px',
                backgroundColor: 'transparent',
                boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
                borderRadius: '12px'
              }}>
                <Grid item xs={12} sm={10} md={8} >
                  <img style={{
                    width: '100%',
                    // height: '200px',
                    [theme.breakpoints.down("md")]: {
                      width: '100%',
                      justifyContent: "center",
                    },
                  }} src={countryDetails?.image}/>
                </Grid>
                <Grid item xs={12} sm={10} md={8} >
                  <h2>{countryDetails?.name}</h2>
                  <p className={classes.imgWidth}> 
                  A Schengen Visa is a Travel Document which can access 26 European Countries. 
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={8} md={6} sx={{
                padding: '12px',
                backgroundColor: 'transparent',
                boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
                borderRadius: '12px'
              }}>
              <h2 style={{textAlign: 'center', marginTop: '-4px'}}>Inquire Us</h2>
                <VisaForm countryName={countryDetails?.name} countryImg={countryDetails?.image}/>
              </Grid>
            </Grid>
          </div>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default CountryVisaDetails