import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination , Navigation} from "swiper/modules";

function TopSellers() {
    const[books,setBooks]=useState([])  //empty array sincebooks.json is an array of object
    const [selectCategory, setselectCategory] = useState("Choose a genre");

    const categories=["Choose a genre", "Business","Fiction", "Horror","Adventure"]

    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then((data)=>setBooks(data))
    },[])

    const filteredBooks = selectCategory === "Choose a genre"
     ? books
     : books.filter(book => book.category.toLowerCase() === selectCategory.toLowerCase())
    
      
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setselectCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.map((book, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full max-w-[320px]">
              <BookCard book={book} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopSellers
