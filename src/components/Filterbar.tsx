import React from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";

import { TeamItem } from "./TeamItem";

export const Filterbar = () => {
  return (
    <div className="bar-container">
      <div className="filters">
        <div className="filter-list">
          <Tooltip
            showArrow
            content="Hraesvelgr"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-purple-600 dark:text-purple-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/beasts/icon_beast_bird.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Eikthyrnir"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-purple-600 dark:text-purple-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/beasts/icon_beast_deer.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Skoll & Hati"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-purple-600 dark:text-purple-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/beasts/icon_beast_wolf.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Nidhoggr"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-purple-600 dark:text-purple-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/beasts/icon_beast_nid.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Ratatoskr"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-purple-600 dark:text-purple-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/beasts/icon_beast_rat.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <div className="filter-divider"></div>
          <Tooltip
            showArrow
            content="Red Demon"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-red-600 dark:text-red-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/demons/icon_demon_red.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Gray Demon"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-gray-600 dark:text-gray-400"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/demons/icon_demon_gray.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Howlex"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-red-600 dark:text-red-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/demons/icon_demon_howlex.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Bellmoth"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-teal-600 dark:text-teal-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/demons/icon_demon_bell.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Original"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-gray-500 dark:text-gray-300"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/demons/icon_demon_original.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <div className="filter-divider-2"></div>
          <Tooltip
            showArrow
            content="Demon King"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-red-600 dark:text-red-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/regular/icon_boss_dk.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Final Boss"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-purple-600 dark:text-purple-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/event/icon_evt_final_boss.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Hero Arena"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-red-600 dark:text-red-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/event/icon_evt_hero_arena.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="Solgres Gold"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-teal-600 dark:text-teal-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/regular/icon_solgres_gold.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
          <Tooltip
            showArrow
            content="PvP"
            classNames={{
              base: ["before:bg-tooltip"],
              content: ["filter-tooltip text-amber-600 dark:text-amber-500"],
            }}
          >
            <Image
              className="filter-icon"
              src="/icons/teams/regular/icon_pvp.png"
              alt="icon select bird"
              width={40}
              height={40}
            />
          </Tooltip>
        </div>
      </div>
      <div className="teams-column">
        <h1 id="bar-title" className="mb-1 ">
          TODOS OS TIMES
        </h1>
        <div className="all-teams">
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </div>
      </div>
    </div>
  );
};
