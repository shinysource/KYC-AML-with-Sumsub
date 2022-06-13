import { Grid } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'

import CustomButton from 'components/Button/CustomButton'
import { useEffect } from 'react'
import Footer from 'layout/Footer'
import { ArrowAnim } from '../../components/Animations/Animations'

const Home = () => {
  return (
    <div className="text-white">
      <Grid container className="py-10 home-back">
        <Grid item container justifyContent="center">
          <Grid item>
            <Link to="/">
              <img
                src="/assets/logo/logo-default.png"
                alt="Venture University Logo"
                style={{ height: '75px' }}
              ></img>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className="text-animate-content text-4xl font-normal text-center py-2 md:py-4 lg:py-4 w-full sm:w-full md:w-full lg:w-full">
            <div className="text-animate-content-container">
              <ul className="text-animate-content-container-list">
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[180px] sm:w-[160px] lg:w-full">
                  Venture University
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                  Investor Accelerator
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                  Break Into The VC/PE Industry
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                  Launch Their Own Funds
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[350px] sm:w-[360px] lg:w-full">
                  Advance Their Careers
                </li>
              </ul>
            </div>
          </div>
          <div className="summary-text pt-2">Venture Capital</div>
          <div className="py-2 md:py-4 lg:py-4">
            <Link to="/getstarted">
              <CustomButton
                style={{ width: '10rem', fontSize: '1.15rem' }}
                type="button"
                model="primary"
                variant="contained"
                label="Apply now"
                className="w-36 uppercase"
                endIcon={<ArrowForwardIosIcon sx={{ color: '#D3D3D3' }} />}
              />
            </Link>
          </div>
        </Grid>

        <Grid container alignItems="flex-end">
          <ArrowAnim />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className="text-center bg-black1">
        <Grid item xs={12} pt={4}>
          <p className="h2-text">Venture Capital</p>
        </Grid>
        <Grid item xs={11} sm={8} lg={6} xl={4} pt={2}>
          <p className="paragraph-text">
            Welcome to Venture University, Venture University's Investor
            Accelerator Is Designed For Individuals Looking To Gain High Quality
            Investment Experience In Order To Break Into The VC/PE Industry,
            Launch Their Own Funds, & Advance Their Careers.
          </p>
        </Grid>
        <Grid item container justifyContent="center" xs={12} pt={2}>
          <Grid item>
            <Link to="/getstarted">
              <CustomButton
                style={{ width: '10rem', fontSize: '1.15rem' }}
                type="button"
                model="primary"
                variant="contained"
                label="Apply now"
                className="w-36 uppercase"
                endIcon={<ArrowForwardIosIcon sx={{ color: '#D3D3D3' }} />}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="bg-black1">
        <Grid item sx={{ width: '100%' }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
