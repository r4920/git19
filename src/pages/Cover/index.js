import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";

const CoverPage = () => {
  const handleNavigate1 = () => {
    window.location.href = "sff.com";
  };
  const handleNavigate3 = () => {
    window.location.href = "facebook.com";
  };
  const handleNavigate2 = () => {
    window.location.href = "linkedin.com";
  };

  return (
    <Column
      className="bg-blue_600 items-center justify-start ml-[auto] mr-[auto] w-[100%]"
      compId="45:635"
      comWidth={1920}
      compLeft={0}
      compRight={0}
      compType="Column"
    >
      <Column
        className="2xl:mb-[15px] 2xl:mt-[41px] 3xl:mb-[18px] 3xl:mt-[49px] font-sfprodisplay items-center justify-start lg:mb-[11px] lg:mt-[32px] mb-[20px] mt-[55px] self-stretch w-[100%] xl:mb-[13px] xl:mt-[36px]"
        compId="4"
        comWidth={1920}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-center justify-between px-[0] self-stretch w-[100%]"
          compId="1"
          comWidth={1920}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Text
            className="common-pointer 2xl:ml-[60px] 2xl:text-fs23 3xl:ml-[72px] 3xl:text-fs27 font-normal lg:ml-[47px] lg:text-fs18 ml-[81px] opacity-op5 text-fs31 text-left text-white_A700 xl:ml-[54px] xl:text-fs20"
            compId="252:5402"
            comWidth={80}
            compLeft={81}
            compRight={0}
            compType="Text"
            onClick={handleNavigate1}
          >{`UX/UI`}</Text>
          <Text
            className="2xl:mr-[60px] 2xl:text-fs23 3xl:mr-[72px] 3xl:text-fs27 font-normal lg:mr-[47px] lg:text-fs18 mr-[81px] opacity-op5 text-fs31 text-right text-white_A700 xl:mr-[54px] xl:text-fs20"
            compId="252:5403"
            comWidth={68}
            compLeft={0}
            compRight={81}
            compType="Text"
          >{`2021`}</Text>
        </Row>
        <Button
          className="common-pointer 2xl:mt-[135px] 3xl:mt-[162px] bg-transparent border-bw lg:mt-[105px] mt-[181px] mx-[auto] w-[11%] xl:mt-[120px]"
          compId="45:654"
          comWidth={204}
          compLeft={439}
          compRight={439}
          compType="Button"
          onClick={handleNavigate3}
        >
          {""}
        </Button>
        <Text
          className="2xl:mt-[63px] 2xl:text-fs98 3xl:mt-[76px] 3xl:text-fs117 font-semibold lg:mt-[49px] lg:text-fs76 mt-[85px] mx-[auto] text-center text-fs131 text-white_A700 tracking-ls1 xl:mt-[56px] xl:text-fs87"
          compId="45:653"
          comWidth={1040}
          compLeft={439}
          compRight={439}
          compType="Text"
        >{`Telegram Contest`}</Text>
        <Text
          className="common-pointer 2xl:mt-[8px] 2xl:text-fs35 3xl:mt-[9px] 3xl:text-fs42 font-normal lg:mt-[6px] lg:text-fs27 mt-[11px] mx-[auto] opacity-op5 text-center text-fs47 text-white_A700 underline xl:mt-[7px] xl:text-fs31"
          compId="252:5401"
          comWidth={196}
          compLeft={439}
          compRight={439}
          compType="Text"
          onClick={handleNavigate2}
        >{`@dikaleto`}</Text>
      </Column>
    </Column>
  );
};

export default CoverPage;
