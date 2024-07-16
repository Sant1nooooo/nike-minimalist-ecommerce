import { products } from "./data/storage"
export default function App() {
  return (
    <div className="flex flex-wrap">
      { products.map((eachProduct) => {
          return (
            <div className="mb-[10px] mx-[10px]">
              <img src={"" + eachProduct.image} alt="" height={200} width={200}/>

              <div className="flex items-center justify-between">
                { eachProduct.subImages.map((eachSubImages) => {
                  return <img src={"" + eachSubImages} alt="" height={50} width={50}/>
                }) }
              </div>

            </div>
          );
        }
      )}
    </div>
  )
}