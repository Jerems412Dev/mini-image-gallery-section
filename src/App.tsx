import './App.css';
import Data from './Data';
import Image from './Image';

function App() {
  const images: Data[] = [
    { link: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wanderer-abstract-colorful-mixed-media-painting-modern-art-prints.jpg', rounded: 'rounded-tl-lg rounded-bl-lg' },
    { link: 'https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D', rounded: '' },
    { link: 'https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?s=612x612&w=0&k=20&c=9q1y7CGMBGpoVzVKCIvRqQrE9FZu3F4VGfjIcUHgpvY=', rounded: '' },
    { link: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg', rounded: 'rounded-tr-lg rounded-br-lg'}
  ]

  return (
    <>
      <div 
        className="flex flex-row w-full h-screen bg-[#030303] justify-center items-center"
      >
        <div 
          className="flex flex-col w-2/3 h-3/5   justify-center items-center gap-y-4 font-mono"
        >
          <h1
            className="text-gray-400"
          >
            RECENT ARTWORKS
          </h1>
          <div 
            className="flex flex-row w-full h-full bg-[#282220] border-1 border-gray-600 rounded-xl p-1 gap-x-1.5"
          >
            {images.map((image, index) => (
              <Image key={index} link={image.link} rounded={image.rounded} />))}
          </div>
          <h1
            className="text-gray-600 text-sm"
          >
            HOVER THE IMAGE EXPAND
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
