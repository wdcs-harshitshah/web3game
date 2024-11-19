/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import { useRouter } from "next/navigation";
const create = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");
  const [ticketPrize, setTicketPrize] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !prize || !ticketPrize || !expiresAt) {
      alert("Please fill all the fields");
      return;
    }
    const params = {
      title,
      description,
      prize,
      ticketPrize,
      expiresAt: new Date(expiresAt).toISOString(),
    };
    console.log(params);
    onReset();
    router.push("/");
  };
  const onReset = () => {
    setTitle("");
    setDescription("");
    setPrize("");
    setTicketPrize("");
    setExpiresAt("");
  };
  return (
    <div>
      <Head>
        <title>Dapp Lottery- Create New Jackpot</title>
      </Head>
      <div className="min-h-screen bg-slate-200">
        <SubHeader />
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="flex flex-col items-center  justify-center my-5">
            <h1 className="text-2xl font-bold text-slate-800 py-5">
              Create New Jackpot
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <input
                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="prize"
                type="number"
                step="0.01"
                min={0.1}
                placeholder="prize"
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ticketPrize"
                type="number"
                step="0.01"
                min={0.1}
                placeholder="ticketPrize"
                value={ticketPrize}
                onChange={(e) => setTicketPrize(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiresAt"
                type="datetime-local"
                placeholder="expiresAt"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-amber-500 hover:bg-amber-600 py-2 px-5 rounded-md text-white font-semibold"
                type="submit"
              >
                Submit JackPot
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default create;
