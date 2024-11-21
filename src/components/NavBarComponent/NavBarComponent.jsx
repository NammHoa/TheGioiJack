import React, { useState } from 'react'
import { WrapperContent, WrapperLableText, WrapperTextValue } from './style'
import { Checkbox } from 'antd'

const NavBarComponent = ({ products, onNameSpecialClick, onPriceRangeChange }) => {
    // Lọc các giá trị duy nhất từ mảng sản phẩm
    const uniqueNameSpecials = Array.from(new Set(products));

    // const onChange = () => { }
    const [selectedNameSpecial, setSelectedNameSpecial] = useState(null);

    const [priceRange, setPriceRange] = useState({
        under1M: false,
        from1to5: false,
        from5to10: false,
        from10to15: false,
        from15to20: false,
        from20to25: false,
        from25to30: false,
        over30: false
    });
    const handlePriceRangeChange = (range, checked) => {
        setPriceRange({ ...priceRange, [range]: checked });
        onPriceRangeChange(range, checked);
    };


    const handleNameSpecialClick = (manufacturer) => {
        if (selectedNameSpecial === manufacturer) {
            setSelectedNameSpecial(null); // Unselect if already selected
            onNameSpecialClick(null); // Inform parent component
        } else {
            setSelectedNameSpecial(manufacturer);
            onNameSpecialClick(manufacturer);
        }
    };
    // const renderContent = (type, options) => {
    //     switch (type) {
    //         case 'text':
    //             return options.map((option, index) => {
    //                 return (
    //                     <WrapperTextValue key={index} style={{ color: selectedNameSpecial === option ? 'red' : 'black' }}>{option}</WrapperTextValue>
    //                 )
    //             })
    //         case 'checkbox':
    //             return (
    //                 <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
    //                     {options.map((option, index) => {
    //                         return (
    //                             <Checkbox key={index} style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
    //                         )
    //                     })}
    //                 </Checkbox.Group>
    //             )
    //         case 'star':
    //             return options.map((option, index) => {
    //                 return (
    //                     <div key={index} style={{ display: 'flex' }}>
    //                         <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
    //                         <span> {`tu ${option}  sao`}</span>
    //                     </div>
    //                 )
    //             })
    //         case 'price':
    //             return options.map((option, index) => {
    //                 return (
    //                     <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
    //                 )
    //             })
    //         default:
    //             return {}
    //     }
    // }

    return (
        <div>
            <WrapperLableText>Danh mục sản phẩm</WrapperLableText>
            <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '10px' }}>Hãng</div>
            <WrapperContent>
                {uniqueNameSpecials.map((product, index) => (
                    <div key={index} onClick={() => handleNameSpecialClick(product)}>
                        <WrapperTextValue>{product}</WrapperTextValue>
                    </div>
                ))}
            </WrapperContent>
            <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '10px', marginTop: '10px' }}>Khoảng giá</div>
            <WrapperContent>
                <Checkbox onChange={(e) => handlePriceRangeChange('under1M', e.target.checked)}>Dưới 1 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('from1to5', e.target.checked)}>Từ 1 đến 5 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('from5to10', e.target.checked)}>Từ 5 đến 10 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('from10to15', e.target.checked)}>Từ 10 đến 15 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('from15to20', e.target.checked)}>Từ 15 đến 20 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('from20to25', e.target.checked)}>Từ 20 đến 25 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('from25to30', e.target.checked)}>Từ 25 đến 30 triệu</Checkbox>
                <Checkbox onChange={(e) => handlePriceRangeChange('over30', e.target.checked)}>Trên 30 triệu</Checkbox>
            </WrapperContent>

        </div>
    )
}

export default NavBarComponent