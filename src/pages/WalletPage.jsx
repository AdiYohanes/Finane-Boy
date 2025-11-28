import React, { useState } from "react";
import Card from "../features/Card";
import TransactionTable from "../features/TransactionTable";

const WalletPage = () => {
  const [selectedCardId, setSelectedCardId] = useState(1);

  const walletData = [
    {
      id: 1,
      logo: (
        <span className="font-bold text-xl italic tracking-tighter">BCA</span>
      ),
      bankName: "Main Wallet",
      balance: "Rp 124.500.000",
      bgColor: "bg-blue-700",
      accentColor: "bg-blue-600",
    },
    {
      id: 2,
      logo: <span className="font-bold text-xl">Mandiri</span>,
      bankName: "Savings Account",
      balance: "Rp 45.200.000",
      bgColor: "bg-yellow-600",
      accentColor: "bg-yellow-500",
    },
    {
      id: 3,
      logo: <span className="font-bold text-xl uppercase">Jenius</span>,
      bankName: "Daily Expenses",
      balance: "Rp 5.750.000",
      bgColor: "bg-purple-600",
      accentColor: "bg-purple-500",
    },
  ];

  const transactionsData = {
    1: [
      {
        date: "24 Nov",
        desc: "Transfer to Budi",
        category: "Transfer",
        amount: "-Rp 500.000",
      },
      {
        date: "23 Nov",
        desc: "Gaji Bulan November",
        category: "Income",
        amount: "+Rp 25.000.000",
      },
      {
        date: "21 Nov",
        desc: "Netflix Subscription",
        category: "Entertainment",
        amount: "-Rp 186.000",
      },
    ],
    2: [
      {
        date: "20 Nov",
        desc: "Deposito Interest",
        category: "Invest",
        amount: "+Rp 1.200.000",
      },
      {
        date: "15 Nov",
        desc: "Tokopedia Purchase",
        category: "Shopping",
        amount: "-Rp 2.450.000",
      },
    ],
    3: [
      {
        date: "25 Nov",
        desc: "Kopi Kenangan",
        category: "Food & Drink",
        amount: "-Rp 35.000",
      },
      {
        date: "25 Nov",
        desc: "Grab Ride",
        category: "Transport",
        amount: "-Rp 42.000",
      },
      {
        date: "24 Nov",
        desc: "Indomaret",
        category: "Groceries",
        amount: "-Rp 125.000",
      },
      {
        date: "22 Nov",
        desc: "Spotify Duo",
        category: "Entertainment",
        amount: "-Rp 75.000",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">My Wallet</h2>
        <p className="text-slate-500 mt-2">
          Select a card to view transactions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mb-8">
        {walletData.map((wallet) => (
          <Card
            key={wallet.id}
            logo={wallet.logo}
            bankName={wallet.bankName}
            balance={wallet.balance}
            bgColor={wallet.bgColor}
            accentColor={wallet.accentColor}
            onClick={() => setSelectedCardId(wallet.id)}
            isSelected={selectedCardId === wallet.id}
          />
        ))}
      </div>

      <TransactionTable transactions={transactionsData[selectedCardId] || []} />
    </div>
  );
};

export default WalletPage;
