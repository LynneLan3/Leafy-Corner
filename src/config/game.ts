export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	popularQuestions?: readonly GamePortalQuestion[];
	showRecentlyUpdated?: boolean;
	maxRecent?: number;
	showAbout?: boolean;
}

export type AnalyticsProvider = 'ga4';

export interface GameAnalyticsConfig {
	enabled: true;
	provider: AnalyticsProvider;
	measurementId: string;
	trackOutbound: boolean;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	heroImage?: string;
	heroAlt?: string;
	heroPosition?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
	analytics?: GameAnalyticsConfig;
}

export const game: GameConfig = {
	name: 'Leafy Corner',
	shortName: 'Leafy Corner',
	description:
		'A source-led Leafy Corner guide covering the cozy plant-shop loop, release and demo dates, platforms, price context, and confirmed store features.',
	tagline: 'Confirmed plant-shop management, platform, demo, and launch information.',
	siteUrl: 'https://leafy-corner.vercel.app/',
	hubPath: '/leafy-corner/',
	hubTitle: 'Leafy Corner Guide & Wiki',
	releaseDate: '2026-07-30',
	developer: 'Fireline Games',
	publisher: 'Fireline Games',
	platforms: ['Steam / PC', 'macOS', 'Nintendo Switch', 'PlayStation 5', 'Xbox'],
	accentColor: '#15803d',
	heroImage: 'hero.jpg',
	heroAlt: 'Official Steam artwork for Leafy Corner',
	heroPosition: 'center',
	portal: {
		popularQuestions: [
			{ label: 'What platforms is Leafy Corner on?', href: '/leafy-corner/platforms/' },
			{ label: 'Is Leafy Corner on PS5?', href: '/leafy-corner/platforms/#is-leafy-corner-on-ps5' },
			{ label: 'When was Leafy Corner released?', href: '/leafy-corner/release-date/' },
			{ label: 'What kind of game is Leafy Corner?', href: '/leafy-corner/gameplay/' },
			{ label: 'How much does it cost?', href: '/leafy-corner/price/' },
			{ label: 'Is there a demo?', href: '/leafy-corner/demo/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 5,
	},
	analytics: {
		enabled: true,
		provider: 'ga4',
		measurementId: 'G-VJ4HPNTW3J',
		trackOutbound: true,
	},
	categories: [
		{
			id: 'shop-gameplay',
			label: 'Gameplay',
			description: 'Growing, selling, caring for plants, customer orders, reputation, and shop decoration.',
			icon: 'puzzle',
			order: 1,
		},
		{
			id: 'game-info',
			label: 'Game Info',
			description: 'Full-game and demo release dates from the official listings.',
			icon: 'information',
			order: 2,
		},
		{
			id: 'platform-support',
			label: 'Platforms',
			description: 'Steam, macOS, console storefronts, and Steam Deck status.',
			icon: 'laptop',
			order: 3,
		},
		{
			id: 'price-info',
			label: 'Price',
			description: 'Base-price announcement and current-store caveats.',
			icon: 'information',
			order: 4,
		},
		{
			id: 'demo-info',
			label: 'Demo',
			description: 'The free Steam demo date and the scope stated by its listing.',
			icon: 'rocket',
			order: 5,
		},
	],
};
