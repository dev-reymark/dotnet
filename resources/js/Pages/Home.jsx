import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";
import { GoArrowRight } from "react-icons/go";
import { FcBusinessContact } from "react-icons/fc";

export default function Welcome() {
    return (
        <>
            <Head title="Home" />
            <div className="relative min-h-screen bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/assets/img/bg.png"
                    alt="Background"
                />
                <div className="relative flex items-center justify-center min-h-screen selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href={route("project.index")}
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                    
                                >
                                    <div className="relative flex w-full flex-1 items-stretch">
                                        <img
                                            src="/assets/img/proj_dir.png"
                                            alt="Laravel documentation screenshot"
                                            className="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                                        />
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div className="flex items-start gap-6 lg:flex-col">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full sm:size-16">
                                                <ApplicationLogo />
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="uppercase text-xl font-semibold text-black dark:text-white">
                                                    Datalogic Systems
                                                    Corporation
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    We are a leading provider of
                                                    custom software development
                                                    and consulting services. We
                                                    are dedicated to delivering
                                                    high-quality software
                                                    solutions that meet the
                                                    needs of our clients.
                                                </p>
                                            </div>
                                        </div>

                                        <GoArrowRight className="w-20 h-20 text-primary" />
                                    </div>
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
