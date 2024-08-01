export default function Header(){
  return(
    <div className="header-section mt-[50px] px-[10px]">
        <div className="container grid lg:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] lg:grid-rows-[300px_300px] sm:grid-rows-[600px_300px] grid-rows-[400px_300px] max-w-[1570px] gap-[10px] mx-auto mb-[150px]">
          <div className="lg:row-start-[span_2] relative">
            <img src="./src/assets/pants.png" alt="" style={{height: '100%', width: '100%'}}/>
            <p className="absolute bottom-[10px] left-[10px] text-white text-[50px]">JUST</p>
          </div>

          <div className="lg:row-start-[span_2] relative">
            <img src="./src/assets/airforce.png" alt="" style={{height: '100%', width: '100%'}}/>
            <p className="absolute bottom-[10px] left-[10px] text-white text-[50px]">DO</p>
          </div>

          <div className=" relative">
            <img src="./src/assets/shoes.png" alt="" style={{height: '100%', width: '100%'}}/>
            <p className="absolute bottom-[10px] left-[10px] text-white text-[50px]">IT</p>
          </div>

          <div className=" relative">
            <img src="./src/assets/hat.png" alt="" style={{height: '100%', width: '100%'}}/>
            <p className="absolute bottom-[10px] left-[10px] text-white text-[50px]">WITH NIKE</p>
          </div>
        </div>
    </div>
  );
}