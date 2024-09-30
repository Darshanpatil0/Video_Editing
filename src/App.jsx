import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Bulr from './Components/Bulr'
import PROGRESS from './Components/PROGRAMS'
import Why from './Components/Why'
import Plaing from './Components/Plaing'
import Meater from './Components/Meater'
import Email from './Components/Email'
import Fotter from './Components/Fotter'
import LocomotiveScroll from 'locomotive-scroll';
import { Link } from 'react-scroll'
import Project from './Components/Project'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
 
  const [isLoaded, setIsLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const totalImages = 4 // Adjust this number based on the actual number of images

  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = [
        './img/imges22.jpg',
        './img/images11.jpg',
        './img/images44.jpg',
        './img/images33.jpg',
      ]

      const loadImage = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => {
            setImagesLoaded(prev => prev + 1)
            resolve()
          }
          img.onerror = reject
          img.src = url
        })
      }

      try {
        await Promise.all(imageUrls.map(loadImage))
        setIsLoaded(true)
      } catch (error) {
        console.error('Failed to load images:', error)
        setIsLoaded(true) // Set to true even if image loading fails to prevent infinite loading
      }
    }

    loadImages()
  }, [])

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-bar" style={{ width: `${(imagesLoaded / totalImages) * 100}%` }}></div>
        <div className='flex  bg-zinc-700 h-screen w-full items-center justify-center'>
          
          
        <div className='flex bg-zinc-700 h-screen w-full items-center justify-center'>
      <div className='text-center'>
        <span className='text-4xl font-semibold text-white'>Loading</span>
        <span className='text-4xl font-semibold text-white'>
          {' '}{Math.round((imagesLoaded / totalImages) * 100)}%
        </span>
      </div>
    </div>
    </div>
    </div>

          
          
        
    )
  }

  return (
    <div className='w-full h-screen appmain text-white bg-zinc-700'>
      <Navbar />
      <Bulr />
      <Hero />
      <PROGRESS />
      <Project />
      <Why />
      <Plaing />
      <Meater />
      <Email />
      <Fotter />
    </div>
  )
}

export default App