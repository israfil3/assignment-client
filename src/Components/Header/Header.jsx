import React from 'react';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Collage from '../Collage/Collage';
import ImgGallery from '../Img-gallery/ImgGallery';
import LinkTag from '../lLinkTag/LinkTag';
import Rating1 from '../Rating/Rating1';
import logo from './front-view-educational-objects-composition.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
    const [text] = useTypewriter({
        words: ['Education is the transmission of knowledge, skills, and character traits. There are many debates about its precise definition, for example, about which aims it tries to achieve. A further issue is whether part of the meaning of education is that the change in the student is an improvement. Some researchers stress the role of critical thinking to distinguish education from indoctrination. These disagreements affect how to identify, measure, and improve forms of education. The term can also refer to the mental states and qualities of educated people. Additionally, it can mean the academic field studying education.'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <>
        <div className="">
            <div className="h-600" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', height: '600px',  position: 'relative' }}>
                <div className="my-7 lg:w-[50%] text-2xl absolute text-white ml-10">
                    <span className=''>{text}</span>
                    <Cursor cursorColor='red' />

                </div>
            </div>
        </div>
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
        </>
    );
};

export default Header;