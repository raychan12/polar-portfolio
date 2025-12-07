export type HeaderLink = {
	caption: string;
	icon?: string;
	linkTo: LinkTo;
};
export type LinkTo = { pathname: string; href?: undefined } | { pathname?: undefined; href: string };
