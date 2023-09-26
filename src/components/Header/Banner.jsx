/* eslint-disable react/prop-types */
const Banner = ({handleSearch, categoryVal, setSearchCategory}) => {
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
        
            <div className="md:w-[440px] relative justify-center mx-auto">
            <input onChange={(e)=>handleSearch(e)}
              type="text"
              placeholder="Search here..."
              className="input input-bordered w-full pr-16 text-black"
            />
            <button onClick={()=>setSearchCategory(categoryVal)} className="btn btn-neutral  text-white bg-[#FF444A] absolute top-0 right-0 rounded-l">
              Search
            </button>
          </div>

      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
