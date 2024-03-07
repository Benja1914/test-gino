import React from "react";
import Logo from "../logo/Logo";
import MenuBar from "@/components/menuBar/MenuBar";
import Styles from "./styles.module.css";
import {
  PrimaryGenericButton,
  PrimaryIcon,
  PrimaryMenuPopupHeader,
  PrimaryTypography,
} from "ara-crom-components-lib";
import { genericButton, icono, typographyAndHover } from "./Sx.style";
import { iconsTypes } from "@/interfaces/UI";

const Header = () => {
  const menuColumnDef = (
    label: string,
    iconDisplay: iconsTypes,
    onClick: () => void
  ) => (
    <PrimaryGenericButton
      label={""}
      onClick={onClick}
      backgroundColor="transparent"
      color="secondary"
      sx={genericButton}
      className={`${Styles.hoverUnderlineAnimation}`}
    >
      <div
        className={`${Styles.hoverUnderlineAnimation} ${Styles.justifySpaceBetween}`}
        style={{ width: "100%" }}
      >
        <div className={Styles.selectionContainer}>
          <PrimaryIcon
            size={"button"}
            addIcon={iconDisplay}
            sx={icono}
          ></PrimaryIcon>
        </div>

        <div
          className={`${Styles.hoverUnderlineAnimation} ${Styles.justifySpaceBetween}`}
        >
          <PrimaryTypography
            color="white"
            className={Styles.hoverUnderline}
            sx={typographyAndHover}
            label={label}
          ></PrimaryTypography>
        </div>
      </div>
    </PrimaryGenericButton>
  );

  const optionsArray = [
    menuColumnDef("Cerrar sesión", "LogoutIcon", ()=>{}),
  ];

  const renderContent = () => {
    return (
      <div className={Styles.headerLayout}>
        {/* Mobile View */}
        <div className={Styles.headerMobileView}>
          <div>
            <Logo className="flex-shrink-0" img="logo_blue" />
          </div>
          <div className="bg-primary-800">
            <MenuBar textButton="Menú" />
          </div>
        </div>

        {/* Desktop View */}
        <div className={Styles.headerDesktopView}>
          <div className={Styles.logo}>
            <Logo className="flex-shrink-0" img="logo_blue" />
          </div>
          <div className={Styles.flexRow}>
            <div className={Styles.welcomeTextContainer}>
              <span className={Styles.welcomeText}>Bienvenido</span>
              <span className={Styles.welcomeTextName}>{"Benjamín"}</span>
            </div>
            <div>
              <PrimaryMenuPopupHeader
                optionsArray={optionsArray}
                width="180px"
              ></PrimaryMenuPopupHeader>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40">
      <div className="nc-MainNav2Logged relative z-10 bg-white  border-b-2 border-[#FFA500]">
        <div className="mx-[30px]">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Header;
