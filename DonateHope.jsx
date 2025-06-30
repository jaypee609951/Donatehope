
import React from "react";
import { Button } from "@/components/ui/button";

export default function DonateHope() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Give Hope to Orphaned Children</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Your donation helps provide shelter, food, education, and emotional care for children who have lost everything.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">Donate Now</Button>
      </section>

      <section className="grid gap-10 md:grid-cols-3 mb-16">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            We believe every child deserves love and care. We partner with local shelters to reach the most vulnerable and support them long-term.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <p>
            100% of donations go directly to programs that feed, clothe, and educate orphaned children. You can choose to make a one-time or monthly donation.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Why It Matters</h2>
          <p>
            Children without parents are at high risk of exploitation and poverty. Your contribution makes a life-saving difference.
          </p>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Join Us in Changing Lives</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Even a small act of kindness can create a ripple effect. Join hands with us to bring light into the lives of children who need it most.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">Start Giving</Button>
      </section>

      <footer className="text-center text-sm text-gray-500 border-t pt-6">
        © 2025 DonateHope Foundation. All rights reserved.
      </footer>
    </main>
  );
}
