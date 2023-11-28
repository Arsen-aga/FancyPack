module.exports = {
  purge: {
    enabled: false,
    content: ['./app/*.html', './app/**/*.svg'],
  },
  theme: {
    screens: {
      'sm': '468px',
      'md': '540px',
      'lg': '720px',
      'xl': '960px',
      '2xl': '1140px',
      '3xl': '1200px',
      '4xl': '1360px',
      '5xl': '1550px',
    },
    fontFamily: {
      'anton': 'Anton-Regular',
      'ntsomic-bold': 'NTSomic-Bold',
      'ntsomic-semibold': 'NTSomic-SemiBold',
      'ntsomic-medium': 'NTSomic-Medium',
      'ntsomic-regular': 'NTSomic-Regular',
    },
    extend: {
      colors: {
        'default': '#d22530',
        'focused': '#fe2719',
        'hover': '#ff626c',
        'info': '#132aa1',
        'destructive-500': '#f34141',
        'destructive-200': '#fac7c7',
        'destructive-10': '#fef2f2',
        'primary': '#1e1e20',
        'secondary': '#747474',
        'tertiary': '#868e96',
        'disable': '#2F2B4333',
        'inverse': '#ffffff',
        'checkbox': '#1F960C',
        'border-input': '#2F2B433D',
        'border-disable': '#2F2B431A',
        'border-cards': 'radial-gradient(156.97% 73.64% at -1.89% -3.63%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.00) 100%))',
        'bg-btn-clicked': '#DAD8D866',
        'active': '#F2F2F2B2',
        'cards': '#F2F2F266',
        'input': '#FEFEFE',
        'footer': '#1C1B1B',
        'white': '#ffffff',
      },
      maxWidth: {
        '350px': '350px',
        '536px': '536px',
        '1336px': '1336px',
      },
      spacing: {
        '18px': '18px',
        '14px': '14px',
        '60px': '60px',
        '90px': '90px',
        '150px': '150px',
        '170px': '170px',
        '363px': '363px',
        '536px': '536px',
      },
      gridTemplateColumns: {
        '2/344': 'repeat(2, 344px)',
      },
      lineHeight: {
        '24px': '24px',
      },
    },
  },
  plugins: [],
}
