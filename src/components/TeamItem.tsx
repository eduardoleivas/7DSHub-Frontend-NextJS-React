import React from "react";
import Image from "next/image";

export const TeamItem = () => {
  return (
    <div className="team-item">
      <div>
        <Image
          alt="team-logo"
          src="/icons/teams/beasts/icon_beast_nid_big.png"
          width={80}
          height={80}
        />
      </div>
      <div className="team-divider"></div>
      <div className="heroes-container">
        <div className="hero-portrait">
          <Image
            alt="attribute-icon"
            src="/icons/attributes/icon_attr_red.png"
            className="attribute-icon"
            width={24}
            height={24}
          />
          <Image
            alt="hero 1"
            src="/heroes/Elizabeth_Red.png"
            className="character-bg-lr rounded-md"
            width={60}
            height={60}
          />
        </div>
        <div className="hero-portrait">
          <Image
            alt="attribute-icon"
            src="/icons/attributes/icon_attr_red.png"
            className="attribute-icon"
            width={24}
            height={24}
          />
          <Image
            alt="hero 2"
            src="/heroes/Freyja_Red.png"
            className="character-bg-ssr rounded-md"
            width={60}
            height={60}
          />
        </div>
        <div className="character-divider"></div>
        <div className="hero-portrait">
          <Image
            alt="attribute-icon"
            src="/icons/attributes/icon_attr_light.png"
            className="attribute-icon"
            width={24}
            height={24}
          />
          <Image
            alt="hero 3"
            src="/heroes/Mael_Light.png"
            className="character-bg-ssr rounded-md"
            width={60}
            height={60}
          />
        </div>
        <div className="hero-portrait">
          <Image
            alt="attribute-icon"
            src="/icons/attributes/icon_attr_red.png"
            className="attribute-icon"
            width={24}
            height={24}
          />
          <Image
            alt="hero 4"
            src="/heroes/Margaret_Red.png"
            className="character-bg-ssr rounded-md"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};
