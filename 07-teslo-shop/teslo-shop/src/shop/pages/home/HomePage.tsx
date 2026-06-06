import { CustomPagination } from "@/components/Custom/CustomPagination";
import { useProducts } from "@/hooks/useProducts";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";

export const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      <CustomJumbotron title="Todos los productos" />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
