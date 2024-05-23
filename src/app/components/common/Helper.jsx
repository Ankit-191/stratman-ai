import decentCapital from "/public/stratman/images/png/decent-capital.png";
import bcg from "/public/stratman/images/png/bcg.png";
import baskin from "/public/stratman/images/png/baskin.png";
import cfi from "/public/stratman/images/png/cfi.png";
import yomeeAvatar from "/public/stratman/images/png/yooMeeMember.png";
import ramaswamiAvatar from "/public/stratman/images/png/ramaswamiMember.png";
import kosanamAvatar from "/public/stratman/images/png/kosanamMember.png";
import { SemiColon } from "./Icons";
import { title } from "process";
// NAVBAR
export const NavigationList = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#features",
    title: "Feature",
  },
  {
    href: "#news",
    title: "News",
  },
  {
    href: "#pricing",
    title: "Pricing",
  },
  {
    href: "#testimonials",
    title: "Testimonials",
  },
];
// CUSTOMERS LIST
export const CustomersList = [
  {
    image: decentCapital,
  },
  {
    image: bcg,
  },
  {
    image: baskin,
  },
  {
    image: cfi,
  },
];
// ORGANIZATION DATA
export const organizationData = [
  {
    Para: "Stratman AI is a generative AI tool that will become the most powerful equity analyst ever. 'The most intuitive platform I've ever seen for tracking business fundamentals.'",
    Name: "Song Yoo-mee",
    Profession: "Dealing Maven",
    Collin: <SemiColon />,
    Avatar: yomeeAvatar,
  },
  {
    Para: "Few tools I have come across in the last 15 years that I think are true game changers. Stratman AI makes investment research so much more efficient. ",
    Name: "Bemra Ramaswami",
    Profession: "Trade Wizard",
    Collin: <SemiColon />,
    Avatar: ramaswamiAvatar,
  },
  {
    Para: "I've enjoyed using Stratman AI to source opportunities within my investable universe. The whole team is responsive to client feedback regarding coverage. A great resource for managers.'",
    Name: "Harsi Kosanam",
    Profession: "Crypto Analyst",
    Collin: <SemiColon />,
    Avatar: kosanamAvatar,
  },
  {
    Para: "Stratman AI is a generative AI tool that will become the most powerful equity analyst ever. 'The most intuitive platform I've ever seen for tracking business fundamentals.'",
    Name: "Song Yoo-mee",
    Profession: "Dealing Maven",
    Collin: <SemiColon />,
    Avatar: yomeeAvatar,
  },
  {
    Para: "Few tools I have come across in the last 15 years that I think are true game changers. Stratman AI makes investment research so much more efficient. ",
    Name: "Bemra Ramaswami",
    Profession: "Trade Wizard",
    Collin: <SemiColon />,
    Avatar: ramaswamiAvatar,
  },
  {
    Para: "I've enjoyed using Stratman AI to source opportunities within my investable universe. The whole team is responsive to client feedback regarding coverage. A great resource for managers.'",
    Name: "Harsi Kosanam",
    Profession: "Crypto Analyst",
    Collin: <SemiColon />,
    Avatar: kosanamAvatar,
  },
];
// COPILOT TABS
export const CopilotList = [
  {
    title: "Fundamentals",
  },
  {
    title: "Search",
  },
  {
    title: "Trends",
  },
  {
    title: "Technicals",
  },
];
// FAQ LIST
export const FaqsList = [
  {
    title: "How do I get started with Stratman AI?",
  },
  {
    title: "What features does Stratman AI offer?",
  },
  {
    title: "How does the Google Trends Data integration work?",
  },
  {
    title: "Is my data secure with Stratman AI?",
  },
  {
    title: "Can I customize the charts and data views?",
  },
];

//  PRICING LIST

export const PricingData = [
  {
    name: "FinChat",
    features: [
      { name: "Affordable Pricing", available: true },
      { name: "Copilot", available: true },
      { name: "Custom charts", available: true },
      { name: "SEC filing summaries", available: true },
      { name: "Web search integration", available: false },
      { name: "Technical analysis copilot", available: false },
      { name: "Google trends simulations", available: false },
      { name: "Hotkeys for common tasks", available: false },
      { name: "10 second response time", available: false },
      { name: "Insider trading reports", available: true },
      { name: "Analyst ratings and projections", available: true },
    ],
  },
  {
    name: "Stratman AI",
    features: [
      { name: "Affordable Pricing", available: true },
      { name: "Copilot", available: true },
      { name: "Custom charts", available: true },
      { name: "SEC filing summaries", available: true },
      { name: "Web search integration", available: true },
      { name: "Technical analysis copilot", available: true },
      { name: "Google trends simulations", available: true },
      { name: "Hotkeys for common tasks", available: true },
      { name: "10 second response time", available: true },
      { name: "Insider trading reports", available: true },
      { name: "Analyst ratings and projections", available: true },
    ],
  },
  {
    name: "Borea",
    features: [
      { name: "Affordable Pricing", available: true },
      { name: "Copilot", available: true },
      { name: "Custom charts", available: true },
      { name: "SEC filing summaries", available: false },
      { name: "Web search integration", available: false },
      { name: "Technical analysis copilot", available: false },
      { name: "Google trends simulations", available: false },
      { name: "Hotkeys for common tasks", available: false },
      { name: "10 second response time", available: true },
      { name: "Insider trading reports", available: false },
      { name: "Analyst ratings and projections", available: false },
    ],
  },
];