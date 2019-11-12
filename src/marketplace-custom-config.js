/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'WLAN',
    label: 'WLAN',     },
  {
    key: 'Office lockable',
    label: 'Office lockable',
  },
  {
    key: 'Reception',
    label: 'Reception',
  },
  {
    key: 'Meeting room / conference room',
    label: 'Meeting room / conference room',
  },
  {
    key: 'Facilitators toolkit',
    label: 'Facilitators toolkit',
  },
  {
    key: 'Whiteboard',
    label: 'Whiteboard',
  },
  {
    key: 'TV',
    label: 'TV',
  },
  {
    key: 'Cleaning service included',
    label: 'Cleaning service included',
  },
  {
    key: 'Flipchart',
    label: 'Flipchart',
  },
  {
    key: 'Beamer',
    label: 'Beamer',
  },
  {
    key: 'Video conference equipment',
    label: 'Video conference equipment',
  },
  {
    key: 'Catering / Takeout',
    label: 'Catering / Takeout',
  },
  {
    key: 'Add parking space',
    label: 'Add parking space',
  },
];

export const categories = [
  { key: 'smoke', label: 'Single office' },
  { key: 'electric', label: 'Shared office' },
  { key: 'wood', label: 'Garage' },
  { key: 'other', label: 'Creative' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
