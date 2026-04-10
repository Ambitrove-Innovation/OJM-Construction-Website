import React from "react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
  icon: React.ElementType;
}

export interface Project {
  src: string;
  alt: string;
  category: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Review {
  text: string;
  author: string;
  rating: number;
}