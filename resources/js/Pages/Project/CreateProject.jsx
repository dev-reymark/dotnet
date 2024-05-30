import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    Input,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    Select,
    SelectItem,
} from "@nextui-org/react";
import Swal from "sweetalert2";

export default function CreateProject() {
    const [values, setValues] = useState({
        name: "",
        description: "",
        url: "",
        image: "",
        category: "",
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imageUrl =
            values.image ||
            "https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg";

        const formData = {
            ...values,
            image: imageUrl,
        };

        Inertia.post("/projects", formData);
        Swal.fire({
            title: "Success!",
            text: "Project created successfully!",
            icon: "success",
            confirmButtonText: "OK",
        });

        Inertia.visit(route("project.index"));
    };

    return (
        <>
            <div>
                <Button
                    color="primary"
                    variant="shadow"
                    className="mt-6"
                    onClick={() => setIsOpen(true)}
                >
                    Add Project
                </Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={() => setIsOpen(!isOpen)}
                    size="lg"
                    scrollBehavior="outside"
                    isDismissable={false}
                    hideCloseButton
                >
                    <ModalContent>
                        <ModalHeader className="justify-center text-2xl py-5">
                            <div className="space-y-1 text-center">
                                <h2 className="text-2xl mb-4">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                                        Create Project
                                        <span className="absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                                    </span>
                                </h2>
                                <p className="text-sm font-light">
                                    Please fill up the form below to create a
                                    new project.
                                </p>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        name="name"
                                        label="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isRequired
                                        onClear={() =>
                                            setValues((prevValues) => ({
                                                ...prevValues,
                                                name: "",
                                            }))
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        name="description"
                                        label="Description"
                                        value={values.description}
                                        onChange={handleChange}
                                        isRequired
                                        onClear={() =>
                                            setValues((prevValues) => ({
                                                ...prevValues,
                                                description: "",
                                            }))
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="url"
                                        name="url"
                                        label="URL"
                                        value={values.url}
                                        onChange={handleChange}
                                        isRequired
                                        onClear={() =>
                                            setValues((prevValues) => ({
                                                ...prevValues,
                                                url: "",
                                            }))
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="url"
                                        name="image"
                                        label="Image URL"
                                        value={values.image}
                                        onChange={handleChange}
                                        onClear={() =>
                                            setValues((prevValues) => ({
                                                ...prevValues,
                                                image: "",
                                            }))
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <Select
                                        name="category"
                                        label="Category"
                                        value={values.category}
                                        onChange={handleChange}
                                        placeholder="Select"
                                        isRequired
                                    >
                                        <SelectItem value="pos" key="POS">
                                            POS System
                                        </SelectItem>
                                        <SelectItem
                                            value="webapp"
                                            key="Web App"
                                        >
                                            Web Application
                                        </SelectItem>
                                        <SelectItem
                                            value="mobileapp"
                                            key="Mobile App"
                                        >
                                            Mobile Application
                                        </SelectItem>
                                    </Select>
                                </div>
                                <div className="flex gap-3 justify-end mt-5 mb-5">
                                    <Button color="primary" type="submit">
                                        Create
                                    </Button>
                                    <Button
                                        color="danger"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}
