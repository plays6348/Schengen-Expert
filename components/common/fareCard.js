import React, { useEffect } from 'react';
import styles from '@/styles/components/common/fareCard.module.css';

import { Button, Divider, Typography, ThemeProvider, Stack } from '@mui/material';
import { number } from '../../utils/constants';
import { theme } from '../../styles/theme';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { convertString, encrypt, decrypt } from '../../utils/helpers';
import Link from 'next/link';

const muiStyles = {
  opacityLow: {
    opacity: '0.7',
  },
  bolder: {
    fontWeight: 'bolder',
  },
};

export default function FareCard({ data, index }) {
  const convertName = (name) => {
    const _name = name.split('-');
    _name.pop(_name.length - 1);

    return convertString(_name.join('-'));
  };

  // console.log(data);
  // console.log(index);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.fareCard}>
        {index < 4 && (
          <span className={styles.fareCard__badge}>
            <img src="/assets/offer2.png" alt="offer badge" />
          </span>
        )}
        <div className={styles.fareCard__top}>
        <div className={styles.airline__logoForMobile}>
            <img
              src={data.airline.img}
              className={styles.airline__logo}
              alt="airline logo"
            />
          </div>
          <div className={styles.fareCard__top__divider}>
          <Divider /> 
          </div>
          <div className={styles.deptName}>
            <Typography  variant="h6" sx={muiStyles.bolder}>
              {convertString(data.deptCountry.name)}
            </Typography>
            <Typography variant="caption" sx={muiStyles.opacityLow}>
              {convertName(data.deptAirport.airport)},
            </Typography>
          </div>
          <div className={styles.arrow}>
            <SyncAltIcon />
          </div>
          <div className={styles.destName}>
            <Typography variant="h6" sx={muiStyles.bolder}>
              {convertString(data.destCountry.name)}
            </Typography>
            <Typography  variant="caption" sx={muiStyles.opacityLow}>
              {convertName(data.destAirport.airport)},
            </Typography>
          </div>
          <div className={styles.price}>
            <Typography
              variant="h5"
              sx={{ ...muiStyles.bolder, color: '#cc1817' }}
            >
              £{data.price}
            </Typography>
            <Typography sx={muiStyles.opacityLow}>
              Subject to Availablity
            </Typography>
          </div>
        </div>
        <Divider />
        <div className={styles.fareCard__bottom}>
          <div className={styles.airline__logoForPC}>
            <img
              src={data.airline.img}
              className={styles.airline__logo}
              alt="airline logo"
            />
          </div>
          <div className={styles.fareCard__footerr}>
          <a href={`tel:${number}`}>
            <div
              className={styles.callingNumber}
              style={{ fontWeight: '500' }}
            >
              {number}
            </div>
          </a>
          <div>
            <Link
              href={`/book/${encrypt(
                data._id,
                data.deptAirport.airportCode,
                data.destAirport.airportCode,
              )}`}
            >
              <Button variant="contained">Book Now</Button>
            </Link>
          </div>
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
}
