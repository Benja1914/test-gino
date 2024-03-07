"use client";
import React, { FC } from "react";
import Styles from "./styles.module.css";
import * as constants from "./constants";
import SocialsList from "@/components/socialsList/SocialsList";
import Logo from "@/components/logo/Logo";
import Link from "next/link";





const Footer: FC = () => {
  return (
    <React.Fragment>
      <div className={Styles.footerLayout}>
        <div className={Styles.footerContact}>
          <div className={Styles.communicationChannels}>
            <span className={Styles.communicationChannelsTitles}>{constants.communicationChannels.title}</span>
            <div className={Styles.communicationChannelsOptions}>
              {constants.communicationChannels.menus.map((item, index) => (
                <div className={Styles.communicationChannelsContactOptions} key={index}>
                  <Link href={item.href && item.href} target="_blank">{item.label}</Link>
                  {index < constants.communicationChannels.menus.length - 1 && (
                    <span className={Styles.communicationChannelsOptionsAux}>|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={Styles.contactUs}>
            <span className={Styles.communicationChannelsTitles}>{constants.contactPhoneNumber.title}</span>
            <span className={Styles.communicationChannelsPhoneNumber}>{constants.contactPhoneNumber.number}</span>
          </div>
          <div className={Styles.followUs}>
            <span className={Styles.communicationChannelsTitles}>Síguenos</span>
            <SocialsList></SocialsList>
          </div>
        </div>
        <div className={Styles.footerInformation}>
          <Logo />
          <span className={Styles.footerInformationText}>{constants.footerInformation}</span>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Footer;
