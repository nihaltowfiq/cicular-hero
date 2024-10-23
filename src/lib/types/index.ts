export type Nullish<T> = T | null;

export type DataType = {
  name: string;
  slug: string;
  logo: string;
  website: string;
  relations: Relations[];
  info: Information;
};

type Relations = {
  name: string;
  slug: string;
  logo: string;
  website: string;
  info: Information;
};

type Information = {
  bridge_volume: number;
  inbound_volume: number;
  outbound_volume: number;
  active_users: number;
};
