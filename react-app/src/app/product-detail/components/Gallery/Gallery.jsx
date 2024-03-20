import React, { useState } from 'react';
import { IMG_PATH, IMG_QS, IMG_SOURCE } from '../../../../utils/config/constants';

const Gallery = ({ item }) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="productFullDetail-imageCarousel-3B4 max-w-[640px] mx-auto my-0 lg_m-0 lg_px-0 lg_py-sm">
      <div className="carousel-root-3Sd lg_gap-sm grid grid-cols-auto grid-rows-auto">
        <div className="carousel-carouselContainer-e3n grid">
          <button
            type="button"
            aria-label="Previous Image"
            className="carousel-previousButton-1vE flex outline-none z-foreground lg_hidden justify-start ml-sm">
            <span className="carousel-chevron-1zo icon-root-2x9 items-center inline-flex justify-center border-2 border-solid border-transparent self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-icon-_rq">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </span>
          </button>
          <div className="carousel-imageContainer-3Yh image-container-2U5 relative">
            <img
              loading="eager"
              aria-hidden="true"
              alt={item[index].label}
              className="carousel-currentImage-1yX block h-full object-center object-contain w-full lg_object-top image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg=="
              width={640}
              style={{ '--width': 640 }}
            />
            <img
              loading="lazy"
              alt={item[index].label}
              className="carousel-currentImage-1yX block h-full object-center object-contain w-full lg_object-top image-loaded-3O9 absolute left-0 top-0"
              sizes="640px"
              src={`${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=640&height=800`}
              srcSet={`
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=40&height=50       40w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=80&height=100      80w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=160&height=200    160w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=320&height=400    320w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=640&height=800    640w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=960&height=1200   960w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=1280&height=1600 1280w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=1600&height=2000 1600w,
                ${IMG_SOURCE}${IMG_PATH}${item[index].file}?${IMG_QS}&width=2560&height=3200 2560w
              `}
              width={640}
              style={{ '--height': 800, '--width': 640 }}
            />
          </div>
          <button
            type="button"
            aria-label="Next Image"
            className="carousel-nextButton-3lU flex outline-none z-foreground lg_hidden justify-end mr-sm">
            <span className="carousel-chevron-1zo icon-root-2x9 items-center inline-flex justify-center border-2 border-solid border-transparent self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-icon-_rq">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </button>
        </div>
        <div className="carousel-thumbnailList-2v3 content-stretch gap-xs grid grid-cols-carouselThumbnailList grid-flow-col justify-center mt-xs z-foreground lg_content-start lg_gap-sm lg_grid-cols-[1fr] lg_grid-flow-row lg_mt-0">
          {item.map((img, key) => (
            <button
              key={`pimg-${img.uid}`}
              onClick={() => setIndex(key)}
              type="button"
              className={`${key === index ? 'thumbnail-rootSelected-3Va' : ''} thumbnail-root-3ea border border-solid border-strong h-[0.875rem] rounded-full w-[0.875rem] lg_border-0 lg_h-auto lg_rounded-none lg_w-auto bg-gray-900 thumbnail-root-3ea border border-solid border-strong h-[0.875rem] rounded-full w-[0.875rem] lg_border-0 lg_h-auto lg_rounded-none lg_w-auto`}
              aria-label="Current Image">
              <div className="image-root-2Qz image-container-2U5 relative">
                <img
                  loading="eager"
                  aria-hidden="true"
                  alt={img.label}
                  className="thumbnail-image-cwU hidden lg_bg-subtle lg_block lg_h-full lg_object-center lg_object-contain lg_rounded-sm lg_w-full image-placeholder_layoutOnly-1jH image-placeholder-1mM bg-transparent left-0 relative top-0 bg-transparent"
                  height={170}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHN0eWxlPSdmaWxsOiBub25lJyAvPjwvc3ZnPg=="
                  width={135}
                  style={{ '--height': 170, '--width': 135 }}
                />
                <img
                  loading="lazy"
                  alt={img.label}
                  className="thumbnail-image-cwU hidden lg_bg-subtle lg_block lg_h-full lg_object-center lg_object-contain lg_rounded-sm lg_w-full image-loaded-3O9 absolute left-0 top-0"
                  sizes="135px"
                  src={`${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=135&height=170`}
                  srcSet={`
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=40&height=50       40w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=80&height=100      80w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=160&height=200    160w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=320&height=400    320w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=640&height=800    640w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=960&height=1200   960w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=1280&height=1600 1280w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=1600&height=2000 1600w,
                  ${IMG_SOURCE}${IMG_PATH}${img.file}?${IMG_QS}&width=2560&height=3200 2560w
                  `}
                  width={135}
                  style={{ '--height': 170, '--width': 135 }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
