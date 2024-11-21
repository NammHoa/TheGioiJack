import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, AdBanner, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/slider2.webp'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import slider4 from '../../assets/slider3.webp'
import slider5 from '../../assets/slider1.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../../assets/images/banner2.webp'


const HomePage = () => {
    const navigate = useNavigate();
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const [pending, setPending] = useState(false)
    const [limit, setLimit] = useState(20)
    const [typeProducts, setTypeProducts] = useState([])
    const [showAdBanner, setShowAdBanner] = useState(true);

    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductService.getAllProduct(search, limit)
        return res
    }


    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }

    const { isPending, data: products, isPreviousData } = useQuery({
        queryKey: ['products', limit, searchDebounce],
        queryFn: fetchProductAll,
        config: { retry: 3, retryDelay: 1000, keepPreviousData: true }
    });
    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    return (
        <Loading isPending={isPending || pending}>
            {showAdBanner && (
                <AdBanner>
                    <button style={{ color: 'white' }} className="close-button" onClick={() => setShowAdBanner(false)}>×</button>
                    <img
                        src={banner}
                        onClick={() => navigate('/SaleAll')}
                        style={{ cursor: 'pointer' }}
                        alt="Ad Banner"
                    />
                </AdBanner>
            )}
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <div style={{ position: 'fixed', top: 170, left: 0 }}>
                    <div className="fixed-banner left-banner" onClick={() => navigate('/PcSale')}>
                        <img src="https://nguyencongpc.vn/media/banner/02_Aprecc12b38c340290d973f8a2217c26d35.webp" alt="Left Image" style={{ maxWidth: '300px', maxHeight: '300px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div style={{ position: 'fixed', top: 170, right: 0 }}>
                    <div className="fixed-banner right-banner" onClick={() => navigate('/LaptopSale')}>
                        <img src="https://nguyencongpc.vn/media/banner/04_May7b248abf20c1eaf49cd89857bccd44ed.webp" alt="Right Image" style={{ maxWidth: '300px', maxHeight: '300px', cursor: 'pointer' }} />
                    </div>
                </div>
                <WrapperTypeProduct>
                    {typeProducts.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
                <div id="container" style={{ height: 'auto', width: '1270px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5]} />
                    <WrapperProducts>
                        {products?.data?.map((product) => {
                            return (
                                <CardComponent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    discount={product.discount}
                                    id={product._id}
                                />
                            )
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore
                            textbutton={isPreviousData ? 'loading...' : "Xem thêm"} type="outline" styleButton={{
                                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : 'blue'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : 'blue'}`,
                                width: '240px', height: '38px', borderRadius: '4px'
                            }}
                            disabled={products?.total === products?.data?.length || products?.totalPage === 1}
                            styletextbutton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                            onClick={() => setLimit((prev) => prev + 20)}
                        />
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default HomePage 