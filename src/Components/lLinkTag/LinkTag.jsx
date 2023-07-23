import React from 'react';

const LinkTag = () => {
    return (
        <div className='text-center lg:w-[40%] mx-auto border shadow-lg lg:p-10'>
            <h1 className='text-2xl '>Student research paper links </h1>
            <hr className='border-4 mb-10 w-32 mx-auto border-green-600'></hr>
            <div className="">
                <h1><a href="https://www.collegeboard.org/"> https://www.collegeboard.org/</a></h1>
                <h1><a href="https://dl.acm.org/doi/pdf/10.1145/74224.74245">https://dl.acm.org/doi/pdf/10.1145/74224.74245</a></h1>
                <h1><a href="https://dl.acm.org/doi/abs/10.1145/1644038.1644046">https://dl.acm.org/doi/abs/10.1145/1644038.1644046</a></h1>
                <h1><a href="https://www.commonapp.org/">https://www.commonapp.org/</a></h1>
            </div>
        </div>
    );
};

export default LinkTag;