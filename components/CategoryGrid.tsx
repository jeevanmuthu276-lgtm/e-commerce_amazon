"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUserStore } from "@/lib/userStore";

export default function CategoryGrid() {
  const [sections, setSections] = useState<any[]>([]);
  const user = useUserStore((state) => state.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/category-sections")
      .then((res) => res.json())
      .then((data) => {
        // Now using data directly from the newly updated database
        setSections(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative z-20 -mt-64 px-4 lg:px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sections.map((section, index) => {
          if (section.type === 'sign-in-ad') {
            if (mounted && user) return null;
            return (
              <div key={`section-${index}`} className="flex flex-col gap-5 h-full">
                <div className="bg-white p-5 flex flex-col shadow-sm">
                  <h2 className="text-[21px] font-bold text-gray-900 leading-tight mb-4">
                    {section.title}
                  </h2>
                  <Link href={section.link} className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2 text-sm font-medium text-center shadow-sm w-full block">
                    Sign in securely
                  </Link>
                </div>
                <div className="bg-white shadow-sm flex-grow">
                  <img src={section.adImage} alt="Advertisement" className="w-full h-full object-cover" />
                </div>
              </div>
            );
          }

          return (
            <div
              key={`section-${index}`}
              className="bg-white p-5 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h2 className="text-[21px] font-bold text-gray-900 leading-tight mb-4">
                  {section.title}
                  {section.subtitle && (
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      {section.subtitle}
                    </span>
                  )}
                </h2>

                {section.items?.length === 1 || section.type === 'single' ? (
                  <div>
                    <Link href={(section.items[0]?.link && section.items[0]?.link !== '#' && !section.items[0]?.link.includes('/products')) ? section.items[0]?.link : '/product/1'}>
                      <img
                        src={section.items[0]?.image}
                        alt={section.items[0]?.name}
                        className="w-full h-[260px] object-cover mb-2 cursor-pointer"
                      />
                    </Link>
                    <Link href={(section.items[0]?.link && section.items[0]?.link !== '#' && !section.items[0]?.link.includes('/products')) ? section.items[0]?.link : '/product/1'} className="hover:text-[#c45500] hover:underline">
                      <p className="text-[12px] text-gray-800 mt-2 line-clamp-2 leading-tight">
                        {section.items[0]?.name}
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                    {section.items?.slice(0, 4).map((item: any, i: number) => (
                      <div key={i} className="flex flex-col">
                        <Link href={(item.link && item.link !== '#' && !item.link.includes('/products')) ? item.link : '/product/1'}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[115px] object-cover cursor-pointer"
                          />
                        </Link>
                        <Link href={(item.link && item.link !== '#' && !item.link.includes('/products')) ? item.link : '/product/1'} className="hover:text-[#c45500] hover:underline">
                          <p className="text-[12px] text-gray-800 mt-2 line-clamp-2 leading-tight">
                            {item.name}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={(section.link && section.link !== '#' && !section.link.includes('/products')) ? section.link : '/product/1'}
                className="text-[#007185] hover:text-[#c45500] hover:underline text-[13px] font-medium mt-5 inline-block"
              >
                {section.type === 'single' ? 'See more' : 'Explore all'}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}