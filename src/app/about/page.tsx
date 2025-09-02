import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About GI33 Durian",
  description: "Learn about GI33 Durian's story, our commitment to quality, and our passion for serving the best durians in Kepong, Kuala Lumpur.",
};

export default function AboutPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800">Our Story</h1>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Founded in the heart of Kuala Lumpur, GI33 Durian began with a simple mission: to share the authentic, high-quality taste of Malaysian durians with our community in Kepong and beyond. We believe that a great durian isn't just a fruit; it's an experience.
        </p>
        <p>
          Our journey started with a deep passion for the King of Fruits. We have spent years building relationships with the best orchards to ensure that every durian we sell meets our rigorous standards for freshness, flavor, and texture. From the iconic Musang King to other beloved varieties, we hand-pick each fruit to guarantee your satisfaction.
        </p>
        <hr className="my-6" />
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Location:</strong> Kepong, Kuala Lumpur, Malaysia</li>
          <li><strong>Phone:</strong> <a href="tel:0109450225" className="text-green-700 hover:underline">010-945 0225</a></li>
          <li><strong>Email:</strong> <a href="mailto:dsaluggage@gmail.com" className="text-green-700 hover:underline">dsaluggage@gmail.com</a></li>
        </ul>
      </div>
    </div>
  );
}