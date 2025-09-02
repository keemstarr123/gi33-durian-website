import type { Metadata } from 'next';

export const metadata: Metadata = {
title: "Policies - GI33 Durian",
description: "Read the privacy policy, terms of service, and refund policy for GI33 Durian, your trusted fresh durian supplier.",
};

export default function PoliciesPage() {
return (
<div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
<h1 className="text-4xl font-bold text-center mb-8 text-green-800">Our Policies</h1>
<div className="space-y-8">
<section>
<h2 className="text-2xl font-semibold mb-2 text-gray-800">Privacy Policy</h2>
<p className="text-gray-700">
GI33 Durian values your privacy. We only collect personal details such as your name, phone number, and delivery address when you place an order. This information is used solely for processing your purchase and delivering your durians. We do not share, sell, or rent your personal data to third parties. Any payment information is handled securely by our payment partners and is not stored on our servers.
</p>
</section>
<section>
<h2 className="text-2xl font-semibold mb-2 text-gray-800">Terms of Service</h2>
<p className="text-gray-700">
By ordering from GI33 Durian, you agree to provide accurate delivery details and ensure that someone is available to receive the order at the scheduled time. Prices listed on our website are in Malaysian Ringgit (MYR) and may change depending on market conditions. We reserve the right to cancel or refuse any order due to unforeseen circumstances such as stock unavailability or payment issues.
</p>
</section>
<section>
<h2 className="text-2xl font-semibold mb-2 text-gray-800">Return & Refund Policy</h2>
<p className="text-gray-700">
Durians are fresh and highly perishable products. As such, we do not accept returns once an order has been delivered. However, if you receive durians that are spoiled or not up to our quality standards, please contact us at <a href="tel:0109450225" className="text-green-700 hover:underline">010-945 0225</a> within 3 hours of receiving your order. We may offer a partial refund or replacement on a case-by-case basis.
</p>
</section>
</div>
</div>
);
}