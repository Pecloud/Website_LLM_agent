interface FooterLink {
  label: string;
  href: string;
}

interface FooterConfig {
  copyright: string;
  links: FooterLink[];
  licenseNumber: string;
}

export const footerConfig: FooterConfig = {
  copyright: 'Copyright © 1998-2025 All rights reserved.',
  licenseNumber: 'License Number: xxxxxxxx',
  links: [
    {label: 'About Us', href: '/about'},
    {label: 'Contact Us', href: '/contact'},
    {label: 'Privacy', href: '/privacy'},
    {label: 'Loyalty & Referral', href: '/loyalty'},
    {label: 'Customer Service', href: '/service'},
    {label: 'Affiliate', href: '/affiliate'},
  ],
};
