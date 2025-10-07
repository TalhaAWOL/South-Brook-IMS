import Image from "next/image";
import AppHeader from "./component/AppHeader";
import ViewProduct from "./product/ViewProduct";

export default function Home() {
  return (
    <>
      <AppHeader />
      <ViewProduct />
    </>
  );
}
