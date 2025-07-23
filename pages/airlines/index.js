import React, { useState, useEffect } from 'react';
import styles from '@/styles/airlines.module.css';
import Layout from '@/components/layout';
import AirlineCard from '@/components/common/airlineCard';
import { ThemeProvider, Skeleton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { theme } from '@/styles/theme';
import RandomFooter from '@/components/common/randomFooter';
import Searchbar from '../../components/searchEngine/index';
import { seoForAirlines } from 'utils/seo';
import Typography from '@mui/material/Typography';
import { appName } from 'utils/constants';

export default function Airlines() {

  const [airlines, setAirlines]= useState([]);

  const getData= ()=>{
     fetch('airlines.json',{headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }}).then((res)=>{
          return res.json()
      }).then((count)=>{
        setAirlines(count)
      })
  }

  useEffect(()=>{
      getData();
  },[])
  
  const dataPerRow= 15;
  const [next,setNext]= useState(dataPerRow)

  const handleMoreAirlines = () => {
    setNext(next + dataPerRow);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout
          title={seoForAirlines.title}
          keywords={seoForAirlines.keywords}
          description={seoForAirlines.description}
          canonical={seoForAirlines.canonical}
          ogLocale={seoForAirlines.ogLocale}
          ogType={seoForAirlines.ogType}
          ogTitle={seoForAirlines.ogTitle}
          ogDescription={seoForAirlines.ogDescription}
          ogUrl={seoForAirlines.ogUrl}
          ogSiteName={seoForAirlines.ogSite_name}
          twitterCard={seoForAirlines.twitterCard}
          twitterLabel1={seoForAirlines.twitterLabel1}
          twitterDescription={seoForAirlines.twitterDescription}
          twitterSite={seoForAirlines.twitterSite}
          twitterCreator={seoForAirlines.twitterCreator}
        >
          <div className={styles.airlinesContainer}>
            <div style={{ marginTop: '2rem' }}>
              <Searchbar />
            </div>
            <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Leading Airlines - Your Gateway to the World</h2>
            <h3>Introduction:</h3>
            <Typography>
              {`At ${appName}, we partner with renowned airlines that percentage our dedication to excellent air tours. We apprehend that the adventure is as essential because the destination and our accomplice airlines offer unprecedented service, ensuring you fly with comfort and convenience.`}
            </Typography>
            <h2>Our Partner Airlines</h2>
            <h3>British Airways:</h3>
            <Typography>
              {`Experience first-rate British hospitality and explore a good-sized network of locations with this reliance on the airline.`}
            </Typography>
            <h3>Emirates:</h3>
            <Typography>
              {`Discover the world with award-prevailing carriers, luxurious facilities, and modern aircraft.`}
            </Typography>
            <h3>Qatar Airways:</h3>
            <Typography>
              {`Fly with one of the global's maximum awarded airways, acknowledged for its impeccable carrier and current fleet.`}
            </Typography>
            <h3>Singapore Airlines:</h3>
            <Typography>
              {`Indulge in top-class consolation and famous hospitality for your journey with this acclaimed provider.`}
            </Typography>
          </div>
        </div>
            <div className={styles.airlinesHeader}>
              <h1>Airlines</h1>
            </div>
            <div className={styles.airlines}>
            {airlines?.slice(0, next)?.map((data, i) => {
                return (
                  <div key={i} className={styles.airlineCardContainer}>
                    <AirlineCard data={data} />
                </div>
                );
              })}
               
            </div>
            {next < airlines?.length && (
              <LoadingButton
                className="mt-4"
                sx={{ margin: '2rem' }}
                onClick={handleMoreAirlines}
                variant="contained"
              >
                Load more
              </LoadingButton>
            )}
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}