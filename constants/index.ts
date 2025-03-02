interface SidebarLinksProps {
  id: string;
  imgURL: string;
  route: string;
  label: string;
}

interface PersonalInfoProps {
  title: string;
  description: string;
}
export const sidebarLinks: SidebarLinksProps[] = [
  {
    id: "1",
    imgURL: "/assets/Icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    id: "2",
    imgURL: "/assets/Icons/suitcase.svg",
    route: "/work",
    label: "work",
  },
  {
    id: "3",
    imgURL: "/assets/Icons/user.svg",
    route: "/about",
    label: "About",
  },
  {
    id: "4",
    imgURL: "/assets/Icons/id-card.png",
    route: "/contact",
    label: "contact",
  },
];
export const PersonalInfo: PersonalInfoProps[] = [
  {
    title: "Coding Philosophy",
    description: `My coding style is all about clarity and functionality. I prefer
function declarations over expressions for readability, avoid
unnecessary dependencies, and use native ECMAScript modules wherever
possible. By prioritizing simplicity, I make sure the code is scalable
and maintainable—qualities that enhance any project’s longevity and user
experience.`,
  },
  {
    title: `Continuous Learning & Growth`,
    description: ` I’m dedicated to evolving as a developer through structured learning and
        hands-on practice. Currently, I&apos;m taking a Computer Science course
        and working on LeetCode problems to sharpen my problem-solving skills. I
        track my progress in Obsidian to ensure a balanced focus on both
        technical and personal development. Beyond the Code When I’m not coding,
        you’ll probably find me walking in nature, meditating, or relaxing with
        a skincare session. I believe in nurturing a healthy work-life balance,
        which, in turn, fuels my creativity and focus as a developer.`,
  },
  {
    title: `Beyond the Code`,
    description: `When I’m not coding, you’ll probably find me walking in nature, meditating, or relaxing with a skincare session. I believe in nurturing a healthy work-life balance, which, in turn, fuels my creativity and focus as a developer.`,
  },
];

export const FeaturedWorkData = [
  {
    id: 1,
    img: "/assets/images/featured-work-1.png",
    type: "E-commerce",
    title: "ShopEase",
    description:
      "ShopEase is a digital platform that connects businesses with customers, making it easier to find and book products.",
  },
  {
    id: 2,
    img: "/assets/images/featured-work-2.png",
    type: "Social Media",
    title: "ConnectHub",
    description:
      "ConnectHub is a social media platform that connects people with their friends and family.",
  },
  {
    id: 3,
    img: "/assets/images/featured-work-3.png",
    type: "Health & Fitness",
    title: "FitTrack",
    description:
      "FitTrack is a health and fitness app that helps users track their progress and achieve their fitness goals.",
  },
];
