import React from 'react';
import '../Styles/gallery.css';
import image1 from '../Assets/Image/img01.jfif'
import image2 from '../Assets/Image/img02.jfif'
import image3 from '../Assets/Image/img03.jfif'
import image4 from '../Assets/Image/img04.jfif'
import image5 from '../Assets/Image/img05.jfif'
import image6 from '../Assets/Image/img06.jfif'
import image7 from '../Assets/Image/img07.jfif'
import image8 from '../Assets/Image/img08.jfif'

const GalleryItem = ({ imageSrc, heading, description, link }) => (
    <div className="box">
      <img src={imageSrc} alt="gallery item" />
      <div className="content">
        <h3 id="t">{heading}</h3>
        <p>{description}</p>
        <a id="a" href={link} target="_blank" rel="noopener noreferrer" className="button">Locate</a>
      </div>
    </div>
  );
  
  const Gallery = () => (
    <section className="gallery" id="gallery">
      <h5 className="heading">
        <span>G</span>
        <span>A</span>
        <span>L</span>
        <span>L</span>
        <span>E</span>
        <span>R</span>
        <span>Y</span>
      </h5>
      <div className="box-container">
        <GalleryItem
          imageSrc={image1}
          heading="God's Own Country"
          description="Aalapuzha is a lake situated in the Kozhikode, Kerala. Flowing as a distributory of Korapuzha from Kanayankodu in Koyilandy, Akalapuzha flows northwest to meet the Kuttiyadipuzha at Payyoli Chirp."
          link="https://www.google.com/maps/place/Alappuzha,+Kerala/@9.5010271,76.2597026,12z/data=!3m1!4b1!4m6!3m5!1s0x3b0884f1aa296b61:0xb84764552c41f85a!8m2!3d9.4980667!4d76.3388484!16zL20vMGIwOXF5?entry=ttu"
        />
        <GalleryItem
          imageSrc={image2}
          heading="Cultural Attraction"
          description="The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers."
          link="https://www.google.com/maps/place/Hawa+Mahal/@26.9240458,75.8241395,17z/data=!3m1!4b1!4m6!3m5!1s0x396db14b1bd30ba5:0x860e5d531eccb20c!8m2!3d26.9240458!4d75.8267144!16zL20vMDZrN3Fj?entry=ttu"
        />
        <GalleryItem
          imageSrc={image3}
          heading="India Gate"
          description="The India Gate is a war memorial located near the Kartavya path on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Rajpath."
          link="https://www.google.com/maps/place/India+Gate/@28.612912,77.2269348,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2daa9eb4d0b:0x717971125923e5d!8m2!3d28.612912!4d77.2295097!16zL20vMDM1bWMz?entry=ttu"
        />
        <GalleryItem
          imageSrc={image4}
          heading="Nature Masterpiece"
          description="Ooty is located in the Nilgiri Hills, it is known as the 'Queen of Hill Stations' and is a popular tourist destination."
          link="https://www.google.com/maps/place/Ooty,+Tamil+Nadu/@11.4118497,76.6522214,13z/data=!3m1!4b1!4m6!3m5!1s0x3ba8bd84b5f3d78d:0x179bdb14c93e3f42!8m2!3d11.4102038!4d76.6950324!16s%2Fm%2F012n8khs?entry=ttu"
        />
        <GalleryItem
          imageSrc={image5}
          heading="Iconic Beauty"
          description="The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India."
          link="https://www.google.com/maps/place/Taj+Mahal/@27.1751448,78.0395673,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu"
        />
        <GalleryItem
          imageSrc={image6}
          heading="New World"
          description="Udaipur is a city located in the southernmost part of Rajasthan, near the Gujarat border. It is surrounded by the Aravali Range, which separates it from the Thar Desert."
          link="https://www.google.com/maps/place/Udaipur,+Rajasthan/@24.6082638,73.6224693,12z/data=!3m1!4b1!4m6!3m5!1s0x3967e56550a14411:0xdbd8c28455b868b0!8m2!3d24.585445!4d73.712479!16zL20vMGJfa2Z5?entry=ttu"
        />
        <GalleryItem
          imageSrc={image7}
          heading="Ellora Cave"
          description="Ellora Caves are a multi-religious rock-cut cave complex with inscriptions dating from the period 6th century CE onwards, located in the Aurangabad District of Maharashtra, India. They are also called verul caves."
          link="https://www.google.com/maps/place/Ellora+Caves/@20.0267844,75.1590625,15z/data=!4m10!1m2!2m1!1sEllora+Caves!3m6!1s0x3bdb93bd138ae4bd:0x574c6482cf0b89cf!8m2!3d20.0267844!4d75.1770869!15sCgxFbGxvcmEgQ2F2ZXNaDiIMZWxsb3JhIGNhdmVzkgETaGlzdG9yaWNhbF9sYW5kbWFya-ABAA!16zL20vMDI0Nng3?entry=ttu"
        />
        <GalleryItem
          imageSrc={image8}
          heading="Wall Art"
          description="Gadisar Lake is an artificial lake in Jaisalmer, Rajasthan, India. It was built by the founder of Jaisalmer, King Rawal Jaisal."
          link="https://www.google.com/maps/place/Gadisar+Lake/@26.9078022,70.9120541,16z/data=!3m1!4b1!4m6!3m5!1s0x3947bc3b65d78b1b:0xa5440052177fa1c5!8m2!3d26.9085788!4d70.9231001!16s%2Fg%2F1tf7__8d?entry=ttu"
        />
      </div>
    </section>
  );
  
  export default Gallery;