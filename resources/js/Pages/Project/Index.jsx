import { useState } from "react";
import { Head } from "@inertiajs/react";
import CreateProject from "./CreateProject";
import { RiHomeSmile2Line } from "react-icons/ri";
import { TbHttpPost } from "react-icons/tb";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { CiMobile4 } from "react-icons/ci";
import { Input, Button, Tooltip, Link } from "@nextui-org/react";
import { IoArrowUndoOutline } from "react-icons/io5";
import { SearchIcon } from "@/Components/Icons";
import {
    Chip,
    Card,
    CardBody,
    CardFooter,
    Image,
    Divider,
} from "@nextui-org/react";

export default function Index({ projects }) {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProjects = projects.filter((project) => {
        const categoryMatches =
            selectedCategory === "ALL" ||
            project.category.toUpperCase() === selectedCategory;
        const nameMatches = project.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return categoryMatches && nameMatches;
    });

    return (
        <>
            <Head title="Projects" />
            <div className="relative overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200 mb-8">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                                Projects
                                <span className="absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                            </span>
                        </h1>

                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                            Stay in the know with our latest projects.
                        </p>

                        <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                            <div className="relative flex justify-between gap-2">
                                <Input
                                    placeholder="Type to search..."
                                    startContent={<SearchIcon size={18} />}
                                    type="search"
                                    className="mt-6"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                                <CreateProject />
                                <Tooltip
                                    showArrow={true}
                                    content="Back to home"
                                >
                                    <Button
                                        className="mt-6"
                                        isIconOnly
                                        color="danger"
                                        as={Link}
                                        href="/"
                                    >
                                        <IoArrowUndoOutline />
                                    </Button>
                                </Tooltip>
                            </div>

                            <div className="absolute top-0 end-0 -translate-y-12 translate-x-20">
                                <svg
                                    className="w-16 h-auto text-orange-500"
                                    width="121"
                                    height="135"
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                <svg
                                    className="w-40 h-auto text-cyan-500"
                                    width="347"
                                    height="188"
                                    viewBox="0 0 347 188"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                        stroke="currentColor"
                                        stroke-width="7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-10 sm:mt-20">
                            <button
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                onClick={() => handleCategoryChange("ALL")}
                            >
                                <RiHomeSmile2Line className="w-5 h-5 text-primary" />
                                ALL
                            </button>
                            <button
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                onClick={() => handleCategoryChange("POS")}
                            >
                                <TbHttpPost className="w-5 h-5 text-secondary" />
                                POS
                            </button>
                            <button
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                onClick={() => handleCategoryChange("WEB")}
                            >
                                <HiMiniGlobeAlt className="w-5 h-5 text-success" />
                                WEB
                            </button>
                            <button
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                onClick={() => handleCategoryChange("MOBILE")}
                            >
                                <CiMobile4 className="w-5 h-5 text-danger" />
                                MOBILE
                            </button>
                        </div>
                    </div>
                    <Divider className="my-10" />
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 py-4">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <Card
                                    shadow="sm"
                                    key={index}
                                    isPressable
                                    onPress={() =>
                                        (window.location.href = project.url)
                                    }
                                >
                                    <CardBody className="overflow-visible p-0">
                                        <Image
                                            shadow="sm"
                                            radius="lg"
                                            width="100%"
                                            alt={project.name}
                                            className="w-full object-cover h-[140px]"
                                            src={project.image}
                                        />
                                    </CardBody>
                                    <CardFooter className="text-small justify-between">
                                        <div>
                                            <b>{project.name}</b>

                                            <p className="text-default-500">
                                                {project.description.length > 30
                                                    ? project.description.substring(
                                                          0,
                                                          30
                                                      ) + "..."
                                                    : project.description}
                                            </p>
                                        </div>
                                        <Chip size="sm" color="primary">
                                            {project.category}
                                        </Chip>
                                    </CardFooter>
                                </Card>
                            ))
                        ) : (
                            <div className="col-span-2 sm:col-span-4 text-center text-gray-500">
                                No project created yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
