const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[50vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fkY37gb/volunteers-holding-boxes-containing-donations-charity.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
            <div className="relative">
        <input type="text" placeholder="Search here...." className="input border-slate-300 md:w-96" /> 
        <button className="btn bg-red-500 text-white rounded-l-none">Search</button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
