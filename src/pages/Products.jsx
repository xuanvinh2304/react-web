import React, { useCallback, useEffect, useRef, useState } from "react";
import { filterCats, filterSizes } from "../assets/data/filter";
import { getAllProducts } from "../assets/data/products";
import { Button } from "../components";
import CheckBox from "../components/CheckBox";
import Head from "../components/Head";
import InfinityList from "../components/InfinityList";

const Products = () => {
  const [productFilter, setProductFilter] = useState(getAllProducts());

  const initFilter = {
    category: [],
    size: [],
  };

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.path],
          });
          break;

        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.path] });
          break;

        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.path] });
          break;

        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCat = filter.category.filter((e) => e !== item.path);
          setFilter({
            ...filter,
            category: newCat,
          });
          break;

        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.path);
          setFilter({ ...filter, size: newSize });
          break;

        default:
          break;
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = getAllProducts();

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.catSlug));
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProductFilter(temp);
  }, [filter, setProductFilter]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const clearFilter = () => {
    setFilter(initFilter);
  };

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Head title="Sản phẩm">
      <div className="products">
        <div className="products__filter" ref={filterRef}>
          <div className="products__filter__toggle">
            <Button
              size="lg"
              backgroundColor="white"
              className="btn-close"
              onClick={() => showHideFilter()}
            >
              <i className="bx bx-chevron-left"></i>
            </Button>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">
              Danh mục sản phẩm
            </div>
            <div className="products__filter__widget__content">
              {filterCats.map((item, index) => (
                <p
                  key={index}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.label}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.path)}
                  />
                </p>
              ))}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">Kích thước</div>
            <div className="products__filter__widget__content">
              {filterSizes.map((item, index) => (
                <p
                  key={index}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.label}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.path)}
                  />
                </p>
              ))}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__content">
              <Button size="sm" onClick={() => clearFilter()}>
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className="products__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()}>
            Bộ lọc
          </Button>
        </div>
        <div className="products__content">
          <InfinityList data={productFilter} />
        </div>
      </div>
    </Head>
  );
};

export default Products;
