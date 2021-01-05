export const themes = {
  old: {
    'color-header': '#283e4a',
    'color-linkedin': '#0077b5',
    'color-input': '#e1e9ee',
    'color-input-hover': '#eef3f8',
    'color-icons': '#c7d1d8',
    'color-icons-hover': '#fff',
    'color-hashtag': '#7a8b98',
    'color-background': '#f5f5f5',
    'color-ad-text': '#434649',
    'color-nav-border': '#5c6f7c',
    'color-panel': '#fff',
    'color-link': '#0073b1',
    'color-black': 'rgba(0,0,0,.9)',
    'color-gray': 'rgba(0,0,0,.6)',
    'color-separator': 'rgba(0,0,0,0.15)',
    'color-white': '#fff',
    'cool-gray-20': '#f3f6f8',

    'border-radius': '2px',
    'panel-box-shadow': 'rgba(0, 0, 0, 0.15)',

    'post-separator': '1px solid var(--color-separator)',
    'post-border-radius': '0px',
    'post-border': 'none',
    'post-margin': '0',
    'post-container-margin': '0',

    transition: '0.6s ease-in-out',

    'notification-badge-border': 'none',
    'no-notification-badge-size': '8.5px',
  },
  new: {
    'color-header': '#fff',
    'color-linkedin': '#0077b5',
    'color-input': '#eef3f8',
    'color-input-hover': '#e1e9ee',
    'color-icons': '#666666',
    'color-icons-hover': '#191919',
    'color-hashtag': '#7a8b98',
    'color-background': '#f3f2ef',
    'color-ad-text': '#434649',
    'color-nav-border': '#ebebeb',
    'color-panel': '#fff',
    'color-link': '#0073b1',
    'color-black': 'rgba(0,0,0,.9)',
    'color-gray': 'rgba(0,0,0,.6)',
    'color-separator': '#cfcecb',
    'color-white': '#fff',
    'cool-gray-20': '#f3f6f8',

    'border-radius': '10px',
    'panel-box-shadow': '#deddda',

    'post-separator': 'none',
    'post-border-radius': '35px',
    'post-border': '1px solid #00000026',
    'post-margin': '8px 16px',
    'post-container-margin': '5px 0',

    transition: '0.6s ease-in-out',

    'notification-badge-border': '2px solid white',
    'no-notification-badge-size': '6.5px',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.old | typeof themes.new;
