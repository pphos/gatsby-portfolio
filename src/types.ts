// 共通の型定義
export type NavMenuType = {
  label: string,
  href: string,
};

// セクション別の型定義
export type HeaderDataType = {
  title: string,
  menu: NavMenuType[]
};

export type HeroDataType = {
  title: string,
  subtitle: string,
  lead: string,
};

export type WorksItemType = {
  imageUrl: string,
  label: string,
  info: string,
  technology: string[],
};

export type WorksDataType = {
  works: WorksItemType[]
};

export type AboutDataType = {
  imageUrl: string,
  resume: string,
};

export type SkillItemType = {
  title: string,
  technology: string[]
};

export type SkillDataType = {
  skills: SkillItemType[]
};

