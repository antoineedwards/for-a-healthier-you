import React from "react";

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to For a Healthier You</h1>
        <p>Explore our natural remedies and wellness services.</p>
      </header>

      <section>
        <h2>Our Offerings</h2>
        <ul>
          <li><Link href="/products">View Products</Link></li>
          <li><Link href="/services">Discover Services</Link></li>
          <li><Link href="/about">Learn About Us</Link></li>
        </ul>
      </section>

      <footer>
        <p>Contact us for personalized recommendations and more.</p>
      </footer>
    </div>
  );
}