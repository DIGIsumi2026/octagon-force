import LocationShowcase from "../components/products/LocationShowcase";
import ProductCategories from "../components/products/ProductCategories";
import ProductFeature from "../components/products/ProductFeature";
import Stats from "../components/products/Stats";
import VideoShowcase from "../components/products/VideoShowcase";

export default function Products() {
  return (
    <>
      <LocationShowcase />
      <ProductCategories />
      <ProductFeature />
      <Stats />
      <VideoShowcase />
    </>
  );
}
