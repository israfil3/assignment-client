import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const ImgGallery = () => {
    const images = [
        {
          original: 'https://2.bp.blogspot.com/-kBPxxMhkG24/Wg1U3LW_oBI/AAAAAAAABBo/jCDeVchA7xoVGQjTvciV1Hrz4vq-uQy_gCLcBGAs/s1600/club-fair-2017.jpg',
          thumbnail: 'https://2.bp.blogspot.com/-kBPxxMhkG24/Wg1U3LW_oBI/AAAAAAAABBo/jCDeVchA7xoVGQjTvciV1Hrz4vq-uQy_gCLcBGAs/s1600/club-fair-2017.jpg',
        },
        {
          original: 'https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00013.jpg',
          thumbnail: 'https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00013.jpg',
        },
        {
          original: 'https://www.shutterstock.com/shutterstock/photos/2227968457/display_1500/stock-photo-a-group-of-graduates-expressing-their-delight-in-front-of-the-sculpture-raju-at-tsc-area-on-the-2227968457.jpg',
          thumbnail: 'https://www.shutterstock.com/shutterstock/photos/2227968457/display_1500/stock-photo-a-group-of-graduates-expressing-their-delight-in-front-of-the-sculpture-raju-at-tsc-area-on-the-2227968457.jpg',
        },
        {
            original:"https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00034.jpg",
            thumbnail:"https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00034.jpg"
        },
        {
            original:"https://www.ruet.ac.bd/public/storage/events/cse-graduates-are-celebrating-on-5th-convocation-of-ruet.JPG",
            thumbnail:"https://www.ruet.ac.bd/public/storage/events/cse-graduates-are-celebrating-on-5th-convocation-of-ruet.JPG"
        },
        {
            original:"https://nbmc.ac.bd/wp-content/uploads/2019/09/DSC_0402.jpg",
            thumbnail:"https://nbmc.ac.bd/wp-content/uploads/2019/09/DSC_0402.jpg"
        },
        {
            original:"https://www.bssnews.net/assets/news_photos/2022/10/28/image-90531-1666934715.jpg",
            thumbnail:"https://www.bssnews.net/assets/news_photos/2022/10/28/image-90531-1666934715.jpg"
        }
      ];
      

    return (
        <div className='lg:w-[50%] mx-auto my-10'>
            <h1 className='text-2xl text-center my-5'>College graduate's group pictures.</h1>
            <hr className='border-4 mb-10 w-32 mx-auto border-green-600'></hr>
           <ImageGallery items={images} />
        </div>
    );
};

export default ImgGallery;