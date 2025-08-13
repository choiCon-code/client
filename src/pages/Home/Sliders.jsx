import React from 'react'
import PropTypes from 'prop-types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function Sliders() {
  return (
    <div className='flex-1'>
      <Carousel>
        <CarouselContent className='max-h-[400px]'>
          <CarouselItem>
            <img src="https://theme.hstatic.net/1000288298/1001020793/14/slide_2_img.jpg?v=1560" alt="" className='rounded-lg' />
          </CarouselItem>
          <CarouselItem>
            <img src="https://theme.hstatic.net/1000288298/1001020793/14/slide_1_img.jpg?v=1560" alt="" className='rounded-lg' />
          </CarouselItem>
          <CarouselItem>
            <img src="https://theme.hstatic.net/1000288298/1001020793/14/slide_4_img.jpg?v=1560" alt="" className='rounded-lg' />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}

Sliders.propTypes = {}

export default Sliders

