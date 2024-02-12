import { t } from "i18next";
import React from "react";
import Bounce from "react-reveal/Bounce";

const BrandEmpowerment = () => {
  return (
    <div className="container w-full mx-auto overflow-hidden p-3">
      <div className="w-full md:w-5/6 flex md:justify-end mx-auto py-10">
        <div className="bg-[url('https://i.ibb.co/kMwZ9n0/r-Qs-1-1.png')] relative rounded-3xl flex items-center w-full md:w-2/3 h-[80vh] md:h-[75vh] bg-cover p-7">
          <Bounce left>
            <div className="bg-[#211F20] text-white rounded-2xl p-5 m-5 md:w-2/3 text-start absolute -left-0 md:-left-52">
              <h3 className="text-2xl">
                {t("homepage.brandEmpowerment.title")}
              </h3>
              <div className="text-start pt-3 space-y-3 text-[#C9C9C9]">
                <p className="text-sm">
                  {t("homepage.brandEmpowerment.desc1")}
                </p>
                <p className="text-sm">
                  {t("homepage.brandEmpowerment.desc2")}
                </p>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default BrandEmpowerment;
