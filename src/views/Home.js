import React from "react";
import Hero from '../components/Hero'
import CreditCard from "../components/CreditCard";
import CardList from "../components/CardList";
import CenteredButton from '../components/CenteredButton';
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";
import posts from '../data/posts'

function Home({ handleClick }) {
  return (
    <>
      <Hero onClick={handleClick}/>
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={handleClick}>Abra sua conta</CenteredButton>
      <Institutional />
      <Faq />
    </>
  );
}

export default Home;
