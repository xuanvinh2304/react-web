import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

const SliderShow = ({ data, control, auto, ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const timeOut = props.timeOut ? props.timeOut : 3000;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleControl = useCallback((value) => {
    if (value === 'giam') {
      if (activeSlide <= 0) {
        setActiveSlide(data.length - 1);
      } else {
        setActiveSlide(activeSlide - 1);
      }
    }
    if (value === 'tang') {
      if (activeSlide >= data.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    }
  });

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        handleControl('tang');
      }, timeOut);

      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [auto, handleControl, timeOut]);

  return (
    <div className="slider-show">
      {data.map((item, index) => (
        <div
          key={index}
          className={`slider-show__item ${
            index === activeSlide ? 'active' : ''
          }`}
        >
          <div className="slider-show__info">
            <div className={`slider-show__info__title color-${item.color}`}>
              <span>{item.title}</span>
            </div>
            <div className="slider-show__info__description">
              <span>{item.description}</span>
            </div>
            <div className="slider-show__info__btn">
              <Link to={item.path}>
                <Button backgroundColor={item.color} icon="bx bx-cart" animate>
                  Chi tiết
                </Button>
              </Link>
            </div>
          </div>
          <div className="slider-show__image">
            <div className={`shape bg-${item.color}`}></div>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
      {control ? (
        <div className="slider-show__control">
          <div
            className="slider-show__control__item"
            onClick={() => handleControl('giam')}
          >
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="slider-show__control__item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div
            className="slider-show__control__item"
            onClick={() => handleControl('tang')}
          >
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

SliderShow.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

export default SliderShow;
