import { getProductsAction } from "@/shop/actions/get-products.action";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";

export const useProducts = () => {
  const { gender } = useParams();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 9;
  const sizes = searchParams.get("sizes") || undefined;

  const offset = (Number(page) - 1) * Number(limit);

  return useQuery({
    queryKey: ["products", { limit, offset, gender, sizes }],
    queryFn: () =>
      getProductsAction({
        limit: Number(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
      }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
