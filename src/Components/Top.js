import React from 'react';
import styled from 'styled-components';
import {SelectButton} from '@bit/lekanmedia.shared-ui.dropdown';

const Top = styled.menu`
  color: white;
  font-size: 15pt;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #011627;
  box-shadow: 0px 5px 5px 5px rgba(117, 117, 117, 0.57);
`;
const Title = styled.div`
    font-size: 2rem;
`;
const DropdownTop = styled.div`
    width: 50%;
`;

export default () => (
    <Top>
      <Title>GradeLec</Title>
      <DropdownTop>
        <SelectButton placeholder="Select your faculty" onSelect={e => console.log(e)}>
            <option value="arts">Arts and social sciences</option>
            <option value="architecture">Architecture, design and planning</option>
            <option value="business">Business</option>
            <option value="education">Education and social work</option>
            <option value="engineering">Engineering and computer science</option>
            <option value="science">Science</option>
            <option value="music">Music</option>
            <option value="law">Law</option>
            <option value="medicine">Medicine and health</option>
        </SelectButton>
      </DropdownTop>
    </Top>
  );