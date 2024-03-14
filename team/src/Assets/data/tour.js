import tourImg01 from "../../Assets/tour-img01.jpg";
import tourImg02 from "../../Assets/tour-img02.jpg";
import tourImg03 from "../../Assets/tour-img03.jpg";
import tourImg04 from "../../Assets/tour-img04.jpg";
import tourImg05 from "../../Assets/tour-img05.jpg";
import tourImg06 from "../../Assets/tour-img06.jpg";
import tourImg07 from "../../Assets/tour-img07.jpg";
import tourImg08 from "../../Assets/tour-img08.jpeg";


const tours = [
  {
    id: "01",
    title: "Mysore Palace, Karnataka",
    city: "Mysore",
    address:"Somewhere in Mysore",
    distance: 300,
    price: "99",
    maxGroupSize: 10,
    desc: "The Mysore Palace, located in the city of Mysore in Karnataka, India, is a stunning example of Indo-Saracenic architecture, blending Hindu, Islamic, Rajput, and Gothic styles. With its intricate designs, towering spires, and vibrant colors, it stands as a magnificent symbol of the rich cultural heritage of the region.",
    reviews: [
      {
        name: "User01",
        rating: 4.6,
      },
    ],
    avgRating: 4.2,
    photo: tourImg01,
    featured: false,
  },
  {
    id: "02",
    title: "Taj Mahal, Uttar Pradesh ",
    city: "Agra",
    distance: 400,
    address:"Somewhere in Uttar Pradesh",
    price: "99",
    maxGroupSize: 8,
    desc: "The Taj Mahal, a UNESCO World Heritage Site in Agra, India, is an architectural marvel renowned for its breathtaking beauty and as a symbol of eternal love, commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal.",
    reviews: [
      {
        name: "User02",
        rating: 4.6,
      },
    ],
    avgRating: 4.3,
    photo: tourImg02,
    featured: false,
  },
  {
    id: "03",
    title: "Tanjore Temple, Tamil Nadu",
    address:"Somewhere in Tamil Nadu",
    city: "Thanjavur",
    distance: 500,
    price: "99",
    maxGroupSize: 8,
    desc: "The Tanjore Temple, also known as the Brihadeeswarar Temple, is a magnificent architectural marvel in Tamil Nadu, India, showcasing exquisite Dravidian craftsmanship and towering vimana, dedicated to Lord Shiva.",
    reviews: [
      {
        name: "User03",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "04",
    title: "India Gate, Maharastra",
    address:"Somewhere in Maharastra",
    city: "Mumbai",
    distance: 500,
    price: "99",
    maxGroupSize: 8,
    desc: "India Gate, a majestic war memorial in New Delhi, stands as a poignant tribute to the Indian soldiers who sacrificed their lives during World War I, with its grand arch and eternal flame evoking solemn remembrance and national pride.",
    reviews: [
      {
        name: "User04",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "05",
    title: "Solang Valley, Himachal Pradesh",
    address:"Somewhere in Manali",
    city: "Manali",
    distance: 500,
    price: "99",
    maxGroupSize: 8,
    desc: "Solang Valley, nestled amidst the picturesque Himalayas in Himachal Pradesh, India, is a popular destination offering thrilling adventure activities such as skiing, paragliding, and zorbing amidst breathtaking snow-capped landscapes.",
    reviews: [
      {
        name: "User05",
        rating: 4.6,
      },
    ],
    avgRating: 4.0,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Victoria Memorial, West Bengal",
    address:"Somewhere in West Bengal",
    city: "Kolkata",
    distance: 500,
    price: "99",
    maxGroupSize: 8,
    desc: "The Victoria Memorial, an iconic landmark in Kolkata, India, is a splendid example of colonial architecture, dedicated to Queen Victoria's memory, housing a museum showcasing India's rich history and cultural heritage.",
    reviews: [
      {
        name: "User06",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Beach, Kerala",
    city: "Kochi",
    address:"Somewhere in Kerala",
    distance: 500,
    price: "99",
    maxGroupSize: 8,
    desc: "Kochi Beach, situated along the Arabian Sea coast in Kerala, India, enchants visitors with its serene shores, picturesque Chinese fishing nets, and vibrant local culture, making it a delightful destination for leisurely strolls and stunning sunsets.y",
    reviews: [
      {
        name: "User07",
        rating: 4.6,
      },
    ],
    avgRating: 4.2,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Yercaud, Tamil Nadu",
    city: "Salem",
    distance: 500,
    address:"Somewhere in Salem",
    price: "99",
    maxGroupSize: 8,
    desc: "Yercaud, nestled in the Eastern Ghats of Tamil Nadu, India, captivates with its tranquil ambiance, lush greenery, and refreshing climate, offering a rejuvenating escape amidst scenic viewpoints, serene lakes, and aromatic spice plantations.",
    reviews: [
      {
        name: "User08",
        rating: 4.6,
      },
    ],
    avgRating: 4.4,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;