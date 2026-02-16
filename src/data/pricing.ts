import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "Access to core templates.",
            "Support and forum access",
            "10 thumbnail exports monthly",
            "Course completion certificate",
            "Basic design review and tips"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Full access to premium library",
            "Priority email support.",
            "30 thumbnail exports monthly",
            "Course completion certificate",
            "No Thumbnify watermarks",
            "1-on-1 mentoring sessions",
            "Job assistance"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Unlimited access to all courses",
            "Dedicated account manager ",
            "Unlimited thumbnail exports monthly",
            "Advance collaboration tools",
            "Premium design review"
        ],
        mostPopular: false
    }
];