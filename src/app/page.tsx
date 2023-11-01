"use client";

import DialogArchive from "@/components/DialogArchive";
import IconsGrid from "@/components/IconsGrid";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white relative isolate">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 min-h-screen">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            {/* <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-indigo-600">
                We’re hiring
              </span>
              <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
              <a href="#" className="flex items-center gap-x-1">
                <span className="absolute inset-0" aria-hidden="true" />
                See open positions
                <ChevronRightIcon
                  className="-mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div> */}
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The Hoop
            </h1>
            <p className="max-w-xl mt-6 text-lg leading-7 text-gray-600">
              Recevez les dernières informations NBA, les matchs, les
              transferts, les blessures, les performances et bien plus encore.
              C'est facile, gratuit et livré chaque matin directement sur{" "}
              <span className="underline underline-offset-4">WhatsApp</span>.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                S'inscrire
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Archive <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div className="relative mt-16 sm:mt-24 lg:mt-4 lg:flex-shrink-0 lg:flex-grow">
            <IconsGrid />
          </div>
        </div>
      </div>
      <DialogArchive open={open} setOpen={(value: boolean) => setOpen(value)} />
    </>
  );
}
