export interface FileIndex {
  [key: string]: any;
}

export const images: FileIndex = {
  'milestones': require('./images/milestones.png'),
  'infant-massage': require('./images/infant-massage.png'),
  'services': require('./images/services.png'),
  'method': require('./images/method.png'),
  'about-me': require('./images/about-me.png'),
}
