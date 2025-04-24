'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sticky top-0 left-0 h-screen max-sm:hidden lg:w-[264px] flex flex-col justify-between bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 pt-28 text-white shadow-lg">
            <div className="flex flex-col gap-4">
                {sidebarLinks.map(item => {
                    const isActive =
                        pathname === item.route ||
                        pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                                'flex items-center gap-4 p-3 rounded-md transition-all duration-300 hover:bg-blue-600/20 hover:scale-[1.02]',
                                {
                                    'bg-blue-600 text-white shadow-md':
                                        isActive,
                                    'text-gray-300 hover:text-white': !isActive
                                }
                            )}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={24}
                                height={24}
                                className={cn(
                                    'transition-all duration-300 bg-indigo-400 border',
                                    {
                                        'invert-0': isActive,
                                        invert: !isActive
                                    }
                                )}
                            />
                            <span className="text-base font-medium max-lg:hidden">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
