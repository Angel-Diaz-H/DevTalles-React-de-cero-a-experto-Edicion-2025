import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/Custom/CustomFullScreenLoading";
import { CustomPagination } from "@/components/Custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useProducts } from "@/hooks/useProducts";
import { currencyFormatter } from "@/lib/currency-formatter";
import { PencilIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes ver y administrar tus productos"
        />

        <Link to="/admin/products/new">
          <Button>Nuevo Producto</Button>
        </Link>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data!.products.map((product) => (
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className="hover:text-blue-500 underline"
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell>{currencyFormatter(product.price)}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes?.join(", ")}</TableCell>
              <TableCell className="text-right">
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className="w-4 h-4 text-blue-400" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
