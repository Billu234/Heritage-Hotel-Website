import { useState } from 'react';
import { ArrowDown, ArrowRight, CarFront, MapPin, Menu, Phone, Utensils, Wifi, X } from 'lucide-react';

const photos = {
  evening: '/images/Screenshot_2026-10-04_130120_1791100218178.png',
  day: '/images/Screenshot_2026-10-04_130159_1791099863400.png',
  celebration: '/images/Screenshot_2026-10-04_130250_1791100107267.png',
  diningWide: '/images/Screenshot_2026-10-04_130307_1791100155128.png',
  greenRoom: '/images/Screenshot_2026-10-04_130327_1791099911836.png',
  lounge: '/images/Screenshot_2026-10-04_130356_1791100192702.png',
  hallway: '/images/Screenshot_2026-10-04_130420_1791099894719.png',
  diningDetail: '/images/Screenshot_2026-10-04_130446_1791100069777.png',
  waterDusk: '/images/Screenshot_2026-10-04_130602_1791100210009.png',
  waterSunset: '/images/Screenshot_2026-10-04_130621_1791100228509.png',
  redRoom: '/images/Screenshot_2026-10-04_131717_1791100128419.png',
};

const nav = [
  ['Stay', '#stay'],
  ['Facilities', '#facilities'],
  ['Dine', '#dine'],
  ['Gather', '#gather'],
  ['The setting', '#setting'],
];

