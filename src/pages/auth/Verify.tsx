import { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'
import api from 'service/api'
import SumsubWebSdk from '@sumsub/websdk-react'

import FormInput from '../../components/Fields/FormInput'
import CustomButton from '../../components/Button/CustomButton'

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Enter your Email').email('Enter a valid Email')
})

interface RegisterForm {
  email: string
}

const initialValues: RegisterForm = {
  email: ''
}

const Signup = () => {
  const [accessSDKToken, setAccessSDKToken] = useState<string>('')
  const [applicantEmail, setApplicantEmail] = useState<string>('')
  const [applicantPhone, setApplicantPhone] = useState<string>('')

  const config = {
    lang: 'en',
    email: applicantEmail,
    phone: applicantPhone,
    i18n: {
      document: {
        subTitles: {
          IDENTITY: 'Upload a document that proves your identity'
        }
      }
    },
    onMessage: (type: String, payload: any) => {
      console.log('WebSDK onMessage', type, payload)
    },
    uiConf: {
      customCssStr:
        ':root {\n  --black: #000000;\n   --grey: #F5F5F5;\n  --grey-darker: #B2B2B2;\n  --border-color: #DBDBDB;\n}\n\np {\n  color: var(--black);\n  font-size: 16px;\n  line-height: 24px;\n}\n\nsection {\n  margin: 40px auto;\n}\n\ninput {\n  color: var(--black);\n  font-weight: 600;\n  outline: none;\n}\n\nsection.content {\n  background-color: var(--grey);\n  color: var(--black);\n  padding: 40px 40px 16px;\n  box-shadow: none;\n  border-radius: 6px;\n}\n\nbutton.submit,\nbutton.back {\n  text-transform: capitalize;\n  border-radius: 6px;\n  height: 48px;\n  padding: 0 30px;\n  font-size: 16px;\n  background-image: none !important;\n  transform: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s linear;\n}\n\nbutton.submit {\n  min-width: 132px;\n  background: none;\n  background-color: var(--black);\n}\n\n.round-icon {\n  background-color: var(--black) !important;\n  background-image: none !important;\n}'
    },
    onError: (error: String) => {
      console.error('WebSDK onError', error)
    }
  }

  useEffect(() => {
    config.email = applicantEmail
  }, [applicantEmail])

  const handler = () => Promise.resolve<string>('')

  const options = { addViewportTag: false, adaptIframeHeight: true }
  const messageHandler = (type: String, payload: any) => {
    console.log('onMessage: ', type, payload)
  }

  const errorHandler = (data: any) => console.log('onError: ', data)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      const accessToken = async () => {
        const token = await api.createToken({
          externalUserId: values.email
        })
        setAccessSDKToken(token.data.token)
      }
      accessToken()
      setApplicantEmail(values.email)
    }
  })

  return (
    <div className="py-9 signup-back">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Link to="/">
            <img
              src="/assets/logo/logo-default.png"
              alt="Venture Logo"
              style={{ height: '200px' }}
            ></img>
          </Link>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" alignItems="center">
        {!accessSDKToken && (
          <form method="POST" className="flex justify-center mt-20">
            <Grid
              item
              className="lg:!max-w-[1800px]"
              container
              justifyContent="center"
              spacing={2}
              xs={10}
              sm={8}
              md={6}
              lg={4}
            >
              <Grid item className="text-[32px] font-bold text-white">
                <div className="font-podium49">WHITELIST</div>
              </Grid>
              <Grid
                item
                className="text-base font-normal text-center text-white"
                xs={12}
              >
                <div className="mb-[8px]">
                  Know your client, Anti money laundering with Sumsub{' '}
                </div>
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  formik={formik}
                  handleChange={formik.handleChange}
                  className="font-inter text-base font-normal"
                  label="Email"
                  placeholder="Email"
                  isHint={true}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomButton
                  style={{ fontSize: '16px' }}
                  type="button"
                  model="primary"
                  variant="contained"
                  label="verify your identity"
                  onClick={() => {
                    formik.handleSubmit()
                  }}
                />
              </Grid>
            </Grid>
          </form>
        )}
      </Grid>
      {accessSDKToken && (
        <SumsubWebSdk
          accessToken={accessSDKToken}
          expirationHandler={handler}
          config={config}
          options={options}
          onMessage={messageHandler}
          onError={errorHandler}
        />
      )}
    </div>
  )
}

export default Signup
