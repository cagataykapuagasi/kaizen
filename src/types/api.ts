export interface ITag {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}

export interface IPromotion {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Id: number;
  ImageUrl: string;
  PromotionCardColor: string;
  RemainingText: string;
  SeoName: string;
  Title: string;
  ScenarioType: string;
  Unavailable: boolean;
  Unvisible: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  CardType: string;
  ExternalUrl: any;
  ExternalType: any;
  ExternalRedirectType: any;
  ExternalWebviewType: any;
  ExternalLoginGate: any;
  IsLuckyDay: boolean;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  LuckyDayBackgroundColor: string;
}

export interface PromotionDetailItem {
  Title: string;
  Description: string;
  ImageUrl: string;
}

export interface PromotionDetailItemArea {
  Title: string;
  Description: string;
  OpenedIconUrl: string;
  ClosedIconUrl: string;
  UseMapButton: boolean;
  PromotionDetailItems: PromotionDetailItem[];
}

export interface Content {
  ContentId: number;
  BannerUrl: string;
  LiveStartDate: string;
  LiveEndDate: string;
  BannerText: string;
}

export interface PromotionGallery {
  DocumentUrl: string;
  DocumentType: string;
  CoverImageUrl: string;
}

export interface NextFlowConfigurations {}

export interface IPromotionDetail {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description: string;
  EndDate: string;
  Id: number;
  ImageUrl: string;
  CountryTimeZone: number;
  RemainingText: string;
  StartDate: string;
  Title: string;
  Type: string;
  CardType: string;
  ScenarioType: string;
  SeoName: string;
  Unavailable: boolean;
  IsMapAvailable: boolean;
  Unvisible: boolean;
  DetailButtonText: string;
  ListButtonText: any;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  LuckyDayBackgroundColor: string;
  ExternalUrl: any;
  ExternalType: any;
  ExternalRedirectType: any;
  ExternalWebviewType: any;
  ExternalLoginGate: any;
  PromotionDetailItemAreas: PromotionDetailItemArea[];
  Contents: Content[];
  PromotionTags: any[];
  PromotionGalleries: PromotionGallery[];
  NextFlowConfigurations: NextFlowConfigurations;
  GameWin: any;
}
