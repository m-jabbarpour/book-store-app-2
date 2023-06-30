import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";

import BookCard from "./BookCard";

import { Book } from "@/types";

interface Props {
  books: Book[];
}

const BookSwiper: React.FC<Props> = ({ books }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};


export default BookSwiper