import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Grid, ProductCard } from ".";

const InfinityList = ({ data }) => {
  const listRef = useRef(null);
  const perLoad = 6;
  const [listData, setListData] = useState([]);
  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setListData(data.slice(0, perLoad));
    setIndex(1);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight >=
        listRef.current.clientHeight + listRef.current.offsetTop + 200
      ) {
        console.log("scroll");
        setLoad(true);
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(data.length / perLoad);
      const maxIndex = data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setListData(listData.concat(data.slice(start, end)));

        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, listData]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={30}>
        {listData.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
