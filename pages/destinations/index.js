import React, { useState, useEffect } from 'react';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import DestCard from '@/components/common/destCard';
import { ThemeProvider, Skeleton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { theme } from '@/styles/theme';
import RandomFooter from '@/components/common/randomFooter';
import Searchbar from '@/components/searchEngine';
import Typography from '@mui/material/Typography';
import { seoForDestinations } from 'utils/seo';
import { appName } from 'utils/constants';

export default function TestingDestinations() {

  const [countries, setCountries]= useState([]);

    const getData= ()=>{
       fetch('destinations.json',{headers:{
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
    
    const dataPerRow= 9;
    const [next,setNext]= useState(dataPerRow)

    const handleMoreCountries = () => {
      setNext(next + dataPerRow);
    };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout
          title={seoForDestinations.title}
          keywords={seoForDestinations.keywords}
          description={seoForDestinations.description}
          canonical={seoForDestinations.canonical}
          ogLocale={seoForDestinations.ogLocale}
          ogType={seoForDestinations.ogType}
          ogTitle={seoForDestinations.ogTitle}
          ogDescription={seoForDestinations.ogDescription}
          ogUrl={seoForDestinations.ogUrl}
          ogSiteName={seoForDestinations.ogSite_name}
          twitterCard={seoForDestinations.twitterCard}
          twitterLabel1={seoForDestinations.twitterLabel1}
          twitterDescription={seoForDestinations.twitterDescription}
          twitterSite={seoForDestinations.twitterSite}
          twitterCreator={seoForDestinations.twitterCreator}
        >
          <div className={styles.bannerImg}>
            <img
              src="/assets/banner 2 fastholidays.jpg"
              alt={`all destinations banner`}
            />
          </div>
          <div className={styles.destinationsContainer}>
            <div style={{ marginTop: '2rem' }}>
              <Searchbar />
            </div>
            <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h1>Top Destinations for {appName}</h1>
            <Typography>
              {`Are you searching for a quick getaway that doesn’t skimp on fun or adventure? Our top picks for short vacations offer unforgettable experiences in the shortest time possible.`}
            </Typography>
            <br></br>
            <Typography>
              {`Whether you're planning a romantic weekend in Paris, exploring the Eiffel Tower and the Louvre, or seeking the best destinations in Europe, each location offers the perfect blend of adventure and relaxation.`}
            </Typography>
            <h2>Why Choose Fast Holidays?</h2>
            <h3>Convenience</h3>
            <Typography>
              {`Our carefully curated vacation packages seamlessly fit into your busy schedule, whether you're seeking solo travel destinations or planning a quick destination wedding.`}
            </Typography>
            <h3>Easy Booking</h3>
            <Typography>
              {`With our streamlined booking process, you can reserve your vacation in just a few minutes.`}
            </Typography>
            <h3>Memorable Experiences</h3>
            <Typography>
              {`Even with limited time, we guarantee every trip is packed with sights and activities you'll remember forever.`}
            </Typography>
            <h3>Affordable Pricing</h3>
            <Typography>
              {`Maximize your travel time with competitive pricing that ensures you don’t break the bank.`}
            </Typography>
          </div>
        </div>
            <div className={styles.destsHeader}>
            </div>
            <div className={styles.destinations}>
              {countries?.slice(0, next)?.map((data, i) => {
                return (
                    <div key={i} className={styles.destPage__destinations}>
                      <DestCard dest={data} />
                    </div>
                );
              })}
               
            </div>
            {next < countries?.length && (
              <LoadingButton
                className="mt-4"
                sx={{ margin: '2rem' }}
                onClick={handleMoreCountries}
                variant="contained"
              >
                Load more
              </LoadingButton>
            )}
            {/* {destinations && (
              <LoadingButton
                sx={{ margin: '2rem' }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 10)}
                variant="contained"
              >
                {!blockApi ? 'Load More' : 'No More'}
              </LoadingButton>
            )} */}
            <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>How It Works</h2>
            <h3>Convenience</h3>
            <Typography>
              {`Explore our handpicked collection of quick vacation packages, from vacation destinations naturally beautiful to the best spots in Europe.`}
            </Typography>
            <h3>Customize Your Trip</h3>
            <Typography>
              {`Tailor the itinerary and activities to suit your interests, whether you're looking for a whirlwind tour of Europe's top cities or a serene escape to a solo travel haven.`}
            </Typography>
            <h3>Book Instantly</h3>
            <Typography>
              {`Complete your reservation with just a few clicks using our secure platform.`}
            </Typography>
            <h3>Enjoy Your Holiday</h3>
            <Typography>
              {`Pack your bags and prepare for a short but memorable trip!`}
            </Typography>
            <h2>Special Discounts</h2>
            <h3>Flash Sale</h3>
            <Typography>
              {`Enjoy 10% off all Fast Holidays packages booked within the next 48 hours. Don’t miss this limited-time offer!`}
            </Typography>
            <h2>Start Your Fast Holiday Now!</h2>
            <Typography>
              {`Don’t wait for the perfect moment—create it! Fast Holidays makes it easy to turn a brief getaway into a lasting memory. Explore our packages and begin your journey today!`}
            </Typography>
          </div>
        </div>
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}