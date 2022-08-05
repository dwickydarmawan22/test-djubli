import React from "react";
import {Navbar} from "../components/Navbar";
import {Header} from "../components/header";
import {Features} from "../components/features";
import {Products} from "../components/products";
import { Testimonial } from "../components/testimonial";
import { Footer } from "../components/footer";

export const Beranda = () => {
    return (
        <>
        <Header />
        <Features />
        <Products />
        <Testimonial />
        <Footer />
        <Navbar />
        </>
    )
}