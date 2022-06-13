import { useState, useRef, useMemo, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@mui/material'
import useAuth from 'hooks/useAuth'

import FormInput from '../../components/Fields/FormInput'
import FormCheck from '../../components/Fields/FormCheck'
import FormSelect from '../../components/Fields/FormSelect'
import CustomButton from '../../components/Button/CustomButton'
import FormMobile from '../../components/Fields/FormMobile'
import { LineAxisOutlined } from '@mui/icons-material'

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Enter your Firstname'),
  last_name: Yup.string().required('Enter your Lastname'),
  email: Yup.string().required('Enter your Email').email('Enter a valid Email'),
  mobile: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Enter x numbers'
    )
    .max(10, 'number less than 10')
    .notRequired(),
  acceptTerms: Yup.bool().oneOf([true], 'Accept the privacy terms to continue')
})

interface RegisterForm {
  first_name: string
  last_name: string
  email: string
  mobile: string | undefined
  acceptTerms: boolean
}

const initialValues: RegisterForm = {
  first_name: '',
  last_name: '',
  email: '',
  mobile: '',
  acceptTerms: false
}

const Signup = () => {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const retURL = useMemo(() => `${window.location.origin}/thank-you`, [window])

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      formik.setFieldValue('acceptTerms', false)
      formik.setFieldValue('acceptReceive', false)
      actions.resetForm()
      navigate('/getstarted')
    }
  })

  return (
    <Grid container justifyContent="center" className="py-9 signup-back">
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
              style={{ height: '75px' }}
            ></img>
          </Link>
        </Grid>
      </Grid>

      <Grid item>
        <form
          action=""
          method="POST"
          className="flex justify-center"
          ref={formRef}
        >
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
                id="first_name"
                name="first_name"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="First name"
                placeholder="First name"
                isHint={true}
              />
            </Grid>
            <Grid item xs={12}>
              <FormInput
                id="last_name"
                name="last_name"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="Last name"
                placeholder="Last name"
                isHint={true}
              />
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
              <FormMobile
                id="mobile"
                name="mobile"
                formik={formik}
                handleChange={formik.handleChange}
                className="font-inter text-base font-normal"
                label="Mobile (optional)"
                isHint={true}
              />
            </Grid>

            <Grid item xs={12}>
              <FormCheck
                name="acceptTerms"
                label={
                  <div className=" text-sm text-grey">
                    <p>
                      I agree to the terms and conditions of the&nbsp;
                      <Link to="/privacy-policy" className="underline">
                        Sumsub
                      </Link>{' '}
                      and to receiving communications in relation to Sumsub.
                    </p>
                  </div>
                }
                formik={formik}
                handleChange={formik.handleChange}
                isHint={true}
              />
            </Grid>
            <Grid item xs={12}>
              <FormCheck
                name="acceptReceive"
                label={
                  <div className=" text-sm text-grey">
                    <p>
                      I would like to receive communications from the Sumsub and
                      Sumsub partners about other products and initiatives of
                      the Sumsub and Sumsub partners.{' '}
                    </p>
                  </div>
                }
                formik={formik}
                handleChange={formik.handleChange}
                isHint={true}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomButton
                style={{ fontSize: '16px' }}
                type="button"
                model="primary"
                variant="contained"
                label="SUBSCRIBE"
                onClick={() => {
                  formik.handleSubmit()
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Signup
