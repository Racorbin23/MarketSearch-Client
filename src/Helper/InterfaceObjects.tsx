interface CardInterface {
  _id: string;
  player_name: string;
  page_name: string;
  collection_name: string;
  tab_name: string;
  ps_auctions: AuctionInterface[];
  xbox_auctions: AuctionInterface[];
}

interface AuctionInterface {
  _id: string;
  time_posted: string;
  bid: string;
  buyout: string;
}

export { CardInterface, AuctionInterface };
