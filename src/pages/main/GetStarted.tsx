import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SumsubWebSdk from '@sumsub/websdk-react'

import { User, AuthState, AuthResult, AccessToken } from 'types/types'
import api from '../../service/api'

import { useAuth } from 'providers/AuthProvider'
import CustomButton from 'components/Button/CustomButton'
import Footer from 'layout/Footer'
import CustomCard from 'components/Card/CustomCard'

const GetStarted = () => {
  useEffect(() => {
    const createAccessToken = async () => {
      const accessToken = await api.createToken({ externalUserId: 'abcd' })
      console.log('accessToken from backend: ' + accessToken.data.token)
    }
    createAccessToken()
  }, [])

  const handler = () => Promise.resolve()
  const config = {
    lang: 'en'
  }
  const options = { addViewportTag: false, adaptIframeHeight: true }
  const messageHandler = (type: string, payload: any) => {
    console.log(type, payload)
  }

  const errorHandler = () => console.log('onError')

  const navigate = useNavigate()
  const { user, loggedIn, logIn } = useAuth()
  console.log(loggedIn)

  return (
    <div className="text-white bg-black">
      <Grid container className="justify-center items-center pt-28 pb-12">
        <Grid className="text-center">
          <h1 className="font-podium49 text-5xl uppercase">
            SIGN UP FOR Venture University
          </h1>
          <Grid className="flex justify-center">
            <p className="self-center my-8 text-2xl">
              Two parts to setting up for Venture University
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className="pb-12">
        <Grid
          item
          container
          justifyContent="center"
          spacing={4}
          xs={11}
          lg={10}
          xl={8}
          className="pt-8"
        >
          <Grid
            item
            className="flex justify-center items-center py-3 w-full md:w-1/3"
          >
            <CustomCard
              avatar="1"
              title="Apply now"
              content="Apply to VU or log into an existing one."
              actionLabel="Sign up"
              done={loggedIn}
              model={loggedIn ? 'secondary' : 'primary'}
              onClick={async () => {
                logIn()
                navigate('/registration')
              }}
              learnArticle="/"
            />
          </Grid>
          <Grid
            item
            className="flex justify-center items-center  py-3 w-full md:w-1/3"
          >
            <CustomCard
              avatar="2"
              title="Verify your Identity"
              done={!!window.localStorage.getItem('KYC')}
              disabled={!loggedIn}
              model={!loggedIn ? 'disabled' : 'primary'}
              content="You’ll need your drivers license or passport with Sumsub."
              actionLabel="Verify Details"
              onClick={() => {
                navigate('/')
              }}
              learnArticle="/"
            />

            {/* <SumsubWebSdk
              testEnv={true}
              accessToken={accessToken.data}
              expirationHandler={handler}
              config={config}
              options={options}
              onMessage={messageHandler}
              onError={errorHandler}
            /> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="text-white bg-black1">
        <Grid item sx={{ width: '100%' }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default GetStarted
