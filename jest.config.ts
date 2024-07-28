export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|css|scss|sass|less)$': 'jest-transform-stub',
  },
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
