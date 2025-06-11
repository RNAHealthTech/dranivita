import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { type NavbarProps } from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setOpenMenu(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ring-1 ring-zinc-600 backdrop-blur-md">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-background text-accent hover:text-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-8">
                  <div className="flex flex-col items-center gap-6 text-center">
                    {routes.map((link, i) => (
                      <button
                        key={i}
                        className="group relative py-2 text-2xl font-medium text-accent"
                        onClick={() => handleClick(link.href)}
                      >
                        <span
                          className={classNames(
                            pathName === link.href ? "w-full" : "w-0",
                            "absolute -bottom-1 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full",
                          )}
                        ></span>
                        {link.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-8 text-center text-sm text-accent/80">
                  &copy; {new Date().getFullYear()} Dr. Anivita Aggarwal 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
