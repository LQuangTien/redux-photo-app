import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photos: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photos: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null
}

function PhotoList(props) {
  const { photos, onPhotoEditClick, onPhotoRemoveClick } = props

  return (
    <Row>
      {
        photos.map(photo => (
          <Col key={photo.title} xs="12" md="6" lg="3">
            <PhotoCard
              photo={photo}
              onEditClick={onPhotoEditClick}
              onRemoveClick={onPhotoRemoveClick}
            />
          </Col>
        ))
      }
    </Row>
  );
}

export default PhotoList;