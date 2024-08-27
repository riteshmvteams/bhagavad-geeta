export interface Chapter {
  id: number;
  name: string;
  slug: string;
  name_transliterated: string;
  name_translated: string;
  verses_count: number;
  chapter_number: number;
  name_meaning: string;
  chapter_summary: string;
  chapter_summary_hindi: string;
}

export interface Verse {
  id: number;
  verse_number: number;
  chapter_number: number;
  slug: string;
  text: string;
  transliteration: string;
  word_meanings: string;
  translations: any;
  commentaries: any;
}
