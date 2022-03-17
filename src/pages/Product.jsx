import React from "react";
import { getProductBySlug, getProducts } from "../assets/data/products";
import { Grid, Head, ProductCard, ProductView } from "../components";
import Section, { SectionBody, SectionTitle } from "../components/Section";

const Product = (props) => {
  const product = getProductBySlug(props.match.params.slug);
  console.log(product);
  return (
    <Head title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Các sản phẩm liên quan</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={2} gap={20}>
            {getProducts(8).map((item, index) => (
              <ProductCard product={item} key={index} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Head>
  );
};

export default Product;
