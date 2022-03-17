import React from 'react';
import sliderShowData from '../assets/data/slider-show';
import Head from '../components/Head';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import SliderShow from '../components/SliderShow';
import policy from '../assets/data/policy';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import { Link } from 'react-router-dom';
import { getProducts } from '../assets/data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <Head title="Trang chủ">
      {/* slider */}
      <SliderShow data={sliderShowData} control={true} auto timeOut={5000} />
      {/* section */}
      {/* policy card */}
      <Section>
        <SectionTitle>Chính sách</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* products */}
      <Section>
        <SectionTitle>Sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {getProducts(4).map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Head>
  );
};

export default Home;
