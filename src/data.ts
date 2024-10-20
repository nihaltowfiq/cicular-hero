export type DataType = {
  name: string;
  slug: string;
  logo: string;
  relations: string[];
  info: {
    bridge_volume: number;
    inbound_volume: number;
    outbound_volume: number;
    active_users: number;
  };
};

export const data: DataType[] = [
  {
    name: 'LinkedIn',
    slug: 'react',
    logo: '/assets/linkedin.svg',
    relations: ['facebook', 'xbox'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'React',
    slug: 'react',
    logo: '/assets/react.svg',
    relations: ['facebook', 'linkedin'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'Twitter',
    slug: 'twitter',
    logo: '/assets/twitter.svg',
    relations: ['react', 'discord', 'xbox'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'Facebook',
    slug: 'facebook',
    logo: '/assets/facebook.svg',
    relations: ['react', 'linkedin'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'X Box',
    slug: 'xbox',
    logo: '/assets/xbox.svg',
    relations: ['react', 'linkedin'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'Discord',
    slug: 'discord',
    logo: '/assets/discord.svg',
    relations: ['react', 'linkedin'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'Github',
    slug: 'github',
    logo: '/assets/github.svg',
    relations: ['react', 'linkedin', 'google', 'facebook'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'Google',
    slug: 'google',
    logo: '/assets/google.svg',
    relations: ['react', 'facebook', 'youtube'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
  {
    name: 'Youtube',
    slug: 'youtube',
    logo: '/assets/youtube.svg',
    relations: ['google', 'linkedin', 'facebook'],
    info: {
      bridge_volume: 1200000000,
      inbound_volume: 1200000000,
      outbound_volume: 1200000000,
      active_users: 1200000000,
    },
  },
];
