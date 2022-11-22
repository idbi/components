import React, { useState } from "react";
import styled from "styled-components";
import { TransparentBadge } from "..";

export const Wrapper = styled.div`
  border: 1px solid black;
  height: 180px;
  display: flex;
  justify-content: space-evenly;

  & > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    :nth-child(2) {
      background-color: ${({ theme }) => theme.color.SECONDARY[900]};
      color: white;
    }
    :nth-child(3) {
      background-color: black;
      color: white;
    }
  }
`;

export const InputsWrapper = styled.div`
  margin-top: 15px;
`;

export const Container = () => {
  const [intensity, setIntensity] = useState(0.5);
  const [opacity, setOpacity] = useState(0.5);

  return (
    <>
      <Wrapper>
        <div>
          <TransparentBadge intensity={intensity} opacity={opacity}>
            1
          </TransparentBadge>
          <TransparentBadge intensity={intensity} opacity={opacity}>
            Text
          </TransparentBadge>
        </div>
        <div>
          <TransparentBadge intensity={intensity} opacity={opacity}>
            2
          </TransparentBadge>
          <TransparentBadge intensity={intensity} opacity={opacity}>
            Text
          </TransparentBadge>
        </div>
        <div>
          <TransparentBadge intensity={intensity} opacity={opacity}>
            3
          </TransparentBadge>
          <TransparentBadge intensity={intensity} opacity={opacity}>
            Text
          </TransparentBadge>
        </div>
      </Wrapper>

      <InputsWrapper>
        <div>
          <span>intensity</span>
          <input
            type="range"
            min={0}
            max={1}
            value={intensity}
            step={0.001}
            onChange={(e) => setIntensity(Number(e.target.value))}
          />
        </div>

        <div>
          <span>opacity</span>
          <input
            type="range"
            min={0}
            max={1}
            value={opacity}
            step={0.001}
            onChange={(e) => setOpacity(Number(e.target.value))}
          />
        </div>
      </InputsWrapper>
    </>
  );
};
