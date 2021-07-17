import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card cardTitle="London" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Go"
           img="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg"
           />
           <Card cardTitle="Paris" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Go"
           img="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg"
           />
           <Card cardTitle="Egypt" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Go" 
           img="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg"
           />
        </div>
      </div>
    </section>
  )
}
export default CardSection