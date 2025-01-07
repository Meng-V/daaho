// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "research_and_support", label: "Research and Support" },
  { href: "/", key: "use_the_librarie", label: "Use the Libraries" },
  { href: "/", key: "about", label: "About" },
];

// BLOCK MENU
import { MenuProps } from "@/types";
export const MENU_ITEMS: Array<MenuProps> = [
  {
    title: "Inclusive Excellence",
    linkGroups: [
      {
        label:
          "University Libraries Diversity Statement, Statement on Racism, and Land Acknowledgement",
        link: "/",
      },
      {
        label: "DEI Committee",
        link: "/deicommittee",
      },
      {
        label: "Commitment to Inclusive Excellence",
        link: "https://drive.google.com/file/d/1IxiHre74uvq01h4xuLa_PmKvGmTGmfn3/view",
      },
      {
        label: "Diversity, Equity, and Inclusion FY23 Annual Report",
        link: "https://drive.google.com/file/d/1GvV2cMRtTga9U5urkKVSkd0_QMEZNwuR/view?usp=sharing",
      },
    ],
  },
  {
    title: "Resources Available",
    linkGroups: [
      {
        label: "DEI Textbooks on Reserve",
        link: "https://libguides.lib.miamioh.edu/diversity/textbooksonreserve",
      },
      {
        label: "Heath and Wellness Kits",
        link: "http://lib.miamioh.edu/2022-04-19-new-health-and-wellness-kits-for-checkout-funded-by-student-technology-fee",
      },
      {
        label: "DEI titles in the digital leisure reading collection",
        link: "https://www.lib.miamioh.edu/2022-01-24-popular-e-books-and-audiobooks-now-available-for-leisure-reading-through-axis-360",
      },
      {
        label: "Accessibility Resources",
        link: "https://www.lib.miamioh.edu/research/instruction/accessibility/",
      },
      {
        label: "Antiracist Resources",
        link: "https://libguides.lib.miamioh.edu/antiracist-resources",
      },
      {
        label: "Lived Experiences: Race at Miami University",
        link: "https://livedmu.lib.miamioh.edu/",
      },
      {
        label: "Finding Freedom Summer Traveling Exhibit",
        link: "https://findingfreedom.lib.miamioh.edu/",
      },
    ],
  },
  {
    title: "Partnerships",
    linkGroups: [
      {
        label: "ACRL Diversity Alliance",
        link: "https://www.ala.org/acrl/issues/diversityalliance",
      },
      {
        label: "Butler Tech Project Search",
        link: "https://www.butlertech.org/transition-programs/project-search/",
      },
      {
        label: "OhioLINK Luminaries Program",
        link: "https://www.ohiolink.edu/content/ohiolink_initiatives",
      },
    ],
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};