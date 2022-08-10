import React, { InputHTMLAttributes } from 'react'
import { InputContainer, Span } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: any,
  isRequired?: boolean,
  placeholder?: string,
}

export const Input: React.FC<InputProps> = ({ icon, placeholder,isRequired = false, ...rest }) => {
  return (
    <InputContainer>
      <Span>
        {icon}
      </Span>
      <input type="text" placeholder={placeholder} {...rest} />
      {
        !isRequired && <Span>Opcional</Span>
      }
    </InputContainer>
  )
}
