import { useEffect } from "react";
import Products from "~/components/pages/PageProducts/components/Products";
import Box from "@mui/material/Box";

export default function PageProducts() {
  useEffect(() => {
    localStorage.setItem(
      "authorization_token",
      `${btoa("AnastasiiaSidorenko:TEST_PASSWORD")}`
    );
  }, []);
  return (
    <Box py={3}>
      <Products />
    </Box>
  );
}
