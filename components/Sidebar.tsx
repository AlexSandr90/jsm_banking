/** @format */

'use client';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((linkItem) => {
          const isActive =
            pathname === linkItem.route ||
            pathname.startsWith(`${linkItem.route}/`);

          const { route, label, imgURL } = linkItem;
          return (
            <Link
              href={route}
              key={label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={imgURL}
                  alt={label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {label}
              </p>
            </Link>
          );
        })}

        
      </nav>
    </section>
  );
};

export default Sidebar;
