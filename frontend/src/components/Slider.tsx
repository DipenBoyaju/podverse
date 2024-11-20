
const Slider = ({ slidimg }: { slidimg: string }) => {

  return (
    <section className="bg-primary py-10 relative">
      <div className="absolute rotate-2 bg-secondary top-0 w-[101%] -left-1 mx-auto h-full items-center flex gap-5 border-2 border-white">
        <div className="flex gap-5 items-center">
          <img src={slidimg} alt="" />
          <p className="font-poppins text-3xl text-primary">Fashion</p>
        </div>
        <div className="flex gap-5 items-center">
          <img src={slidimg} alt="" />
          <p className="font-poppins text-3xl text-primary">Health Care</p>
        </div>
        <div className="flex gap-5 items-center">
          <img src={slidimg} alt="" />
          <p className="font-poppins text-3xl text-primary">Self Growth</p>
        </div>
        <div className="flex gap-5 items-center">
          <img src={slidimg} alt="" />
          <p className="font-poppins text-3xl text-primary">Technology</p>
        </div>
      </div>
    </section>
  );
};

export default Slider;
