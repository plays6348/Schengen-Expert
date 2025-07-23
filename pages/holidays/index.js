import RandomFooter from '@/components/common/randomFooter';
import Layout from '@/components/layout';
import React from 'react';
import styles from '@/styles/txtpages.module.css';
import { Typography } from '@mui/material';
import { seoForHolidays } from 'utils/seo';
import { appName, number } from 'utils/constants';
import { LinkOff } from '@mui/icons-material';
import Link from 'next/link';

export default function Holidays() {
  return (
    <Layout
      title={seoForHolidays.title}
      keywords={seoForHolidays.keywords}
      description={seoForHolidays.description}
      canonical={seoForHolidays.canonical}
      ogLocale={seoForHolidays.ogLocale}
      ogType={seoForHolidays.ogType}
      ogTitle={seoForHolidays.ogTitle}
      ogDescription={seoForHolidays.ogDescription}
      ogUrl={seoForHolidays.ogUrl}
      ogSiteName={seoForHolidays.ogSite_name}
      twitterCard={seoForHolidays.twitterCard}
      twitterLabel1={seoForHolidays.twitterLabel1}
      twitterDescription={seoForHolidays.twitterDescription}
      twitterSite={seoForHolidays.twitterSite}
      twitterCreator={seoForHolidays.twitterCreator}
    >

<div className={styles.holidaybanner}>
        </div>
        <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h1>Memorable Vacations - Where Experiences Are Created</h1>
            <Typography>
              {`Welcome to Unforgettable Holidays, where your dream of luxury holidays transforms into priceless memories. We specialize in offering the best holiday deals for 2024/2025, ensuring that whether you're after a peaceful retreat, an adventurous journey, or a cultural immersion, your experience is nothing short of extraordinary.`}
            </Typography>
          </div>
          </div>
      <div>
        <div className={styles.showcase}>

          {/* Dubai Packages..................... */}

        <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image4} href={`tel:${number}`}>
        <div className={styles.package_image4}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>TH8 Palm Dubai Flights are included with Baggage<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£700</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image5} href={`tel:${number}`}>
        <div className={styles.package_image5}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Royal Central Palm Dubai Flights are included with Baggage<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£690</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image6} href={`tel:${number}`}>
        <div className={styles.package_image6}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Jumeirah Mina A'Salam Dubai (Deluxe Room) with breakfast<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£698</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image22} href={`tel:${number}`}>
        <div className={styles.package_image22}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Luxury 5-Night Stay at Marriott Resort Palm Jumeirah with Palm<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£999</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image23} href={`tel:${number}`}>
        <div className={styles.package_image23}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Holiday at Anantara the Palm with Half Board Flights are included<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£939</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image24} href={`tel:${number}`}>
        <div className={styles.package_image24}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Holiday at Fairmont the Palm with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£930</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image25} href={`tel:${number}`}>
        <div className={styles.package_image25}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}> Walfdorf Astoria Dubai the Palm with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£899</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image26} href={`tel:${number}`}>
        <div className={styles.package_image26}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Taj Exotica Resort & Spa with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£889</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image27} href={`tel:${number}`}>
        <div className={styles.package_image27}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Sofitel the Palm with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£879</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image28} href={`tel:${number}`}>
        <div className={styles.package_image28}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Hilton Dubai Jumeirah Beach with Flight<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£615</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image29} href={`tel:${number}`}>
        <div className={styles.package_image29}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Amwaj Rotana Jumeirah Beach Dubai<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£680</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image30} href={`tel:${number}`}>
        <div className={styles.package_image30}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Rixos Premium Dubai JBR with Flight<span className={styles.carddestinationtxt}>(Dubai)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£680</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      {/* Dubai packages end................... */}

      
    </div>

    <div className={styles.showcase2}>

    <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image} href={`tel:${number}`}>
        <div className={styles.package_image}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Taj Coral Reef Resort & Spa (PREMIUM WATER VILLA) Flights are included with Baggage<span className={styles.carddestinationtxt}>(Maldives)</span></h3>
          
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£979</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image2} href={`tel:${number}`}>
        <div className={styles.package_image2}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Nova Maldives (Water Villa) Flights are included with Baggage<span className={styles.carddestinationtxt}>(Maldives)</span></h3>
          
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£881</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 30% off</div>
        </div>
        <Link className={styles.package_image19} href={`tel:${number}`}>
        <div className={styles.package_image19}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Siyam World Maldives (Water Villa + Slide) Flights are included<span className={styles.carddestinationtxt}>(Maldives)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£2,649</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Selected Adventures Exclusively for You</h2>
            <Typography>
              {`At Unforgettable Holidays, we believe that the best holidays are those tailored to your desires. Our team of experts curates bespoke luxury vacation deals and cheap vacation deals, crafting itineraries that match your unique interests.`}
            </Typography>
            <h3>Romantic Getaways:</h3>
            <Typography>
              {`Experience cozy accommodations, romantic dinners, and breathtaking scenery.`}
            </Typography>
            <br></br>
            <h3>Family Fun:</h3>
            <Typography>
              {`Enjoy activities and attractions that entertain all ages.`}
            </Typography>
            <br></br>
            <h3>Solo Adventures:</h3>
            <Typography>
              {`Discover one-of-a-kind experiences for solo travelers eager to explore and learn.`}
            </Typography>
          </div>
          </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image3} href={`tel:${number}`}>
        <div className={styles.package_image3}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Holiday in Crown Paradise Club Cancun & Canyon Flights are included with Baggage<span className={styles.carddestinationtxt}>(Mexico)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 12 Nights</div>
            <div className={styles.original_price}>£754</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image7} href={`tel:${number}`}>
        <div className={styles.package_image7}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>InterContinental Mauritius Resort Balaclava Fort (Standard Room)<span className={styles.carddestinationtxt}>(Mauritius)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,299</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 30% off</div>
        </div>
        <Link className={styles.package_image8} href={`tel:${number}`}>
        <div className={styles.package_image8}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Paradise Cove Boutique Hotel (Deluxe Premium Room) (Including Flights with Baggage)<span className={styles.carddestinationtxt}>(Mauritius)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,629</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image9} href={`tel:${number}`}>
        <div className={styles.package_image9}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Shandrani Beachcomber Resort & Spa (Deluxe Room) With Half Board<span className={styles.carddestinationtxt}>(Mauritius)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,499</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image10} href={`tel:${number}`}>
        <div className={styles.package_image10}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Heritage Le Telfair Golf & Wellness Resort (Sea View Suite) With Breakfast<span className={styles.carddestinationtxt}>(Mauritius)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,379</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image11} href={`tel:${number}`}>
        <div className={styles.package_image11}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Sofitel Mauritius L'Imperial Resort & Spa (Luxury Room) Breakfast<span className={styles.carddestinationtxt}>(Mauritius)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,549</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image12} href={`tel:${number}`}>
        <div className={styles.package_image12}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Outrigger Mauritius Beach Resort ( JUNIOR SUITE BEACH FRONT)<span className={styles.carddestinationtxt}>(Mauritius)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,599</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image13} href={`tel:${number}`}>
        <div className={styles.package_image13}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Aska Lara Resort & Spa Double Annex Room All-Inclusive<span className={styles.carddestinationtxt}>(Turkey)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£849</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image14} href={`tel:${number}`}>
        <div className={styles.package_image14}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Queens Park Hotel Goynuk Kemer Family Bungalow<span className={styles.carddestinationtxt}>(Turkey)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£699</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image15} href={`tel:${number}`}>
        <div className={styles.package_image15}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Delphin Imperial- All Inclusive Double Superior Land Side<span className={styles.carddestinationtxt}>(Turkey)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,049</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image16} href={`tel:${number}`}>
        <div className={styles.package_image16}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Kuta Paradiso Hotel Bali (Deluxe Room) (Including Flights with Baggage)<span className={styles.carddestinationtxt}>(Bali)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£949</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image17} href={`tel:${number}`}>
        <div className={styles.package_image17}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Hotel Nikko Bali Benoa Beach (Deluxe Room) (Including Flights with Baggage)<span className={styles.carddestinationtxt}>(Bali)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,099</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image18} href={`tel:${number}`}>
        <div className={styles.package_image18}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Lv8 Resort Hotel in Bali (Including Flights, Room with Baggage)<span className={styles.carddestinationtxt}>(Bali)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,149</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image20} href={`tel:${number}`}>
        <div className={styles.package_image20}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Las Vegas & Punta Cana (All-Inclusive) Combine Deal<span className={styles.carddestinationtxt}>(United States & Dominican Republic)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 10 Nights</div>
            <div className={styles.original_price}>£1,799</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image21} href={`tel:${number}`}>
        <div className={styles.package_image21}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h3 className={styles.topic}>Angaga Island Resort & Spa Maldives (WATER BUNGALOW)<span className={styles.carddestinationtxt}>(Maldives)</span></h3>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£2,629</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

    </div>

        <div className={styles.txtPage}>
          <div className={styles.section11}>
            <h2>Simple-To-Organize Travel</h2>
            <Typography>
            We take care of everything—from luxury hotels and flights to hiring local guides—so you can focus on creating lasting memories.
            </Typography>
            <h2>Share Your Experience</h2>
            <Typography>
            We'd love to hear about your unforgettable holiday experiences! Share your stories, photos, and adventures on social media using the hashtag [#FastHolidays]. Don't forget to tag us @FastHolidays on Facebook, Instagram, and Twitter.
            </Typography>
          </div>
        </div>
        <RandomFooter />
      </div>
    </Layout>
  );
}
