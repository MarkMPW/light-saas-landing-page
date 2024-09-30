import { TPlaning } from "@/interface/PlaningType";

export const pricingTicker: TPlaning[] = [
  {
    title: "Free",
    price: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ]
  },
  {
    title: "Pro",
    price: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ]
  },
  {
    title: "Business", 
    price: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ]
  }
]