function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`photo-frame ${className}`}><img src={src} alt={alt} loading="lazy" /></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain min-h-[100dvh] overflow-hidden">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Heritage Hotel, home" onClick={closeMenu}>
          <span className="brand-mark">H</span>
          <span className="brand-name">THE <b>HERITAGE</b><small>HOTEL</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Plan a visit <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-photo"><img src={photos.evening} alt="The Heritage Hotel glowing with warm lights after dusk" /></div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow reveal">A place to stay · dine · gather</p>
          <h1 id="hero-title" className="serif reveal reveal-delay">Make room<br />for <em>together.</em></h1>
          <p className="hero-lede reveal reveal-delay">At The Heritage Hotel, a welcoming stay, a table shared, and a reason to celebrate come together under one roof.</p>
          <a className="light-link reveal" href="#stay">Discover the hotel <ArrowDown size={16} /></a>
        </div>
        <div className="hero-caption"><span>THE HERITAGE HOTEL</span><span>A warm welcome, from day into evening</span></div>
      </section>

      <section className="intro section-pad">
        <div className="intro-kicker"><span className="eyebrow">A little of everything</span><span className="rule" /></div>
        <div className="intro-copy">
          <p className="serif intro-statement">A considered place for<br /><i>the moments that matter.</i></p>
          <div className="intro-aside">
            <p>Settle into a thoughtfully furnished room. Take your seat in the dining room. Bring people together for a celebration. The Heritage is made for the different ways a good visit can unfold.</p>
            <a className="text-link" href="#stay">Explore what’s here <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="amenities-strip" aria-label="Hotel amenities">
        <a className="amenity-item" href="#dine" data-testid="amenity-restaurant">
          <Utensils size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Restaurant</span>
        </a>
        <div className="amenity-static" data-testid="amenity-parking">
          <CarFront size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Parking available</span>
        </div>
        <div className="amenity-static" data-testid="amenity-wifi">
          <Wifi size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Wi-Fi available</span>
        </div>
      </section>

      <section className="stay-section" id="stay">
        <div className="stay-top">
          <div className="stay-heading">
            <span className="eyebrow">01 / Stay awhile</span>
            <h2 className="serif">A softer place<br />to land.</h2>
            <p>Warm details, a restful bed, and a little room to make the stay your own. Find your way in through the hotel’s quiet corridors.</p>
            <a className="text-link" href="#contact">Ask about a stay <ArrowRight size={15} /></a>
          </div>
          <Photo src={photos.greenRoom} alt="Guest room with a neatly made bed, rich green accents and warm wood furnishings" className="stay-main-photo" />
        </div>
        <div className="stay-gallery">
          <Photo src={photos.redRoom} alt="Guest room with crisp white bedding, red cushions and a coordinating bed runner" />
          <div className="stay-gallery-note">
            <span className="eyebrow">A room to return to</span>
            <p className="serif">Small comforts.<br /><i>Unhurried mornings.</i></p>
            <span className="micro-label">A glimpse inside</span>
          </div>
          <Photo src={photos.hallway} alt="A softly lit hotel hallway with framed artwork and polished dark flooring" />
        </div>
      </section>

      <section className="facilities-section section-pad" id="facilities">
        <div className="facilities-heading">
          <div>
            <span className="eyebrow">More for your stay</span>
            <h2 className="serif">A few helpful<br /><i>details.</i></h2>
          </div>
          <p>Practical arrival times, thoughtful touches, and useful services for a comfortable visit.</p>
        </div>
        <div className="facility-grid">
          <article className="facility-card">
            <span className="eyebrow">01 / Arrival</span>
            <h3 className="serif">Plan your stay.</h3>
            <dl className="facility-times">
              <div><dt>Check-in</dt><dd>02:00 PM</dd></div>
              <div><dt>Check-out</dt><dd>12:00 PM</dd></div>
            </dl>
            <p className="facility-note">Free cancellation · Complimentary welcome kit</p>
          </article>
          <article className="facility-card">
            <span className="eyebrow">02 / At the hotel</span>
            <h3 className="serif">Everyday facilities.</h3>
            <ul className="facility-list">
              <li>Smoking allowed</li>
              <li>Photocopier</li>
              <li>WiFi</li>
              <li>Parking available</li>
              <li>Common seating area</li>
              <li>Balcony</li>
              <li>Reception</li>
            </ul>
          </article>
          <article className="facility-card">
            <span className="eyebrow">03 / Services</span>
            <h3 className="serif">A little extra help.</h3>
            <ul className="facility-list">
              <li>Wake-up calls</li>
              <li>Safari assistance</li>
            </ul>
          </article>
          <article className="facility-card">
            <span className="eyebrow">04 / Gather & dine</span>
            <h3 className="serif">Room to come together.</h3>
            <ul className="facility-list">
              <li>Conference rooms</li>
              <li>Banquet hall</li>
              <li>Restaurant</li>
              <li>Bakery & confectionery store</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="dine-section section-pad" id="dine">
        <div className="section-heading">
          <span className="eyebrow">02 / Restaurant</span>
          <h2 className="serif">Good things<br /><i>happen at the table.</i></h2>
          <p>A welcoming dining room, set for conversation. Whether it’s a meal shared or a moment made special, there’s a place for you here.</p>
        </div>
        <div className="dine-gallery">
          <Photo src={photos.diningWide} alt="Wide view of the hotel dining room with prepared tables, hanging lights and dark green chairs" className="dine-wide" />
          <div className="dine-side">
            <p className="serif dine-quote">Pull up a chair.<br />Stay for a while.</p>
            <Photo src={photos.diningDetail} alt="Close view of a dining table set with pale cloth, glassware and green chairs" className="dine-detail" />
            <span className="eyebrow">The dining room · ready to welcome you</span>
          </div>
        </div>
      </section>

      <section className="gather-section" id="gather">
        <Photo src={photos.celebration} alt="A celebration setting with a flower-covered arch, draped backdrop and welcoming lounge seat" className="gather-photo" />
        <div className="gather-content">
          <span className="eyebrow">03 / Make it a moment</span>
          <h2 className="serif">Bring your<br /><i>people together.</i></h2>
          <p>From intimate gatherings to a room dressed for celebration, the Heritage offers a setting where your occasion can take centre stage.</p>
          <a className="outline-link" href="#contact">Talk about your gathering <ArrowRight size={16} /></a>
        </div>
        <span className="gather-index">A ROOM FOR THE OCCASION</span>
      </section>

      <section className="lounge-section section-pad">
        <div className="lounge-copy">
          <span className="eyebrow">In between the plans</span>
          <h2 className="serif">A moment<br /><i>to settle in.</i></h2>
          <p>Pause in the lounge. Let the day find its own pace, with a comfortable corner and a warm welcome close at hand.</p>
        </div>
        <Photo src={photos.lounge} alt="Comfortable hotel lounge with deep green tufted sofas, a patterned rug and softly lit ceiling" className="lounge-photo" />
      </section>

      <section className="setting-section" id="setting">
        <div className="setting-intro">
          <span className="eyebrow">04 / A change of pace</span>
          <h2 className="serif">Stay for the<br /><i>last light.</i></h2>
          <p>As evening settles, the waterside view shifts with it. A quiet ending to a day spent your way.</p>
        </div>
        <div className="waterside-pair">
          <figure className="water-card water-card-first">
            <Photo src={photos.waterDusk} alt="A calm waterside view at dusk, with a tree, fountains and pale evening sky" />
            <figcaption><span>01</span><span>At the edge of evening</span></figcaption>
          </figure>
          <figure className="water-card water-card-second">
            <Photo src={photos.waterSunset} alt="Waterside at sunset with the sky glowing pink and lights reflecting across the water" />
            <figcaption><span>02</span><span>When the lights come on</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="day-night">
        <Photo src={photos.day} alt="Daytime exterior of The Heritage Hotel, a modern multi-storey building with planted balconies" />
        <div className="day-night-text">
          <span className="eyebrow">From first arrival to evening glow</span>
          <p className="serif">One welcoming place.<br /><i>Many ways to be here.</i></p>
        </div>
        <Photo src={photos.evening} alt="The Heritage Hotel exterior illuminated warmly at night" />
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline"><span className="eyebrow">The Heritage Hotel</span><span className="eyebrow">Your next visit starts here</span></div>
        <div className="contact-main">
          <h2 className="serif">We’d love to<br /><i>welcome you.</i></h2>
          <div className="contact-action">
            <p>Thinking about a stay, a meal, or a gathering? Call us or find us in Ratahara, Rewa.</p>
            <a className="contact-link" href="tel:+917947140143" data-testid="link-hotel-phone" aria-label="Call The Heritage Hotel at 7947140143">
              <span>Call the hotel<small>7947140143</small></span><Phone size={18} aria-hidden="true" />
            </a>
            <a
              className="contact-link contact-address-link"
              href="https://www.google.com/maps/search/?api=1&query=15%2F126%2C+Opposite+R.+P.+Memorial+Public+School%2C+NH+7%2C+Ratahara%2C+Rewa+486003%2C+Madhya+Pradesh%2C+India"
              target="_blank"
              rel="noreferrer"
              data-testid="link-hotel-directions"
              aria-label="Get directions to The Heritage Hotel in Ratahara, Rewa"
            >
              <span>Find us<small>15/126, Opposite R. P. Memorial Public School, NH 7, Ratahara, Rewa – 486003, Madhya Pradesh, India</small></span>
              <MapPin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#top" aria-label="The Heritage Hotel, back to top">
            <span className="brand-mark">H</span><span className="brand-name">THE <b>HERITAGE</b><small>HOTEL</small></span>
          </a>
          <span className="footer-line">A place to stay · dine · gather</span>
          <a className="back-top" href="#top">Back to top ↑</a>
        </div>
      </section>
    </main>
  );
}

export default App;