import React, {useEffect} from 'react'
import BlogHeader from '../Components/Blog/BlogHeader'
import Blogs from '../Components/Blog/Blogs'
import Subscribe from '../Components/Blog/Subscribe'

function Blog() {
    useEffect(() => {
        const nav: any = document.querySelector(".header");

        nav.style.background = "white";
    }, [])
    return (
        <div className="blog">
            
            <BlogHeader/>
            
            <Blogs/>
            
            <Subscribe/>
        </div>
    )
}

export default Blog
