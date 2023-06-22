export const brand: Brand = {
  companyName: "Debug Auto Exclusive Private Limited.",
  address: "No 58, 42nd Lane, Wellawatte, Colombo 06, Sri Lanka.",
  vatNo: "501030670",
  registrationNumber: "PV17108040",
  email: "info@dae.fun",
  phone: "+94 77 776 7679",
  whatsapp: {
    url: "https://wa.me/+94777767679",
    number: "+94 77 776 7679",
  },
  location: { lat: 6.755922562786295, lng: 79.9280520585388 },
};

export const navLinks: NavLink[] = [
  { label: "Marina", route: "https://marina.dae.fun" },
  { label: "Products", route: "https://products.dae.fun" },
  { label: "Charter", route: "https://charter.dae.fun" },
  { label: "JetSki Safari", route: "https://safari.dae.fun" },
];

export const sideBarNavLinks: NavLink[] = [
  { label: "Marina", route: "https://marina.dae.fun" },
  { label: "Products", route: "https://products.dae.fun" },
  { label: "Charter", route: "https://charter.dae.fun" },
  { label: "JetSki Safari", route: "https://safari.dae.fun" },
  { label: "About", route: "/about" },
  { label: "Membership", route: "/membership" },
  { label: "Events", route: "/events" },
  { label: "Training Center", route: "/training-center" },
  { label: "Careers", route: "/careers" },
  { label: "Blog", route: "/blog" },
  { label: "Contact", route: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    url: "https://www.facebook.com/DebugAutoExclusive",
    label: "Facebook",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/d.a.e.lk/",
    label: "Instagram",
  },
  {
    id: "youtube",
    url: "https://www.youtube.com/@DebugAutoExclusive",
    label: "YouTube",
  },
  {
    id: "linkedin",
    url: "https://lk.linkedin.com/company/debug-auto-exclusive",
    label: "LinkedIn",
  },
];

export const inquiryTypes: InquiryType[] = [
  {
    image: {
      src: "https://images.ctfassets.net/88dxwx49umgp/7JTcwrtVo4x1M1Xt6pULE5/ad4deb70940d9628747ad7f26b78997d/reservation-type-cruises.jpg",
      alt: "D.A.E Training Center reservations image - A cruising yacht by Debug Auto Exclusive",
      blurUrl: "",
    },
    id: "training-center",
    name: "Training Center Inquiries",
    type: "in-site",
  },
  {
    image: {
      src: "https://images.ctfassets.net/88dxwx49umgp/UfOLa7Y9MP7nulHobrL1G/99d0d729cb0cbb02b80bee4129e04757/reservations-type-evens.jpg",
      alt: "Events Reservation selector image - Group of people having a party on a cruise by Debug Auto Exclusive",
      blurUrl: "",
    },
    id: "events",
    name: "Events Inquires",
    type: "in-site",
  },
  {
    image: {
      src: "https://images.ctfassets.net/88dxwx49umgp/UfOLa7Y9MP7nulHobrL1G/99d0d729cb0cbb02b80bee4129e04757/reservations-type-evens.jpg",
      alt: "Events Reservation selector image - Group of people having a party on a cruise by Debug Auto Exclusive",
      blurUrl: "",
    },
    id: "marina",
    name: "Marina Inquiries",
    type: "external",
    link: "https://marina.dae.fun/inquiries",
  },
  {
    image: {
      src: "https://images.ctfassets.net/88dxwx49umgp/UfOLa7Y9MP7nulHobrL1G/99d0d729cb0cbb02b80bee4129e04757/reservations-type-evens.jpg",
      alt: "Events Reservation selector image - Group of people having a party on a cruise by Debug Auto Exclusive",
      blurUrl: "",
    },
    id: "charter",
    name: "Charter Inquiries",
    type: "external",
    link: "https://charter.dae.fun/inquiries",
  },
  {
    image: {
      src: "https://images.ctfassets.net/88dxwx49umgp/UfOLa7Y9MP7nulHobrL1G/99d0d729cb0cbb02b80bee4129e04757/reservations-type-evens.jpg",
      alt: "Events Reservation selector image - Group of people having a party on a cruise by Debug Auto Exclusive",
      blurUrl: "",
    },
    id: "products",
    name: "Products Inquiries",
    type: "external",
    link: "https://products.dae.fun/inquiries",
  },
  {
    image: {
      src: "https://images.ctfassets.net/88dxwx49umgp/UfOLa7Y9MP7nulHobrL1G/99d0d729cb0cbb02b80bee4129e04757/reservations-type-evens.jpg",
      alt: "Events Reservation selector image - Group of people having a party on a cruise by Debug Auto Exclusive",
      blurUrl: "",
    },
    id: "safari",
    name: "Safari Inquiries",
    type: "external",
    link: "https://safari.dae.fun/inquiries",
  },
];

export const errorTypes: ErrorType[] = [
  {
    code: 404,
    message:
      "Sorry! The page you are looking for doesn't exist or has been moved. Please check the URL or try navigating to our homepage to find what you're looking for:",
    title: "Page not found...",
    image: {
      src: "https://images.ctfassets.net/5uyx9ygtaaqf/1AQV0d6iAtWJu4PUTBKGRS/98ecefa1ca09a874d16a91d91220bd1d/404.jpg",
      blurUrl: "",
      alt: "404-image",
    },
  },
  {
    code: 500,
    message:
      "Our server encountered an unexpected error and we're unable to fulfill your request at this time. Please try refreshing the page, or come back later and try again. If the issue persists, please feel free to contact our support team for assistance.",
    title: "Something went wrong...",
    image: {
      src: "https://images.ctfassets.net/5uyx9ygtaaqf/1jNayDfJsQz5tg2skzAHbd/9a9757301643b54e5fb3ab436080b6e8/500.jpg",
      blurUrl: "",
      alt: "500-image",
    },
  },
];

export const acceptedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats",
  "officedocument.wordprocessingml.document",
];

export const eventTypes = [
  "Weddings",
  "Birthdays",
  "Corporate Events",
  "Gatherings",
] as const;

export const trainingCourses = [
  "Jet Ski Training",
  "Power Boat Training",
  "Basic Water Sports Training",
] as const;
