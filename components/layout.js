import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import styles from '@/styles/components/layout.module.css';

import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
  IconButton,
  Button,
  CssBaseline,
  Fab,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { number, whatsapp } from '../utils/constants';
import { getCookie, setCookie } from 'utils/cookies';
import DialogComponent from './common/dialog';

import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PolicyIcon from '@mui/icons-material/Policy';
import GavelIcon from '@mui/icons-material/Gavel';
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AirlinesIcon from '@mui/icons-material/Airlines';
import SendIcon from '@mui/icons-material/Send';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FlightIcon from '@mui/icons-material/Flight';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PublicIcon from '@mui/icons-material/Public';

const drawerWidth = 280;

const muiStyles = {
  avatar: {
    width: '5rem',
    height: '5rem',
  },
  closeBtn: {
    padding: '5px 0',
    width: '20px',
  },
};

export default function Layout({
  title,
  keywords,
  author,
  description,
  children,
  addProductJson,
  window,
  robots,
  ogTitle,
  ogType,
  ogDescription,
  ogImage,
  ogSiteName,
}) {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
    // console.log(showSideBar);
  };

  const drawer = (
    <div className={styles.drawer}>
      <ThemeProvider theme={theme}>
        <div className={styles.drawerLinks}>
          <List sx={{ padding: 0, marginTop: '5px' }}>
            <Link href="/" className={styles.link}>
              <ListItem
                button={router.pathname == '/' ? false : true}
                sx={
                  router.pathname == '/'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={
                      router.pathname == '/'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/destinations" className={styles.link}>
              <ListItem
                button={router.pathname == '/destinations' ? false : true}
                sx={
                  router.pathname == '/destinations'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <AddLocationAltIcon
                    sx={
                      router.pathname == '/destinations'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Destinations
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />

            <Link href="/flights" className={styles.link}>
              <ListItem
                button={router.pathname == '/flights' ? false : true}
                sx={
                  router.pathname == '/flights'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <FlightIcon
                    sx={
                      router.pathname == '/flights'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Flights
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />

            <Link href="/holidays" className={styles.link}>
              <ListItem
                button={router.pathname == '/holidays' ? false : true}
                sx={
                  router.pathname == '/holidays'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <HolidayVillageIcon
                    sx={
                      router.pathname == '/holidays'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Holidays
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/airlines" className={styles.link}>
              <ListItem
                button={router.pathname == '/airlines' ? false : true}
                sx={
                  router.pathname == '/airlines'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <AirlinesIcon
                    sx={
                      router.pathname == '/airlines'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Airlines
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/visa-service" className={styles.link}>
              <ListItem
                button={router.pathname == '/visa-service' ? false : true}
                sx={
                  router.pathname == '/visa-service'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <PublicIcon
                    sx={
                      router.pathname == '/visa-service'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Visa Service
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/send-inquiry" className={styles.link}>
              <ListItem
                button={router.pathname == '/send-inquiry' ? false : true}
                sx={
                  router.pathname == '/send-inquiry'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <SendIcon
                    sx={
                      router.pathname == '/send-inquiry'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Send Inquiry
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link href="/beat-my-quote" className={styles.link}>
              <ListItem
                button={router.pathname == '/beat-my-quote' ? false : true}
                sx={
                  router.pathname == '/beat-my-quote'
                    ? {
                        backgroundColor: '#cc1817',
                        cursor: 'pointer',
                        color: 'white',
                      }
                    : { cursor: 'pointer' }
                }
              >
                <ListItemIcon>
                  <RequestQuoteIcon
                    sx={
                      router.pathname == '/beat-my-quote'
                        ? { color: 'white' }
                        : { color: '#cc1817' }
                    }
                  />
                </ListItemIcon>
                <ListItemText className={styles.listItemText}>
                  Beat My Quote
                </ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>More</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ padding: 0, marginTop: '0' }}>
                  <Link href={`/contact-us`} className={styles.link}>
                    <ListItem
                      button={router.pathname == '/contact-us' ? false : true}
                      sx={
                        router.pathname == '/contact-us'
                          ? {
                              backgroundColor: '#cc1817',
                              cursor: 'pointer',
                              color: 'white',
                            }
                          : { cursor: 'pointer' }
                      }
                    >
                      <ListItemIcon>
                        <ContactSupportIcon
                          sx={
                            router.pathname == '/contact-us'
                              ? { color: 'white' }
                              : { color: '#cc1817' }
                          }
                        />
                      </ListItemIcon>
                      <ListItemText className={styles.listItemText}>
                        Contact us
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link href={`/privacy-policy`} className={styles.link}>
                    <ListItem
                      button={
                        router.pathname == '/privacy-policy' ? false : true
                      }
                      sx={
                        router.pathname == '/privacy-policy'
                          ? {
                              backgroundColor: '#cc1817',
                              cursor: 'pointer',
                              color: 'white',
                            }
                          : { cursor: 'pointer' }
                      }
                    >
                      <ListItemIcon>
                        <PolicyIcon
                          sx={
                            router.pathname == '/privacy-policy'
                              ? { color: 'white' }
                              : { color: '#cc1817' }
                          }
                        />
                      </ListItemIcon>
                      <ListItemText className={styles.listItemText}>
                        Privacy Policy
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link href={`/booking-conditions`} className={styles.link}>
                    <ListItem
                      button={
                        router.pathname == '/booking-conditions' ? false : true
                      }
                      sx={
                        router.pathname == '/booking-conditions'
                          ? {
                              backgroundColor: '#cc1817',
                              cursor: 'pointer',
                              color: 'white',
                            }
                          : { cursor: 'pointer' }
                      }
                    >
                      <ListItemIcon>
                        <GavelIcon
                          sx={
                            router.pathname == '/booking-conditions'
                              ? { color: 'white' }
                              : { color: '#cc1817' }
                          }
                        />
                      </ListItemIcon>
                      <ListItemText className={styles.listItemText}>
                        Booking Conditions
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link href={`/terms-conditions`} className={styles.link}>
                    <ListItem
                      button={
                        router.pathname == '/terms-conditions' ? false : true
                      }
                      sx={
                        router.pathname == '/terms-conditions'
                          ? {
                              backgroundColor: '#cc1817',
                              cursor: 'pointer',
                              color: 'white',
                            }
                          : { cursor: 'pointer' }
                      }
                    >
                      <ListItemIcon>
                        <HelpIcon
                          sx={
                            router.pathname == '/terms-conditions'
                              ? { color: 'white' }
                              : { color: '#cc1817' }
                          }
                        />
                      </ListItemIcon>
                      <ListItemText className={styles.listItemText}>
                        Terms & Conditions
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link href={`/faqs`} className={styles.link}>
                    <ListItem
                      button={router.pathname == '/faqs' ? false : true}
                      sx={
                        router.pathname == '/faqs'
                          ? {
                              backgroundColor: '#cc1817',
                              cursor: 'pointer',
                              color: 'white',
                            }
                          : { cursor: 'pointer' }
                      }
                    >
                      <ListItemIcon>
                        <QuestionAnswerIcon
                          sx={
                            router.pathname == '/faqs'
                              ? { color: 'white' }
                              : { color: '#cc1817' }
                          }
                        />
                      </ListItemIcon>
                      <ListItemText className={styles.listItemText}>
                        FAQs
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                </List>
              </AccordionDetails>
            </Accordion>
          </List>
        </div>
        <div>{/* <Button>Call</Button> */}</div>
      </ThemeProvider>
    </div>
  );

  // useEffect(() => {
  //   setCookie('showCount', 0);
  //   const showedCount = getCookie('showCount');
  //   if (showedCount == 0) {
  //     setShowDialog(true);
  //     setCookie('showCount', 1);
  //   } else if (showedCount == 1 || showedCount == 2) {
  //     setTimeout(() => {
  //       setShowDialog(true);
  //       setCookie('showCount', 2);
  //     }, 4000);
  //   }
  // }, []);

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'TravelAgency',
    name: 'Fast Holidays',
    description:
      'Fast Holidays is a travel agency that offers affordable and convenient travel packages.',
    url: 'https://https://schengenexpert.co.uk/',
    logo: 'https://https://schengenexpert.co.uk/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ' 71-75 Shelton St ',
      addressLocality: 'London',
      postalCode: ' WC2H 9JQ',
      addressCountry: 'UK',
    },
    telephone: '+44-20-37441171',
    email: 'info@schengenexpert.co.uk',
    sameAs: [
      'https://www.facebook.com/fastholidays',
      'https://twitter.com/fastholidays',
      'https://www.instagram.com/fastholidays',
    ],
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <title>{title}</title>
        {robots && <meta name="robots" content={robots} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {description && <meta name="description" content={description} />}
        {author && <meta name="author" content={author} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogType && <meta property="og:type" content={ogType} />}
        {ogDescription && (
          <meta property="og:description" content={ogDescription} />
        )}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          key="product-jsonld"
        />

      </Head>
      <Header onMenuClick={handleSideBar} clicked={showSideBar} />
      <Box
        className="drawer"
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={showSideBar}
          anchor="right"
          onClose={handleSideBar}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component={styles.main}>
        <div className={styles.child}>{children}</div>
      </Box>
      <Footer />
      <div className={styles.fabContainer}>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
          <div
            className={styles.fab1}
            // onClick={() => handleSideBar(!showSideBar)}
          >
            <WhatsAppIcon />
          </div>
        </a>
        <a href={`tel:${number}`}>
          <div
            className={styles.fab2}
            // onClick={() => handleSideBar(!showSideBar)}
          >
            <CallIcon />{number}
          </div>
        </a>
      </div>
      {/* <Dialog
        open={showDialog}
        keepMounted
        onClose={() => setShowDialog(false)} */}
      {/* > */}
      <DialogComponent />
      {/* </Dialog> */}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Fast Holidays',
  description: '',
  keywords: '',
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(4),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  marginTop: 0,
}));
