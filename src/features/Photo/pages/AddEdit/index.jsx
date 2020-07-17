import React from 'react';
import PropTypes from 'prop-types';


import './AddEdit.scss'
import PhotoForm from 'features/Photo/components/PhotoForm';
import Banner from 'components/Banner';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { photoId } = useParams()
  const isAddMode = !photoId;
  const currentPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId))
  console.log("CURRENT", currentPhoto);
  const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: ''
    }
    : currentPhoto;

  const handleSubmitForm = (values) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: Math.trunc(Math.random() * 99999)
          }
          const action = addPhoto(values)
          dispatch(action);
          resolve(true)
        } else {
          const action = updatePhoto(values);
          dispatch(action);
          resolve(true)
        }
        history.push('/photos')
      }, 500);
    })

  }

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo' />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmitForm}
        />
      </div>
    </div>
  );
}

export default AddEditPage;