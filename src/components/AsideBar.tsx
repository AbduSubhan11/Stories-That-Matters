function AsideBar() {
  return (
    <>
      {/* RIGTH */}
      <aside className="lg:w-[30%] w-full space-y-10">
        {/* NEWS LATER */}
        <div className="bg-[#F9F9FF] px-6 py-8 space-y-6">
          <h1 className="text-[#3A414E] font-bold text-xl">Newsletter</h1>
          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="h-12 pl-2 border"
            />
            <button className="bg-[#222222] text-[#F8900A] p-4">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="bg-[#F9F9FF] px-6 py-8 space-y-6">
          <h1 className="text-[#3A414E] font-bold text-xl">Category</h1>
          <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
            <p>Technology</p>
            <p>(03)</p>
          </div>
          <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
            <p>Software</p>
            <p>(09)</p>
          </div>
          <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
            <p>Lifestyle</p>
            <p>(12)</p>
          </div>
          <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
            <p>Shopping</p>
            <p>(02)</p>
          </div>
          <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
            <p>Tour</p>
            <p>(05)</p>
          </div>
        </div>

        {/* POPULAR POST */}
        <div className="bg-[#F9F9FF] px-6 py-8 space-y-6">
          <h1 className="text-[#3A414E] font-bold text-xl">Popular Post</h1>
          <div className="grid grid-cols-3  gap-2">
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              project
            </p>
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              love
            </p>
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              technology
            </p>
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              travel
            </p>
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              software
            </p>
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              life
            </p>
            <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
              design
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideBar;
