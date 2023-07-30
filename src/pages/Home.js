import React from 'react'
import CarouselComponent from '../components/Carousel';
import ImportantMessage from '../components/ImportantMessage';
import HomePage from './HomePage';
import CardComponent from '../components/CardComponent';

const Home = () => {
    const images = [
        {
          url: 'https://media.istockphoto.com/id/538864120/photo/happy-schoolchildren.jpg?s=170667a&w=0&k=20&c=U6KAONq0zDJ1eVYB0ZrFefgUnhxosUQiUo0T5EBK0Sc=',
          title: 'First Image Title',
          description: 'Some description for the first image.',
        },
        {
          url: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/content/gallery/art/5cf24efae0c6f.jpeg',
          title: 'Second Image Title',
          description: 'Some description for the second image.',
        },
        {
          url: 'https://pbs.twimg.com/media/Efbo54BUcAEazhb.jpg',
          title: 'Third Image Title',
          description: 'Some description for the third image.',
        },
      ];
  return (
    <div>
  <CarouselComponent images={images} />
  <CardComponent/>
    <ImportantMessage/>
     <HomePage/>
    </div>
  )
}

export default Home
