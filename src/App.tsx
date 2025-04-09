import './App.css'
import FridgeCard from './FridgeCard';
import { getPreciseDistance } from 'geolib';
import { useState } from 'react';

const fridges = [
  {
    name: "2913 W Cary Street",
    image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/676c4480954df2bd737f9440_IMG_9A971722DD8F-1.jpeg",
    link: "/fridges/2913-w-cary-st",
    mapUrl: "https://maps.app.goo.gl/WZxC58FaVSp2vJvw7",
    usage: 40,
    temp: 60,
    lat: 37.5521239,
    lon: -77.4782909,
    contains: "Fridge",
  },
  // {
  //   name: "109 W 15th Street",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/6704062493bf68a9fc3de1f8_IMG_1186.JPG",
  //   link: "/fridges/109-w-15th-st",
  //   mapUrl: "https://maps.app.goo.gl/DJt1qbdddcjju4ih9",
  //   usage: 40,
  //   temp: 30,
  //   lat: 37.520574,
  //   lon: -77.4477325
  // },
  // {
  //   name: "4700 Oakleys Lane",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/64b6f27e65739f2ea8e0d1f1_20230711_133430.JPG",
  //   link: "/fridges/4700-oakleys-lane",
  //   mapUrl: "https://maps.app.goo.gl/MBnE7jz1d54E6MrD8",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5236364,
  //   lon: -77.3457656
  // },
  // {
  //   name: "3001 Meadowbridge Road",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/6472144a0e586c3cc9d42f3e_17240C4C-0CCA-439D-A981-A4B89960F581.jpg",
  //   link: "/fridges/3001-meadowbridge-road",
  //   mapUrl: "https://maps.app.goo.gl/J775FcBury1jx2f59",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5707719,
  //   lon: -77.4271977
  // },
  // {
  //   name: "3613 Meadowbridge Road",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/6471ffc0a4cda09d2c1fb8ef_IMG_9F616E885462-1.jpeg",
  //   link: "/fridges/meadowbridge-fridge",
  //   mapUrl: "https://maps.app.goo.gl/WkeV1dw54Kgt9LU66",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5816597,
  //   lon: -77.4253666
  // },
  // {
  //   name: "309 Covington Road",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/6418cb36968e906b5112ac26_sankofa.jpeg",
  //   link: "/fridges/309-covington-rd",
  //   mapUrl: "https://maps.app.goo.gl/4zA6T1mKs1ZzGpJKA",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5103999,
  //   lon: -77.4928863
  // },
  // {
  //   name: "2919 North Avenue",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/66378790c2dbbd0ee0435ec2_matchboxmutualfridge.jpg",
  //   link: "/fridges/2919-north-ave",
  //   mapUrl: "https://maps.app.goo.gl/TBWUkQUExEdm2wy49",
  //   usage: 40,
  //   temp:29,
  //   lat: 37.5711371,
  //   lon: -77.4324854
  // },
  // {
  //   name: "2025 Venable Street",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/62ad08bcf1d2a2d878d9b800_7014.jpg",
  //   link: "/fridges/2025-venable-street",
  //   mapUrl: "https://maps.app.goo.gl/wWSQ4XL5KuYVqaYLA",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5381017,
  //   lon: -77.4280529
  // },
  {
    name: "3511 P Street",
    image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/64721547ba5ccd13915eb9c1_3A18BC09-E24A-435B-893B-94431A6FF820.JPG",
    link: "/fridges/3511-p-street",
    mapUrl: "https://maps.app.goo.gl/yuJDoaPZA32yu3Pe8",
    usage: 40,
    temp: 35,
    lat: 37.5319107,
    lon: -77.412651
  },
  {
    name: "255 W 27th Street",
    image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/64de5606041f3234c6f3ef7e_IMG_4585.JPG",
    link: "/fridges/255-w-27th-st",
    mapUrl: "https://maps.app.goo.gl/wpxKpMb5WSH5YB3P8",
    usage: 40,
    temp: 30,
    lat: 37.5171385,
    lon: -77.4596732
  },
  // {
  //   name: "3200 Dill Avenue",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/62ad0858a1afd91c43269307_PXL_20220.jpg",
  //   link: "/fridges/3200-dill-ave",
  //   mapUrl: "https://maps.app.goo.gl/NiYJehSkfWAkaBmp8",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5710346,
  //   lon: -77.4134039
  // },
  // {
  //   name: "2414 Hull Street",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/62ad0879de9b293ae3bffd22_PXL_20220_06.jpg",
  //   link: "/fridges/2414-hull-street",
  //   mapUrl: "https://maps.app.goo.gl/yPSTJ8vehXD5VRMg7",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5140847,
  //   lon: -77.4631533
  // },
  // {
  //   name: "*temporarily closed* 4809 Parker Street",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/6418cccd6bf17c3cb6c87df1_PXL_20220924_145142853.JPG",
  //   link: "/fridges/4809-parker-street",
  //   mapUrl: "https://maps.app.goo.gl/n4bafYSiG69rpgfG7",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.5166993,
  //   lon: -77.3959938
  // },
  // {
  //   name: "*temporarily closed* 3701 E River Road",
  //   image: "https://cdn.prod.website-files.com/6243808cf3d10807a4f672e4/62acb160373339708c791737_IMG_4821.jpg",
  //   link: "/fridges/3701-e-river-road",
  //   mapUrl: "https://maps.app.goo.gl/bgti5G3eJeRUxrqL7",
  //   usage: 40,
  //   temp: 35,
  //   lat: 37.2401256,
  //   lon: -77.4283993
  // },
];

