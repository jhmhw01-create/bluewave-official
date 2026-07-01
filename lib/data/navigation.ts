export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "MEMBERS", href: "/members" },
  { label: "WORLD", href: "/world" },
  { label: "GALLERY", href: "/gallery" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

export const footerLinks = {
  explore: [
    { label: "Members", href: "/members" },
    { label: "Universe", href: "/world" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
  ],
  fan: [
    { label: "WAVES Fanclub", href: "/#fanclub" },
    { label: "Light Stick", href: "/#lightstick" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "Weverse", href: "#" },
  ],
};
