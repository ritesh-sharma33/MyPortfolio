import { ReactElement } from "react";

export default class Technology {
  name: string;
  websiteUrl: string;
  imageUrl: ReactElement;
  techType: string;

  constructor(
    name: string,
    websiteUrl: string,
    imageUrl: ReactElement,
    techType: string
  ) {
    this.name = name;
    this.websiteUrl = websiteUrl;
    this.imageUrl = imageUrl;
    this.techType = techType;
  }
}