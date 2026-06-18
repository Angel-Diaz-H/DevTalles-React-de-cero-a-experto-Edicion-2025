import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-product.action";

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
    // enabled: !!id, // Solo ejecuta la consulta si hay un ID válido
  });

  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      console.log("todo ok", product);

      // TODO:
      // Invalidar caché, actualizar queryData.
    },
  });

  // // TODO: por eliminar.
  // const handleSubmitForm = async (productLike: Partial<Product>) => {
  //   console.log({ productLike });
  // };

  return {
    ...query,
    mutation,
  };
};
