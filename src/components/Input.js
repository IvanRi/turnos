import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => {
  const { required, id, color, type, label, defaultValue, className, centerNumber, charRestriction } = props

  const [writing, setWriting] = useState("")
  const [info, setInfo] = useState(null)
  const [defVal, setDefVal] = useState(null)

  useEffect(() => {
    if (defaultValue) {
      setWriting(defaultValue.toString())
      const exc = defaultValue.length - charRestriction
      if (exc >= 0) {
        const str = defaultValue.slice(0, defaultValue.length - exc)
        setDefVal(str)
        return setInfo(`Sólo se permiten hasta ${charRestriction} carácteres.`)
      }
      setDefVal(defaultValue)
    }
  }, [defaultValue])

  const handleAnimation = () => {
    const val = document.getElementById(`${id}`).value
    setWriting(val)
  }

  const checkCharRestriction = e => {
    if (e.target.value.length >= charRestriction) return setInfo(`Sólo se permiten hasta ${charRestriction} carácteres.`)
    setInfo(null)
  }

  const _handleChange = e => {
    handleAnimation()
    checkCharRestriction(e)
  }

  return <Container
    className={className}
    color={color}
    centerNumber={centerNumber}
    writing={writing}
  >
    <input
      ref={ref}
      className='input'
      spellCheck="false"
      type={type}
      maxLength={charRestriction}
      id={id}
      onChange={e => _handleChange(e)}
      placeholder={!writing.length ? label : ""}
      defaultValue={defVal}
      autoComplete="off"
    />
    {!!writing.length && <div className='placeholder'>{label}</div>}
    {required && <div className='error'>Este es un campo obligatorio</div>}
    {!!info && <div className='info'>{info}</div>}
  </Container>
})

Input.defaultProps = {
  centerNumber: false,
  required: false,
  type: 'text',
  className: '',
  defaultValue: false,
};

Input.propTypes = {
  centerNumber: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  charRestriction: PropTypes.number,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

const Container = styled.div`
  position: relative;

  .error{
    font-size: .8rem;
    color: red;
    position: absolute;
    bottom: 1px;
  }

  .info{
    font-size: .8rem;
    color: #ffb000;
    position: absolute;
    bottom: 1px;
  }

  .placeholder{
    color: ${({ required, color }) => required ? 'red' : color};
    position: absolute;
    top:-3px;
    height:0;
    font-size:.75rem;
  }

  .input{
    width: 100%;
    border: none;
    margin: 1rem 0;
    padding: .3rem 0;
    font-size: .85rem;
    border-bottom: 
      ${({ writing }) => writing ? '2px' : '1px'}
      solid  
      ${({ required, theme, writing }) => required ? 'red' : writing && theme.palette.green} ;
    :focus {
      outline: none;
    }
    background-color: transparent;
    ${({ centerNumber }) => !!centerNumber && css`padding-left:50%;`}
  }
`

export default Input;

