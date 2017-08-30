from setuptools import setup

setup(
    name='chicken-attack',
    version='0.6.3',
    description='For terry test front end',
    author='WeiHao Huang',
    author_email='neilhuang@iii.org.tw',
    url='http://www.iii.org.tw',
    packages=[
        'chicken_attack',
        'chicken_attack.ui'
    ],
    package_data={
        'chicken_attack.ui': [
			'static/css/*.css',
			'static/fonts/*.*',
			'static/html/*.html',
			'static/images/*.*',
			'static/testing_data/*.txt',
            'static/js/*.js',
            'templates/*.html'
        ]
    },
    scripts=[],
    entry_points={
        'console_scripts': {
            'chicken-attack = chicken_attack.app:main'
        }
    },
    install_requires=[
        'flask'])
