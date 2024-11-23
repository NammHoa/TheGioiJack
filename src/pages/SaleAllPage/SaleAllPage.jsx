import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Pagination, Row } from 'antd';
import { WrapperProducts, ProductCard, Image } from './style';
import * as ProductService from '../../services/ProductService';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import Loading from '../../components/LoadingComponent/Loading';
import picture from '../../assets/slider1.webp';

const SallAllPage = () => {
    const searchProduct = useSelector((state) => state?.product?.search);
    const searchDebounce = useDebounce(searchProduct, 500);

    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [products, setProducts] = useState([]);
    const [pending, setPending] = useState(false);
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 50,
        total: 1,
    });

    const fetchAllProducts = async (page, limit) => {
        setPending(true);
        const res = await ProductService.getAllProduct(page, limit);
        if (res?.status === 'OK') {
            setPending(false);
            setProducts(res?.data);
            setPanigate({ ...panigate, total: res?.totalPage });
        } else {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchAllProducts(panigate.page, panigate.limit);
    }, [panigate.page, panigate.limit]);

    const onChange = (current, pageSize) => {
        setPanigate({ ...panigate, page: current - 1, limit: pageSize });
    };

    const handlePriceRangeChange = (range, checked) => {
        if (checked) {
            setSelectedPriceRange(range);
        } else {
            setSelectedPriceRange(null);
        }
    };

    const filteredProducts = products.filter(product => {
        // Lọc theo discount > 30
        if (product.discount <= 30) {
            return false;
        }

        // Lọc theo searchDebounce
        if (searchDebounce === '') {
            return true;
        } else if (product.name.toLowerCase().includes(searchDebounce.toLowerCase())) {
            return true; // Hiển thị nếu tên sản phẩm chứa searchDebounce
        }

        return false;
    });


    return (
        <Loading isPending={pending}>
            <div style={{ width: '100%', background: '#efefef', height: 'auto' }}>
                <Image style={{ marginTop: '1px' }} src={picture} alt="Laptop Sale" />
                <div style={{ width: '1270px', margin: '0 auto', height: '100%' }}>
                    <Row style={{ paddingTop: '10px', height: 'calc(100% - 20px)' }}>
                        <Col span={24} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <WrapperProducts>
                                {filteredProducts.map((product) => {
                                    return (
                                        <ProductCard key={product._id}>
                                            <CardComponent
                                                countInStock={product.countInStock}
                                                image={product.image}
                                                name={product.name}
                                                price={product.price}
                                                rating={product.rating}
                                                type={product.type}
                                                selled={product.selled}
                                                discount={product.discount}
                                                id={product._id}
                                                manufacturer={product.manufacturer}
                                            />
                                        </ProductCard>
                                    );
                                })}
                            </WrapperProducts>
                            <Pagination defaultCurrent={panigate.page + 1} total={panigate?.total} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        </Loading>
    );
}

export default SallAllPage;
