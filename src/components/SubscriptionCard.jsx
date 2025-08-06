import React from "react";

export const SubscriptionCards = () => {
    return (
        <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
            {/* Background gradient shape */}


            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">
                <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    CHOOSE THE GYM PASS  FOR YOU
                </p>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
                Choose an affordable plan designed to elevate your fitness journey — packed with top-tier features for personalized coaching, member engagement, and powerful progress tracking.


            </p>

            {/* Pricing Cards */}
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {/* Hobby Plan */}
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
                    <h3 id="tier-hobby" className="text-base font-semibold ">
                        CROSSFIT
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-semibold tracking-tight text-gray-900">
                            $29
                        </span>
                        <span className="text-base text-gray-500">/month</span>
                    </p>
                    <p className="mt-6 text-base text-gray-600">
                        The perfect plan to begin your CrossFit journey with expert guidance and structured workouts.

                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10">
                        {[
                            "Access to intro-level CrossFit WODs ",
                            "Up to 10 coached classes per week",
                            "Foundational movement training ",
                            "24-hour support response time",
                        ].map((feature, idx) => (
                            <li key={idx} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-[#8FFF00]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#"
                        aria-describedby="tier-hobby"
                        className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold  ring-1 ring-inset ring-[#8FFF00] hover:ring-[#8FFF00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FFF00] sm:mt-10"
                    >
                        Get started today
                    </a>
                </div>

                {/* Enterprise Plan */}
                <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
                    <h3 id="tier-enterprise" className="text-base font-semibold text-[#8FFF00] ">
                        OPEN GYM
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-semibold tracking-tight text-white">
                            $50
                        </span>
                        <span className="text-base text-gray-400">/month</span>
                    </p>
                    <p className="mt-6 text-base text-gray-300">
                        An ideal membership for beginners who prefer flexibility and training at their own pace.

                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm text-gray-300 sm:mt-10">
                        {[
                            "Unlimited access to gym equipment ",
                            "Use of 25+ machines and weights",
                            "Workout templates",
                            "24/7 gym access with secure entry",
                            "complimentary personal training session ",
                            "24-hour support from our staff",

                        ].map((feature, idx) => (
                            <li key={idx} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-[#8FFF00]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#"
                        aria-describedby="tier-enterprise"
                        className="mt-8 block rounded-md bg-[#8FFF00] px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-[#8FFF00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FFF00] sm:mt-10"
                    >
                        Get started today
                    </a>

                </div>

            </div>


        </div>
    );
};

// ✅ Check icon used for list items
const CheckIcon = ({ className }) => (
    <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        />
    </svg>
);
