import React from "react";
import { FaCheckDouble, FaPencilRuler, FaUserAstronaut } from "react-icons/fa";
import { Box1, Box2, Box3 } from "./Data";
import {
  WhyContainer,
  WhyGrid,
  WhyItemDescription,
  WhyItemIcon,
  WhyItems,
  WhyItemTitle,
  WhyTitle,
  WhyWrapper,
} from "./WhyUsElements";

const WhyUs = () => {
  return (
    <WhyContainer id="whyus">
      <WhyWrapper>
        <WhyTitle>Why You Should Choose Us?</WhyTitle>
        <WhyGrid>
          <WhyItems>
            <WhyItemIcon>
              <FaPencilRuler />
            </WhyItemIcon>
            <WhyItemTitle>{Box1.Box1Title}</WhyItemTitle>
            <WhyItemDescription>{Box1.Box1Desc}</WhyItemDescription>
          </WhyItems>
          <WhyItems>
            <WhyItemIcon>
              <FaCheckDouble />
            </WhyItemIcon>
            <WhyItemTitle>{Box2.Box2Title}</WhyItemTitle>
            <WhyItemDescription>{Box2.Box2Desc}</WhyItemDescription>
          </WhyItems>
          <WhyItems>
            <WhyItemIcon>
              <FaUserAstronaut />
            </WhyItemIcon>
            <WhyItemTitle>{Box3.Box3Title}</WhyItemTitle>
            <WhyItemDescription>{Box3.Box3Desc}</WhyItemDescription>
          </WhyItems>
        </WhyGrid>
      </WhyWrapper>
    </WhyContainer>
  );
};

export default WhyUs;