function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortedFridges, setSortedFridges] = useState(fridges);

  const enableLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          const sorted = [...fridges].sort((a, b) => {
            const distA = getPreciseDistance(userLocation, { latitude: a.lat, longitude: a.lon }, 0.1);
            const distB = getPreciseDistance(userLocation, { latitude: b.lat, longitude: b.lon }, 0.1);
            return distA - distB;
          });

          setSortedFridges(sorted);
          setLoading(false);
        },
        (error) => alert("Location access denied. Unable to sort fridges by distance."),
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="nav-bar">
        <div className="div-navbar">
          <a href="/" className="w-nav-brand">
            <img
              src="https://cdn.prod.website-files.com/6243808bf3d108710bf672c3/628d316eba704079de5c86fb_3-removebg-preview.png"
              alt="Logo"
              className="image-195"
              width="150"
            />
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>&#9776;</button>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <a href="/donate" className="nav-link">Donate</a>
            <a href="/volunteer" className="nav-link">Volunteer</a>
            <a href="/merchandise" className="nav-link">Merchandise</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="/fridges" className="button-2 w-button">Fridges</a>
          </div>
        </div>
      </nav>

      {/* Fridge List */} 
      <section className="fridge-list" style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div className="w-container">
            <div className="fridges-heading-wrapper">
              <div className="fridges-heading left-aligned">
                Full list of fridges
              </div>
              <div className="fridges-button-group">
                <button onClick={() => window.open("https://opencollective.com/rva-community-fridges/donate", "_blank")} className="fridge-button">
                  Donate
                </button>
                <button onClick={enableLocation} className="fridge-button">
                  Enable Locations
                </button>
              </div>
            </div>
            {loading && (
              <div className="spinner" style={{ textAlign: "center", margin: "20px" }}>
                <div className="lds-dual-ring"></div>
                <p className="loading-text">Sorting fridges...</p>
              </div>
            )}
            <div className="collection-list-wrapper w-dyn-list">
              <div role="list" className="collection-list-courses w-dyn-items">
                {sortedFridges.map((fridge) => (
                  <FridgeCard key={fridge.name} {...fridge} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
