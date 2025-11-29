export const COPYRIGHT_YEAR = 2025;

export const CONTACT_FORM = 'https://forms.gle/vQ4eYDe7j1N4vt4H8';
export const TWITTER = 'https://x.com/__ljus';

export interface Link {
	caption: string;
	icon?: string;
	linkTo: LinkTo;
}
export type LinkTo = { pathname: string; href?: undefined } | { pathname?: undefined; href: string };

export const links: Link[] = [
	{ caption: 'home', linkTo: { pathname: '/' } },
	{ caption: 'works', linkTo: { pathname: '/works' } },
	// { caption: "blog", link: { pathname: "/blog" }},
	// { caption: "fee", link: { pathname: "/fee" }},
	{ caption: 'contact', linkTo: { href: CONTACT_FORM } },
	{ caption: 'Twitter', icon: 'twitter-outline', linkTo: { href: TWITTER } },
];
