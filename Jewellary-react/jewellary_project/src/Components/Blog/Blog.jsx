import React from 'react'
import './Blog.css'
import all_product from '../Assets/all_product'

const Blog = () => {
  return (
    <div className='blog-container' id="blog">
        <h1>Blogs</h1>
        <p>There are latest blog posts</p>
        <div className="blog-content">
            <div className="blog">
                <img src={all_product.blog_img1} alt="" />
                <h6>18 July 2021/web Design</h6>
                <h1>What Has Happened to All <br /> of the Web Design Ideas?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum deserunt dantium qui impedit et nulla, voluptate ab.</p>

                <button>Read More</button>
            </div>

             <div className="blog">
                <img src={all_product.blog_img2} alt="" />
                <h6>18 July 2021/web Design</h6>
                <h1>What Has Happened to All <br />of the Web Design Ideas?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum deserunt dantium qui impedit et nulla, voluptate.</p>

                <button>Read More</button>
            </div>

             <div className="blog">
                <img src={all_product.blog_img3} alt="" />
                <h6>18 July 2021/web Design</h6>
                <h1>What Has Happened to All <br /> of the Web Design Ideas?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum deserunt dantium qui impedit et nulla, voluptate.</p>

                <button>Read More</button>
            </div>

        </div>
</div>
  )
}

export default Blog