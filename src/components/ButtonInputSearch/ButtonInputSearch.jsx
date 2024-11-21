import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { size, placeholder, textbutton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = '#fff',
        colorButton = '#ff' } = props
    return (
        <div style={{ display: 'flex', backgroundColor: "#fff" }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                variant={bordered}
                style={{ backgroundColor: backgroundColorInput, border: 'none' }}
                {...props}
            />
            <ButtonComponent
                size={size}
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#black' }} />}
                textbutton={textbutton}
                styletextbutton={{ color: colorButton }}
            />
        </div>
    )
}

export default ButtonInputSearch