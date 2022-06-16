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
        <Grid item container justifyContent="space-between" className="px-5">
          <Grid item>
            <Link to="/">
              <img
                src="/assets/logo/logo-default.png"
                alt="Venture University Logo"
                style={{ height: '200px' }}
              ></img>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/getstarted">
              <CustomButton
                style={{ width: '13rem', fontSize: '1rem' }}
                type="button"
                model="primary"
                variant="contained"
                label="Investor Login"
                className="w-36 uppercase"
                endIcon={<ArrowForwardIosIcon sx={{ color: '#D3D3D3' }} />}
              />
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
                  The Most Scalable
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                  Global Venture Fund
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                  Consistent Superior Returns
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[270px] sm:w-[240px] lg:w-full">
                  Powered by
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[350px] sm:w-[360px] lg:w-full">
                  Unfair & Sustainable
                </li>
              </ul>
            </div>
          </div>
          <div className="summary-text pt-2">
            VU Operates At A Scale & Strength Greater Than A $1B+ Investment
            Fund​
          </div>
          <div className="py-2 md:py-4 lg:py-4">
            <Link to="/registration">
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
            Join VU's Investor Syndicate or Invest In VU Venture Partners Fund
            II - Invest on a deal-by-deal basis. Minimum investment is $5K per
            company. Become an LP in VU's $100M venture capital fund, get
            allocations in all portfolio companies, and have priority on
            investing additional capital in specific companies. Minimum
            investment of $500K.
          </p>
        </Grid>
        <Grid item container justifyContent="center" xs={12} pt={2}>
          <Grid item>
            <Link to="/registration">
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
