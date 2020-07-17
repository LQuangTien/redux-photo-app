import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import Banner from '../../../../components/Banner';
// import Images from '../../../../constants/images';
import { Container } from 'reactstrap';
import { removePhoto } from 'features/Photo/photoSlice'

MainPage.propTypes = {

};

function MainPage(props) {
  const photos = useSelector(state => state.photos)

  const dispatch = useDispatch()
  const history = useHistory()

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }
  const handlePhotoRemoveClick = (photo) => {
    console.log("DAY LA MAIN", photo)
    const photoId = photo.id;
    const action = removePhoto(photoId);
    dispatch(action)
  }
  return (
    <div className='photo-main' >
      <Banner title='Your Awesome Photos' backgroundUrl={Images.PINK_BG} />

      <PhotoList
        photos={photos}
        onPhotoEditClick={handlePhotoEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />

      <Container className='text-center'>
        <Link to='/photos/add'>Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;