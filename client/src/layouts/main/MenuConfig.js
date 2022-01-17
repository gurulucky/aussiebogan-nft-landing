// routes
import { Icon } from '@iconify/react';
import spadeIcon from '@iconify/icons-mdi/spade';
import infoSquareFill from '@iconify/icons-bi/info-square-fill';
import collectionFolderImage from '@iconify/icons-zmdi/collection-folder-image';
import teamFill from '@iconify/icons-ri/team-fill';
import roadmapIcon from '@iconify/icons-raphael/roadmap';
import faqIcon from '@iconify/icons-wpf/faq';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'MINT',
    icon: <Icon icon={spadeIcon} {...ICON_SIZE} />,
    path: '/#mint'
  },
  {
    title: 'ABOUT',
    icon: <Icon icon={infoSquareFill} {...ICON_SIZE} />,
    path: '/#about'
  },
  {
    title: 'COLLECTION',
    icon: <Icon icon={collectionFolderImage} {...ICON_SIZE} />,
    path: "/#collection"
  },
  {
    title: 'TEAM',
    icon: <Icon icon={teamFill} {...ICON_SIZE} />,
    path: "/#team"
  },
  {
    title: 'ROADMAP',
    icon: <Icon icon={roadmapIcon} {...ICON_SIZE} />,
    path: "/#roadmap"
  },
  {
    title: 'FAQ',
    icon: <Icon icon={faqIcon} {...ICON_SIZE} />,
    path: "/#faq"
  }
];

export default menuConfig;
