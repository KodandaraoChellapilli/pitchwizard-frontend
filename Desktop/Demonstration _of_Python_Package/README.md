hello_world/
    hello_world/
        __init__.py
        main.py

# Virtual Environments

'''
1. Create a virtual environment with a specific Python version:
   conda create -n hellodemo python=3.10
   
2. Activate the virtual environment:
   conda activate hellodemo
   
3. Install necessary packages:
   pip install setuptools twine
   
4. Build the distribution package:
   python setup.py sdist
   
5. Upload to TestPyPI:
   twine upload --repository-url https://test.pypi.org/legacy/ dist/hello_world_akjshya-0.0.1.tar.gz
'''
