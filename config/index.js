const dev = process.env.NODE_ENV !== 'production';

// This should allow changing over deployment url and local vice versa!
export const server = dev ? 'http://localhostl:3000' : 'https://ourwebsite.io';
