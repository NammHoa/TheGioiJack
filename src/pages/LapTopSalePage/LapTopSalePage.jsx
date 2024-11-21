import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Pagination, Row } from 'antd';
import { WrapperProducts, ProductCard, Image } from './style';
import * as ProductService from '../../services/ProductService';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import Loading from '../../components/LoadingComponent/Loading';
import picture from '../../assets/images/la.jpg';

const LapTopSalePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search);
    const searchDebounce = useDebounce(searchProduct, 500);

    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [products, setProducts] = useState([]);
    const [pending, setPending] = useState(false);
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 10,
        total: 1,
    });

    const fetchProductType = async (page, limit) => {
        setPending(true);
        const res = await ProductService.getProductType('Laptop', 'Laptop Gaming', page, limit);
        if (res?.status === 'OK') {
            setPending(false);
            setProducts(res?.data);
            setPanigate({ ...panigate, total: res?.totalPage });
        } else {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchProductType(panigate.page, panigate.limit);
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
        if (selectedPriceRange) {
            const price = product.price;
            switch (selectedPriceRange) {
                case 'under1M':
                    if (price >= 1000000) return false;
                    break;
                case 'from1to5':
                    if (price < 1000000 || price >= 5000000) return false;
                    break;
                case 'from5to10':
                    if (price < 5000000 || price >= 10000000) return false;
                    break;
                case 'from10to15':
                    if (price < 10000000 || price >= 15000000) return false;
                    break;
                case 'from15to20':
                    if (price < 15000000 || price >= 20000000) return false;
                    break;
                case 'from20to25':
                    if (price < 20000000 || price >= 25000000) return false;
                    break;
                case 'from25to30':
                    if (price < 25000000 || price >= 30000000) return false;
                    break;
                case 'over30':
                    if (price < 30000000) return false;
                    break;
                default:
                    break;
            }
        }
        return true;
    }).filter(pro => {
        if (searchDebounce === '') {
            return pro;
        } else if (pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
            return pro;
        }
        return false;
    });

    return (
        <Loading isPending={pending}>
            <div style={{ width: '100%', background: '#efefef', height: 'auto' }}>
                <Image src={picture} alt="Laptop Sale" />
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

export default LapTopSalePage;
