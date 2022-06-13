import { Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="center"
        className="pt-16 pb-8 text-center"
      >
        <Grid item xs={12} pb={2}>
          <div className="h3-text">FOLLOW US</div>
        </Grid>
        <Grid item container justifyContent="center" columnSpacing={4} xs={12}>
          <Grid item sx={{ py: '5px' }}>
            <a href="">
              <img
                src="/assets/Icon/Twitter-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Twitter-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Twitter-light.svg')
                }
                alt="Twitter page link"
              />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="" className="">
              <img
                src="/assets/Icon/Discord-light.svg"
                onMouseOver={(e) => {
                  e.currentTarget.src = '/assets/Icon/Discord-hover.svg'
                }}
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Discord-light.svg')
                }
                alt="Discord channel link"
              />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="">
              <img
                src="/assets/Icon/Instagram-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Instagram-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Instagram-light.svg')
                }
                alt="Instagram page link"
              />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="">
              <img
                src="/assets/Icon/Facebook-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Facebook-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Facebook-light.svg')
                }
                alt="Facebook page link"
              />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" pb={{ xs: 1, md: 2 }}>
        <Grid item>
          <img
            style={{ height: '45px' }}
            className="mb-8"
            src="/assets/Image/Footer/sumsub-footer.png"
            alt="Built on Flow"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        columnSpacing={{ xs: 100, sm: 100, md: 3 }}
        rowSpacing={{ xs: 1, md: 2 }}
        pb={4}
        className="pt-2 text-center bg-black2"
      >
        <Grid item>
          <Link to="/terms-of-use">
            <p className="fineprint-text hover:text-transparent underline bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
              Terms of Use
            </p>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/privacy-policy">
            <p className="fineprint-text hover:text-transparent underline bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
              Privacy policy
            </p>
          </Link>
        </Grid>
        <Grid item>
          <p className="fineprint-text">
            Copyright &copy;2022 VU. All Rights Reserved
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
