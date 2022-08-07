import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, VolumeUpIcon } from "@heroicons/react/solid";
import Modules from "./sections/Modules";
import Progress from "./sections/Progress";
import Technical from "./sections/Technical";
import DisclosureTransition from "../../../global/utility/DisclosureTransition";
import { Switch } from '@headlessui/react'
import clsx from "clsx";
import { MenuAlt2Icon } from "@heroicons/react/outline";

export default function Menu({ convoState }: any) {
  const sections = [
    { title: "Progress", component: <Progress convoState={convoState} /> },
    {
      title: "Modules",
      component: <Modules convoState={convoState} />,
      defaultHide: !convoState.value.showTechnical,
    },
    {
      title: "Technical",
      component: <Technical convoState={convoState} />,
      defaultHide: !convoState.value.showTechnical,
    },
  ];

  return (
    <div
      id="chat-window"
      className="w-full bg-white border-2 border-gray-400 rounded-md h-fit md:min-h-full overflow-y-auto pretty-scroll"
    >
      <div className="border-b-2 border-gray-400 py-4">
        <div className="text-2xl text-center font-bold text-noora-secondary">
          Menu
        </div>

        <div className="text-gray-600 text-center mx-auto mt-1 text-sm">
          <span><MenuAlt2Icon className="h-4 w-4 -mt-0.5 inline-block" /> text-only</span>
          <Switch
            checked={convoState.value.audio.shouldAutoPlay}
            onChange={(e: any) => {
              convoState.setValue((cs: any) => ({ ...cs, audio: { ...cs.audio, shouldAutoPlay: !cs.audio.shouldAutoPlay } }));
            }}
            className={clsx(
              convoState.value.audio.shouldAutoPlay ? 'bg-noora-primary' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent mx-1.5 -bottom-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0'
            )}
          >
            <span
              aria-hidden="true"
              className={clsx(
                convoState.value.audio.shouldAutoPlay ? 'translate-x-4' : 'translate-x-0',
                'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <span>autoplay <VolumeUpIcon className="h-4 w-4 -mt-0.5 inline-block" /></span>
        </div>

      </div>
      <div className="px-2 py-1">
        {sections.map((section) => (
          <Disclosure key={section.title} defaultOpen={!section.defaultHide}>
            {({ open }) => (
              <div className="mx-auto w-full rounded-2xl bg-white py-1">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-noora-secondary hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span>{section.title}</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <DisclosureTransition>
                  <Disclosure.Panel className="text-sm text-gray-500">
                    {section.component}
                  </Disclosure.Panel>
                </DisclosureTransition>{" "}
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
