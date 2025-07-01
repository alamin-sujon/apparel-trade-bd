"use client"
import { interProducts } from '@/constant/product.data';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6';
import { toast } from 'sonner';

export default function Footer() {
    const quickLinks = [
        { name: "Home", link: "/" },
        { name: "Products", link: "/products" },
        { name: "Services", link: "/services" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        const email = form.email.value;
        const message = form.message.value;
        console.log(email, message)
        toast.success("Email send successfully. wait for response")
        form.reset();
    }
    return (
        <footer className="bg-black/90 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 ">
                {/* Left */}
                <div>
                    <h4 className=" font-semibold mb-2">APPAREL TRADE BD.
                    </h4>
                    <p className="text-sm mb-4">
                        Bridging global fashion brands with trusted <br /> Bangladeshi suppliers and world-class excellence
                    </p>
                    <div className="flex space-x-4 text-xl">
                        <Link href={"https://www.linkedin.com/company/hatsmaster/"} target="_blank" className="p-1 bg-gray-800 border rounded-md hover:bg-white hover:text-black transition-all duration-300"><FaFacebookF /></Link>
                        <Link href={"https://www.linkedin.com/company/hatsmaster/"} target="_blank" className="p-1 bg-gray-800 border rounded-md hover:bg-white hover:text-black transition-all duration-300">  <FaLinkedin /></Link>


                    </div>
                </div>
                <div>
                    <h4 className=" font-semibold mb-1 uppercase">Our Products</h4>
                    <ul>{
                        interProducts.map((product) => (
                            <li key={product.name} className="mb-1">
                                <Link href={`/products/international#${product.name}`} className="text-sm hover:text-primary transition">
                                    {product.name}
                                </Link>
                            </li>
                        ))
                    }</ul>
                </div>
                {/* Middle */}
                <div>
                    <h4 className=" font-semibold mb-1 uppercase">Quick Links</h4>
                    <ul>
                        {
                            quickLinks.map((link) => (
                                <li key={link.name} className="mb-1">
                                    <Link href={link.link} className="text-sm hover:text-primary transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                {/* Right */}
                <div>
                    <h4 className=" font-semibold mb-1 uppercase">Partnerships</h4>
                    <form onSubmit={handleSubmit} className="mt-2">

                        <input
                            type="email"
                            required
                            name='email'
                            placeholder="Your email for inquiries"
                            className="w-full mb-3 px-4 py-2 rounded-full bg-white text-black"
                        />
                        <textarea
                            name='message'
                            required
                            placeholder="Your message"
                            className="w-full mb-1.5 px-4 py-2 rounded-full bg-white text-black"
                            rows={1}
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-full font-medium transition"
                        >
                            Submit your request now
                        </button>
                    </form>
                </div>
            </div>


            <div className="max-w-6xl mx-auto border-t pt-7 border-gray-400 text-sm text-gray-300 mt-6 flex flex-col md:flex-row justify-between items-center gap-2">
                <p>
                    © APPAREL TRADE BD. All Rights Reserved. | Manufactured in Bangladesh. Crafted for global brands.
                </p>
                <div className="flex space-x-4">
                    <Link href="/about">About Us</Link>
                    <span>/</span>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}
