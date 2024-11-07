"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import Link from "next/link";

const Home: NextPage = () => {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  const indianLanguages = [
    "English",
    "हिन्दी",
    "বাংলা",
    "తెలుగు",
    "मराठी",
    "தமிழ்",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "മലയാളം",
    "ਪੰਜਾਬੀ",
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-green-800">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-2xl font-bold">🌿 Fasalniti</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-[180px] px-3 py-2 text-sm bg-green-700 text-white border border-white rounded-md focus:outline-none"
            >
              {language}
              <span className="ml-2">▼</span>
            </button>
            {isOpen && (
              <ul className="absolute z-10 w-[180px] py-1 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {indianLanguages.map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        setLanguage(lang);
                        setIsOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-1 bg-yellow-50">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none  text-green-800">
                  Welcome to Fasalniti
                </h1>
                <p className="mx-auto max-w-[700px] text-green-700 md:text-xl">
                  Reliable partnership for every harvest
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mt-12">
              {[
                {
                  title: "Buyer Login",
                  icon: "🛒",
                  description: "Access your buying account",
                },
                {
                  title: "Farmer Login",
                  icon: "🌾",
                  description: "Access your farmer account",
                },
                {
                  title: "Other Login",
                  icon: "👥",
                  description: "Access other account types",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 bg-green-700 border border-white rounded-lg overflow-hidden"
                >
                  <div className="h-52 p-6">
                    <h3 className="flex items-center text-2xl font-semibold text-white mb-2">
                      <span className="mr-2 text-2xl" aria-hidden="true">
                        {item.icon}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-white text-xl mb-4">{item.description}</p>
                    <button className="w-full bg-white text-green-800 hover:bg-gray-100 font-semibold py-2 px-4 mt-10 rounded">
                      Login
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-green-800">
        <p className="text-xs text-green-800">
          © 2023 Fasalniti. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-green-800"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-green-800"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
