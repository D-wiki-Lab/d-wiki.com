import { Toc as TocType } from '~/types/toc';

type TocClass = TocType & {};

export default class Toc implements TocClass {
  id: string;
  text: string;

  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }
}
