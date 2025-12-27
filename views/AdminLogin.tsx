
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-white overflow-x-hidden">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 items-center justify-center rounded-full hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="text-primary text-base font-bold hover:opacity-80">Guest Mode</button>
      </div>

      <div className="px-4 py-3">
        <div 
          className="relative bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[260px] shadow-lg"
          style={{ backgroundImage: `linear-gradient(0deg, rgba(16, 25, 34, 1) 0%, rgba(16, 25, 34, 0.6) 40%, rgba(43, 140, 238, 0.15) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBy07n3Rz1U-kCpIC1tBnK_6sltKnDU0w_UN6efR2HUxKGUgAzONb4vDMPYz4dwFXhQJKiqRDRaZZqDfZphrQjtVCmcDq-u-zRR_32c0HnStgxZFSPEvkSr1e_0q2Asq_4KJzvuNfhXidzJlTbZjJoJdP_ZYyY8qUCZYawc3BcYzGXLtTsA07q_S80kDh5amMackspF4PPTxh7GdWQnWhBj-cGd4ODAa88Bqj62BOR6q2V4mdTaehuA-4p-gSXhjb9vsWFyyEWoyAI")` }}
        >
          <div className="flex flex-col p-6 gap-3 z-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-primary/90 rounded-lg p-2.5 shadow-lg border border-white/10">
                <span className="material-symbols-outlined text-white text-[32px]">sports_volleyball</span>
              </div>
              <h1 className="text-white tracking-tight text-3xl font-bold drop-shadow-md">VolleyBoard</h1>
            </div>
            <p className="text-slate-400 text-lg font-medium pl-1">Administrator Portal</p>
          </div>
        </div>
      </div>

      <form className="flex flex-col gap-5 px-4 pt-4 max-w-[480px] w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-col w-full gap-2">
          <p className="text-white text-base font-medium ml-1">Username</p>
          <div className="flex w-full items-stretch rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
            <input 
              className="flex w-full flex-1 rounded-l-lg border border-slate-700 bg-[#192633] h-14 placeholder:text-slate-500 p-4 text-base focus:outline-none focus:border-primary border-r-0" 
              placeholder="Enter admin ID" 
              type="text"
            />
            <div className="flex items-center justify-center px-4 rounded-r-lg border border-l-0 border-slate-700 bg-[#192633]">
              <span className="material-symbols-outlined text-slate-500">person</span>
            </div>
          </div>
        </label>

        <label className="flex flex-col w-full gap-2">
          <p className="text-white text-base font-medium ml-1">Password</p>
          <div className="flex w-full items-stretch rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
            <input 
              className="flex w-full flex-1 rounded-l-lg border border-slate-700 bg-[#192633] h-14 placeholder:text-slate-500 p-4 text-base focus:outline-none focus:border-primary border-r-0" 
              placeholder="••••••••" 
              type="password"
            />
            <button className="flex items-center justify-center px-4 rounded-r-lg border border-l-0 border-slate-700 bg-[#192633] hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-slate-500">visibility_off</span>
            </button>
          </div>
          <div className="flex justify-end mt-0.5">
            <button className="text-primary text-sm font-semibold hover:text-blue-400">Forgot Password?</button>
          </div>
        </label>

        <div className="pt-2">
          <button 
            onClick={() => navigate('/')}
            className="flex w-full items-center justify-center rounded-lg h-14 bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all text-white text-base font-bold shadow-lg shadow-primary/20"
          >
            Login
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
          <span className="material-symbols-outlined text-slate-500 text-sm">lock</span>
          <p className="text-xs text-slate-500 font-medium">Secure Admin Connection</p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
