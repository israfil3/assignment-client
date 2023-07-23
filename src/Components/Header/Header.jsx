import React from 'react';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Collage from '../Collage/Collage';
import ImgGallery from '../Img-gallery/ImgGallery';
import LinkTag from '../lLinkTag/LinkTag';
import Rating1 from '../Rating/Rating1';

const Header = () => {
    return (
        <div>
          <div className="">
                <Search></Search>
            </div>
            <div className="">
                <Collage></Collage>
            </div>
            <div className="">
                <ImgGallery></ImgGallery>
            </div>
            <div className="">
                <LinkTag></LinkTag>
            </div>
            <div className="">
                <Rating1></Rating1>
            </div>
        </div>
    );
};

export default Header;