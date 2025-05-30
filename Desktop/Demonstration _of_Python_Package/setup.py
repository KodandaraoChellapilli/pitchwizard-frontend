from setuptools import setup, find_packages

with open('README.md', 'r') as fh:
    long_description = fh.read()

setup(
    name='hello-world-akjshya-v1',
    version='0.0.3',
    author='Nachiketh',
    author_email='nachiketh@manifoldailearning.in',
    url='https://www.manifoldailearning.in',
    description='Hello World example package',
    long_description=long_description,
    long_description_content_type='text/markdown',  # Make sure you include this line
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    license='MIT',
    python_requires='>=3.6',
)
