import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';
import holiday from '@/styles/txtpages.module.css'
import Layout from '@/components/layout';
import DestCard from '@/components/common/destCard';
import {
  Button,
  ThemeProvider,
  Typography,
  Skeleton,
} from '@mui/material';
import { theme } from '../styles/theme';
import AirlineCard from '@/components/common/airlineCard';
import FareCard from '@/components/common/fareCard';
import {
  collection,
  query,
  getDocs,
  limit,
  where,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { appName, number } from '../utils/constants';
import Searchbar from '@/components/searchEngine';
import { seoForHome } from 'utils/seo';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 80,
    },
  },
};

export default function Home() {
  const [airlines, setAirlines]=useState([]);
  const [type, setType] = useState('business');
  const [selectedDept, setSelectedDept] = useState(' ');
  const [selectedDest, setSelectedDest] = useState(' ');
  const [route, setRoute] = useState();
  const [topFares, setTopFares] = useState(null);
  const [destinations, setDestinations]= useState([]);

  const getDestinationsData= ()=>{
    fetch('destinations.json',{headers:{
         'Content-Type': 'application/json',
         'Accept': 'application/json'
     }}).then((res)=>{
         return res.json()
     }).then((count)=>{
      setDestinations(count)
     })
 }

  const getFaresFromUK = async () => {
    const arrOfData = [];

    const q = query(
      collection(db, 'fares'),
      where('deptCountry.name', '==', 'united-kingdom'),
      limit(6),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });
    setTopFares(arrOfData);
  };

  const getAirlinesData= ()=>{
    fetch('airlines.json',{headers:{
         'Content-Type': 'application/json',
         'Accept': 'application/json'
     }}).then((res)=>{
         return res.json()
     }).then((count)=>{
       setAirlines(count)
     })
 }

  const handleChange = (type, value) => {
    if (type == 'dep') {
      setSelectedDept(value);
    } else if (type == 'dest') {
      setSelectedDest(value);
    }
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  function generateLink(dept, dest) {
    let deptCode = '';
    let destCode = '';

    if (dept.length > 3 && dest.length > 3) {
      const _dept = dept.split('-')[1].trim().split('');
      deptCode = [_dept[1], _dept[2], _dept[3]].join('');

      const _dest = dest.split('-')[1].trim().split('');
      destCode = [_dest[1], _dest[2], _dest[3]].join('');

      setRoute(`/fares?dept=${deptCode}&dest=${destCode}`);
      return;
    } else if (dept.length > 3) {
      const _dept = dept.split('-')[1].trim().split('');
      deptCode = [_dept[1], _dept[2], _dept[3]].join('');

      setRoute(`/fares?dept=${deptCode}&dest=all`);
    } else if (dest.length > 3) {
      const _dest = dest.split('-')[1].trim().split('');
      destCode = [_dest[1], _dest[2], _dest[3]].join('');

      setRoute(`/fares?dept=all&dest=${destCode}`);
    }
  }

  useEffect(() => {
    generateLink(selectedDept, selectedDest);
  }, [selectedDest, selectedDept]);

  useEffect(() => {
    getDestinationsData();
    getAirlinesData();
    getFaresFromUK();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={seoForHome.title}
        keywords={seoForHome.keywords}
        description={seoForHome.description}
        canonical={seoForHome.canonical}
        ogLocale={seoForHome.ogLocale}
        ogType={seoForHome.ogType}
        ogTitle={seoForHome.ogTitle}
        ogDescription={seoForHome.ogDescription}
        ogUrl={seoForHome.ogUrl}
        ogSiteName={seoForHome.ogSite_name}
        twitterCard={seoForHome.twitterCard}
        twitterLabel1={seoForHome.twitterLabel1}
        twitterDescription={seoForHome.twitterDescription}
        twitterSite={seoForHome.twitterSite}
        twitterCreator={seoForHome.twitterCreator}
      >
        <div className={styles.banner}>
        <div className={styles.banner__text}>
            <img src="./atol.png" alt="atol" style={{width: '5rem'}} />
            <img src="./iata.png" alt="atol" style={{width: '5rem'}} />
          </div>
          <Searchbar />
        </div>
        <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h1>{appName} is Your #1 Travel Partner</h1>
            <Typography>
              {`Our goal at Quick Holidays is to fulfill your ideal vacation experience. Our ${appName} services guarantee that every aspect of your vacation is meticulously organized, whether you're searching for an exhilarating adventure or a cultural city tour. `}
            </Typography>
          </div>
          <br></br>
          <div className={styles.aboutUs}>
            <Typography>
              {`As the greatest travel agency in the UK, we handle all the details, from arranging your flights and selecting the ideal lodging to developing personalized itineraries and offering round-the-clock assistance. Because every little thing is taken care of, you can unwind and enjoy it.`}
            </Typography>
          </div>
          <br></br>
          <div className={styles.aboutUs}>
            <Typography>
              {`Allow us to design the ideal journey for you, combining fantastic locations with first-rate service. We look forward to assisting you in organizing your upcoming ${appName} trip!`}
            </Typography>
          </div>
        </div>
        <div className={styles.popularDestContainer}>
        <div className={styles.popular_dests}>

{destinations.slice(0, 6).map((data, i) => {
  return (
      <div key={i} className={styles.destPage__destinations}>
        <DestCard dest={data} />
      </div>
  );
})}

</div>
<div className={styles.destMore}>
<Link href="/destinations">
<Button variant="contained">More</Button>
</Link>
</div>
</div>

<div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Cheap Vacations & More</h2>
            <Typography>
              {`Begin your ideal getaway without breaking the bank! With our ${appName} services, we specialize in low-cost travel arrangements without compromising on quality. We search for the greatest offers on travel, lodging, and entertainment so you may enjoy both leisure and entertainment.`}
            </Typography>
            <br></br>
            <Typography>
              {`Our travel service makes luxury travel accessible to anyone, whether you're discovering undiscovered locations around Europe or immersing yourself in the local cultures.`}
            </Typography>
            <br></br>
            <Typography>
              {`Plus, your ideal getaway might be closer than you think with exclusive deals and one-on-one assistance. Are you prepared to travel wisely? Together, we can turn your next vacation into an inexpensive adventure!`}
            </Typography>
          </div>
        </div>
        <div>
        <div className={holiday.showcase}>

          {/* Dubai Packages..................... */}

        <div className={holiday.travel_card}>
        <div className={holiday.box}>
          <div className={holiday.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={holiday.package_image4} href={`tel:${number}`}>
        <div className={holiday.package_image4}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={holiday.content}>
          <label className={holiday.category}>ADVENTURE</label>
          <h3 className={holiday.topic}>TH8 Palm Dubai Flights are included with Baggage<span className={holiday.carddestinationtxt}>(Dubai)</span></h3>
          <div className={holiday.price}>
            <div className={holiday.discount_info}>&#128339; 5 Nights</div>
            <div className={holiday.original_price}>£700</div>
          </div>
          <div className={holiday.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={holiday.travel_card}>
        <div className={holiday.box}>
          <div className={holiday.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={holiday.package_image5} href={`tel:${number}`}>
        <div className={holiday.package_image5}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={holiday.content}>
          <label className={holiday.category}>ADVENTURE</label>
          <h3 className={holiday.topic}>Royal Central Palm Dubai Flights are included with Baggage<span className={holiday.carddestinationtxt}>(Dubai)</span></h3>
          <div className={holiday.price}>
            <div className={holiday.discount_info}>&#128339; 5 Nights</div>
            <div className={holiday.original_price}>£690</div>
          </div>
          <div className={holiday.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={holiday.travel_card}>
        <div className={holiday.box}>
          <div className={holiday.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={holiday.package_image6} href={`tel:${number}`}>
        <div className={holiday.package_image6}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={holiday.content}>
          <label className={holiday.category}>ADVENTURE</label>
          <h3 className={holiday.topic}>Jumeirah Mina A'Salam Dubai (Deluxe Room) with breakfast<span className={holiday.carddestinationtxt}>(Dubai)</span></h3>
          <div className={holiday.price}>
            <div className={holiday.discount_info}>&#128339; 5 Nights</div>
            <div className={holiday.original_price}>£698</div>
          </div>
          <div className={holiday.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.destMore}>
            <Link href="/holidays">
              <Button variant="contained">More</Button>
            </Link>
          </div>

      {/* Dubai packages end................... */}

    </div>
      </div>
        <div className={styles.showcase}>
</div>
        <div className={styles.topFaresContainer}>
          <div className={styles.destsHeader}>
            <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Cheapest Flights Available</h2>
            <Typography>
              {`Discover the globe without going over your budget with ${appName} fantastic flight offers! We offer the cheapest rates to get you there, whether your travel plans are for a quick weekend break or a major international journey.`}
            </Typography>
            <br></br>
            <Typography>
              {`You can locate the best deals on major airlines with the aid of our tools and exclusive offers. Bid farewell to pricey flights and hello to exciting new travel adventures! The best flight deals are the first step towards the ideal vacation. Start traveling with us right now and take advantage of cheaper flights.`}
            </Typography>
          </div>
        </div>
          </div>
          <div className={styles.top_fares}>
            {topFares ? (
              <div className={styles.topFares}>
                {topFares.map((fare, i) => (
                  <FareCard data={fare} key={i} />
                ))}
              </div>
            ) : (
              <div className={styles.fareSkeletonContainer}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item}>
                    <div className={styles.fareSkeletonForPC}>
                      <Skeleton
                        variant="rectangular"
                        width={560}
                        height={215}
                      />
                    </div>
                    <div className={styles.fareSkeletonForPhone}>
                      <Skeleton
                        variant="rectangular"
                        width={280}
                        height={480}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.topAirlinesContainer}>
        <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Top Airlines</h2>
            <Typography>
              {`To further reduce the cost of your ideal trip, get the greatest airline offers. Our exclusive flight offers enable you to travel comfortably without going over budget, whether you're traveling far or remaining close.`}
            </Typography>
            <br></br>
            <Typography>
              {`Imagine enjoying luxurious luxury, excellent service, and significant savings while visiting your favorite locations. From last-minute getaways to early bird bargains, our handpicked airline deals cater to all types of travelers.`}
            </Typography>
            <br></br>
            <Typography>
              {`Don't pass up this opportunity to reserve your spot and begin your next journey with savings that will make every mile worthwhile!`}
            </Typography>
          </div>
        </div>
          <div className={styles.topAirlines}>
              {airlines.slice(0, 15).map((data, i) => {
                return (
                  <div key={i} className={styles.airlineCardContainer}>
                    <AirlineCard data={data} />
                </div>
                );
              })}
          </div>
          <div className={styles.destMore}>
            <Link href="/airlines">
              <Button variant="contained">More</Button>
            </Link>
          </div>
        </div>
        <div className={styles.homePage__txt}>
        <div className={styles.aboutUs}>
            <h2>Everybody's Holidays</h2>
            <Typography>
              {`We offer the ideal vacation with ${appName} for every traveler. Our vacation packages are tailored to meet your requirements, whether you're planning a family-friendly trip, a romantic retreat, or some alone time. Being a top luxury travel business, we provide everything from lively city excursions to tranquil getaways and thrilling adventures.`}
            </Typography>
            <br></br>
            <Typography>
              {`We handle every little thing so you can concentrate on creating enduring memories. Discover the ideal vacation spot by looking through our options now!`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h2>Speak with Our Travel Consultants</h2>
            <Typography>
              {`Travel planning ought to be just as much fun as the actual trip. For this reason, our travel specialists at ${appName} are available to assist you at every stage. Whether you're looking for a thrilling journey, a tranquil getaway, or a cultural encounter, our opulent travel agency can tailor your vacation to your preferences.`}
            </Typography>
            <br></br>
            <Typography>
              {`We'll ensure that your trip is more than just a vacation—it will be an amazing experience—with insider advice, special offers, and individualized attention. Speak with one of our travel specialists right now to begin organizing the ideal vacation. We'll handle the specifics so you can focus on creating memories.`}
            </Typography>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}