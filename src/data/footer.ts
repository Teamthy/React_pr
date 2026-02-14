import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Support", href: "/#features" },
            { name: "Pricing", href: "/#pricing" },
            { name: "Generate", href: "/generate" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "My Generation", href: "/my-generation" },
            { name: "Testimonials", href: "/#testimonials" },
            { name: "Contact", href: "/#contact" },
            { name: "Careers", href: "/#careers" },
            { name: "About", href: "/" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "#privacy" },
            { name: "Terms", href: "#terms" },
        ]
    }
];