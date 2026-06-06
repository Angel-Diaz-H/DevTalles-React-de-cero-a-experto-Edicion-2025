import { CustomPagination } from "@/components/Custom/CustomPagination";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { useParams } from "react-router";
import { useProducts } from "@/hooks/useProducts";

export const GenderPage = () => {
  const { gender } = useParams();
  const { data } = useProducts();

  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
