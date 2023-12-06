// hooks
import { useAppContext } from "./contexts/AppContext";

const App = () => {
  const { me } = useAppContext();
  const products = me.products;

  function onSelectProduct(productId: string) {
    window.localStorage.setItem("product_id", productId);
    window.location.reload();
  }

  return (
    <div className="md:container md:mx-auto">
      <div className="font-bold text-[24px] mt-[3rem] text-center mb-10">
        Please select Product
      </div>

      <div className="flex justify-between">
        {products.map((product: any) => {
          return (
            <div
              key={product.id}
              className="shadow-lg mx-4 cursor-pointer"
              onClick={() => onSelectProduct(product.id.toString())}
            >
              <img
                className="w-full w-[350px] h-[350px] object-cover"
                src={product.category.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
