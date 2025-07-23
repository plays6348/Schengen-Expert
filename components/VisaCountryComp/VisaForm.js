import { Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { theme } from '@/styles/theme';

const useStyles= makeStyles(()=>{
    return {
        divMargin:{
            display: 'flex',
            justifyContent: 'space-around',
            [theme.breakpoints.down("md")]: {
                flexDirection: 'column'
              },
        },
    }
})

const VisaForm = ({countryName}) => {
    const classes= useStyles();
    const router = useRouter();
    const form= useForm({
        defaultValues:{
            email:'',
            phone:'',
            nationality: '',
            fullName:'',
            visaIssue:'',
            mainPurpose: '',
            city:'',
            statusUK:'',
            callTime:'',
            responsePref:'',
            countryName: countryName
        }
    });

    const {register, handleSubmit}= form;

    const onSubmit= (data)=>{
        if (data) {
            emailjs
              .send(
                'service_iodawml',
                'template_lapocf5',
                { ...data },
                'tL_Vpyj5WxQRqs6ec',
              )
              .then((res) => {
                router.push('/thankyou')
              })
              .catch((err) => {
              });
          } else {
            router.push('/thankyou')
          }
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
                <div className={classes.divMargin}>
                    <TextField label="Full name" type='text' 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                        {...register('fullName',{
                            required: 'Name is required'
                        })}
                    />
                    <TextField label="Phone number" type='number' 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                        {...register('phone',{
                            required: 'Phone is required'
                        })}
                    />
                </div>
                <div className={classes.divMargin}>
                    <TextField label="Email" type='email'
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                        {...register('email',{
                            required: 'Email is required'
                        })}
                    />
                    <TextField label="Nationality" 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                    type='text' {...register('nationality')}/>
                </div>
                <div className={classes.divMargin}>
                    <TextField label="City" 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                    type='text' {...register('city')}/>
                    <TextField label="Main Purpose(s) of the journey" 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                    type='text' {...register('mainPurpose')}/>
                </div>

                <InputLabel id="status-select">Status in UK</InputLabel>
                <Select
                    {...register("statusUK")}
                    labelId="status-select"
                    id="simple-status-select"
                    label="Select Visa"
                >
                    <MenuItem value={'ukbrp'}>UK BRP</MenuItem>
                    <MenuItem value={'ukbrc'}>UK BRC</MenuItem>
                    <MenuItem value={'ukpr'}>UK PR</MenuItem>
                    <MenuItem value={'ukilr'}>UK ILR</MenuItem>
                    <MenuItem value={'ukcitizen'}>UK Citizen</MenuItem>
                </Select>

                <InputLabel id="visa-issue">Schengen Visas issued during the past three years</InputLabel>
                <Select
                    {...register("visaIssue")}
                    labelId="visa-issue"
                    id="simple-visa-issue"
                    label="Schengen Visa"
                >
                    <MenuItem value={'schengen-yes'}>Yes</MenuItem>
                    <MenuItem value={'schengen-no'}>No</MenuItem>
                </Select>

                <InputLabel id="response-preferred-by">Response Preferred By</InputLabel>
                <Select
                    {...register("responsePref")}
                    labelId="response-preferred-by"
                    id="simple-response-pref"
                    label="Response Prefer"
                >
                    <MenuItem value={'prefer-email'}>By Email</MenuItem>
                    <MenuItem value={'prefer-call'}>By Call</MenuItem>
                </Select>

                <TextField label="What is the best time to call you?" type='text' {...register('callTime')}/>

                <Button type='submit' variant='contained' color='primary'>
                    Apply Now
                </Button>
                
            </Stack>
        </form>
    </>
  )
}

export default VisaForm