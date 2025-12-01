export interface AmbassadorImage {
  id: string;
  src: string;
  title: string;
  layout: 'tall-portrait' | 'landscape' | 'wide-cinematic' | 'medium-vertical' | 'square' | 'full-width';
  position?: number; // For ordering in the layout
}

export const ambassadorImages: AmbassadorImage[] = [
  {
    id: '1',
    src: '/images/ambassadors/1.jpg',
    title: 'Ambassador 1',
    layout: 'tall-portrait', // Hero anchor on left
    position: 1,
  },
  {
    id: '2',
    src: '/images/ambassadors/2.jpg',
    title: 'Ambassador 2',
    layout: 'landscape', // Stacked on right
    position: 2,
  },
  {
    id: '3',
    src: '/images/ambassadors/3.jpg',
    title: 'Ambassador 3',
    layout: 'landscape', // Stacked on right
    position: 3,
  },
  {
    id: '4',
    src: '/images/ambassadors/4.jpg',
    title: 'Ambassador 4',
    layout: 'wide-cinematic', // Mid-section
    position: 4,
  },
  {
    id: '5',
    src: '/images/ambassadors/5.jpg',
    title: 'Ambassador 5',
    layout: 'medium-vertical', // Side vertical
    position: 5,
  },
  {
    id: '6',
    src: '/images/ambassadors/6.jpg',
    title: 'Ambassador 6',
    layout: 'medium-vertical', // Side vertical
    position: 6,
  },
  {
    id: '7',
    src: '/images/ambassadors/7.jpg',
    title: 'Ambassador 7',
    layout: 'square', // Bottom row
    position: 7,
  },
  {
    id: '8',
    src: '/images/ambassadors/8.jpg',
    title: 'Ambassador 8',
    layout: 'square', // Bottom row
    position: 8,
  },
  {
    id: '9',
    src: '/images/ambassadors/6.jpg',
    title: 'Ambassador 9',
    layout: 'square', // Bottom row
    position: 9,
  },
  {
    id: '10',
    src: '/images/ambassadors/10.jpg',
    title: 'Ambassador 10',
    layout: 'full-width', // Final beauty shot
    position: 10,
  },
];

// Layout configuration for the masonry grid
export const galleryLayoutConfig = {
  tallPortrait: {
    className: 'col-span-1 row-span-3',
    mobileClassName: 'col-span-1 row-span-2',
  },
  landscape: {
    className: 'col-span-1 row-span-1',
    mobileClassName: 'col-span-1 row-span-1',
  },
  wideCinematic: {
    className: 'col-span-2 row-span-2',
    mobileClassName: 'col-span-1 row-span-2',
  },
  mediumVertical: {
    className: 'col-span-1 row-span-2',
    mobileClassName: 'col-span-1 row-span-2',
  },
  square: {
    className: 'col-span-1 row-span-1',
    mobileClassName: 'col-span-1 row-span-1',
  },
  fullWidth: {
    className: 'col-span-3 row-span-2',
    mobileClassName: 'col-span-1 row-span-2',
  },
};

