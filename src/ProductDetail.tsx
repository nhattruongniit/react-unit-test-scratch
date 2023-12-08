import React from "react";
import { fetchProductDetail } from "./services/fetchProductDetail";

function ProductDetail() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetchProductDetail().then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="font-bold text-[24px] mt-[3rem] text-center mb-10">
        Product Detail
      </div>

      <div>Title: {data?.title}</div>
    </>
  );
}

export default ProductDetail;
