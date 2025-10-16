import {
  Facebook,
  Instagram,
  Linkedin,
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Twitter,
} from "@/public/assets";

export const users = [
  {
    id: 1,
    name: "Destiny Emmanuel",
    role: "Travel Enthusiast",
    avatar: Testimonial1,
    testimonial:
      "Monifrap made managing my money across two different banks so easy. I get real-time notifications, and I've never missed a payment since. It feels like all my banking is finally in one place.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Freelance Designer",
    avatar: Testimonial2,
    testimonial:
      "Monifrap gives me peace of mind. I can track every transaction and manage my business payments without stress. It’s a game changer.",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Small Business Owner",
    avatar: Testimonial3,
    testimonial:
      "Switching to Monifrap saved me so much time. I love how everything is in one place and super easy to use.",
  },
  {
    id: 4,
    name: "Aisha Bello",
    role: "Student",
    avatar: Testimonial4,
    testimonial:
      "Managing my student budget is so much easier with Monifrap. The app keeps me in control without any hassle.",
  },
];

export const questions = [
  {
    id: "1",
    question: "Is Monifrap safe to use with my bank accounts?",
    answer:
      "Absolutely. Monifrap uses bank-level encryption and biometric login to ensure your data and transactions are fully secure. We never store your sensitive information without your permission.",
  },
  {
    id: "2",
    question: "What banks does Monifrap support?",
    answer:
      "Monifrap supports a wide range of banks, including your local banks.",
  },
  {
    id: "3",
    question: "Does Monifrap charge transaction or service fees?",
    answer:
      "No. Monifrap is free to use and has no transaction or service fees.",
  },
  {
    id: "4",
    question: "Can I pay bills directly through the app?",
    answer: "Yes, you can pay bills directly through the app.",
  },
  {
    id: "5",
    question: " How fast are transfers between accounts?",
    answer:
      "Instant transfers between accounts. No delays, just fast and reliable real-time transfers.",
  },
  {
    id: "6",
    question: " Can I link more than one bank account?",
    answer:
      " Yes, you can link multiple bank accounts from different local banks. Monifrap combines all your accounts into a single dashboard so you can  manage balances, and receive unified notifications — all in one place.",
  },
];

export const socialMediaLinks = [
  {
    name: "twitter",
    icon: Twitter,
    label: "Twitter",
    url: "https://www.x.com/monifrap",
  },
  {
    name: "facebook",
    icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61581955392245",
  },
  {
    name: "instagram",
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/monifrap",
  },
  {
    name: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    url: "#",
  },
];
