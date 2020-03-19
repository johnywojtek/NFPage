import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoMdMenu, IoMdClose, IoMdHome } from 'react-icons/io';
import PropTypes from 'prop-types';

const fadeInFromNone = keyframes`
    0% {

       opacity: 0;
   }
   100% {

       opacity: 1;
   }
`;
const MobileBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    outline-style: none;
    padding: 4px;
    outline: none;
    transition: all 1s ease;
    svg {
        fill: #fff;
        height: 26px;
        width: 26px;
        animation: ${fadeInFromNone} 0.7s linear;
    }
`;
const MobileNavBtn = ({ open, onClick, homeBtn }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <MobileBtn
            onClick={
                onClick
                    ? onClick
                    : () => {
                          setIsOpen(!isOpen);
                      }
            }
        >
            {open ? <IoMdClose /> : homeBtn ? <IoMdHome /> : <IoMdMenu />}
        </MobileBtn>
    );
};

MobileNavBtn.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    homeBtn: PropTypes.bool,
};

export default MobileNavBtn;
