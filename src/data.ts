import {
  HeaderDataType,
  HeroDataType,
  WorksDataType,
  AboutDataType,
  SkillDataType
} from './types';

// Header用データ
export const headerData: HeaderDataType = {
  title: 'PPHOS',
  menu: [
    {
      label: 'WORKS',
      href: '#works',
    },
    {
      label: 'ABOUT',
      href: '#about',
    },
    {
      label: 'SKILL',
      href: '#skill',
    },
  ],
};

// Hero用データ
export const heroData: HeroDataType = {
  title: 'PPHOS',
  subtitle: 'PORTFOLIO',
  lead: 'Cloud Enginner',
};

// Works用データ
export const worksData: WorksDataType = {
  works: [
    {
      imageUrl: '/images/works-gatsby-portfolio.png',
      label: 'ポートフォリオサイト',
      info: 'GatsbyとChakra UIの練習も兼ねて作成しました。レスポンシブ対応はまだ甘いです。',
      technology: ['React', 'Gatsby', 'Chakra UI'],
    },
    {
      imageUrl: '/images/works-react-rps.png',
      label: 'あとだしじゃんけん',
      info: '某脳トレゲームをReactとTensorflowjsを使って再現しました。',
      technology: ['React', 'React Spring', 'Tailwindcss', 'Tensorflowjs'],
    },
    {
      imageUrl: '/images/works-keras-mnist.png',
      label: '画像分類 (じゃんけん）',
      info:'定番モデルをKerasで作成しました。学習画像の生成から前処理も行いました。',
      technology: ['Python', 'Keras', 'Matplotlib', 'OpenCV', 'Scikit-learn'],
    },
  ],
};

// About用データ
export const aboutData: AboutDataType = {
  imageUrl: "/images/profile.png",
  resume: "大学で情報工学を学び、学士及び修士研究では機械学習を用いた画像認識に取り組む。その後、新卒で都内の通信会社にエンジニアとして入社し、AWS上でCloudFormationを活用したシステム構築業務に従事。"
}

// Skill用データ
export const skillData: SkillDataType = {
  skills: [
    {
      title: 'Bussiness',
      technology: [
        'AWS',
        'Javascript',
        'Python',
        'Lambda',
        'CloudFormation',
      ],
    },
    {
      title: 'Hobby',
      technology: [
        'React',
        'Gatsby',
        'Tailwindcss',
        'Chakra UI',
        'TypeScript',
        'Rust',
      ],
    },
    {
      title: 'Certification',
      technology: [
        'AWS SOA',
        'AWS DVA',
        'AWS SAA',
        '応用情報技術者',
        '基本情報技術者',
      ],
    },
  ],
};