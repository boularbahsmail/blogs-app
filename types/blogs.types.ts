interface TAuthorContactInfo {
  email: string;
  twitterProfileUrl: string;
  mediumProfileUrl: string;
}

export interface Blog {
  id: number;
  author: string;
  authorContactInfo: TAuthorContactInfo;
  title: string;
  subTitle: string;
  content: string;
  tags: Array<string>;
}
