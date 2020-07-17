import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  initialValues: {}
}

function PhotoForm(props) {
  // const initialValues = {
  //   title: '',
  //   categoryId: null,
  //   photo: ''
  // }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.number().required("This field is required").nullable(),

    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required("This field is required"),
      otherwise: Yup.string().notRequired()
    })
  })

  const { initialValues, isAddMode } = props
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}

    >
      {
        formikProps => {
          //do something
          const { values, errors, touched, isSubmitting } = formikProps;

          return (
            <Form>
              <FastField
                name='title'
                component={InputField}

                label='Title'
                placeholder='Eg: wow nature'
              />
              <FastField
                name='categoryId'
                component={SelectField}

                options={PHOTO_CATEGORY_OPTIONS}
                label='Category'
                placeholder="What's your photo category"
              />

              <FastField
                name='photo'
                component={RandomPhotoField}
                label='Photo'
              />

              <FormGroup>
                <Button type='submit' color={isAddMode ? 'primary' : "success"}>
                  {isAddMode ? "Add to album" : "Update your photo"}
                  {isSubmitting && <Spinner size='sm' />}
                </Button>
              </FormGroup>
            </Form>
          )
        }
      }
    </Formik>

  );
}

export default PhotoForm;