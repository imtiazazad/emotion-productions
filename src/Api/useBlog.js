// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import BaseURL from '../Hooks/BaseURL';
// import Loading from '../Pages/SharedPages/Loading';
// import { useNavigate } from 'react-router-dom';
// import data from '../Data/BlogsData.json';

// const useBlog = () => {
//     // const navigate = useNavigate();
//     // const [Blogs, setBlogs] = useState();
//     // const { data: AllBlogsData, isLoading } = useQuery(["AllBlogsData"], () =>
//     //     BaseURL.get(`/api/v1/blogs`)
//     // );

//     // console.log(AllCoursesData);

//     useEffect(() => {

//         // const data = AllBlogsData && AllBlogsData?.data?.data?.result;
//         const othersBlogs = data?.filter(courses => courses?.category === "popular");

//         // console.log(data);
        
//     }, []);

//     // if (isLoading) {
//     //     return <Loading />;
//     // };


//     // console.log(Courses);

//     return { Courses };
// };

// export default useBlog;