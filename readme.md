
# Digital Wallets

A Web-based wallet platform to interact with blockchains(gitcoin, Ethereum and Ripple) and manage Crypto, NFTs and Tokens.

## Installation

Prerequisites : 
    
    1. Python 3.9
    2. Node js
    3. npm
    4. git
    5. pip for python 3.9
    6. For Windows : Microsoft C++ 14 build tools
    7. Mysql Server

Step 1: Create a working directory
```bash
mkdir project
```
Step 2: cd into working directory
```bash
cd project
```
Step 3: clone the git repository onto the local system
```bash
git clone repository
```
Step 4: cd into digital-wallets
```bash
cd digital-wallets
``` 
Step 5: Install react dependencies 
```bash
npm install
```
Step 6: Install react scripts
```bash
npm install react-scripts
```
Step 7: cd into Server
```bash
cd server
```
Step 8: Install python dependencies
```bash
pip install -r requirements.txt
```
Step 9: go back one directory 
```bash
cd ..
```
Step 10: Edit ./config.json

Change any API keys if required. Update the host name, password and user of mysql database.
Find further details of all configurations in the Environment Variables section.

## Deployment

Step 1: Open a terminal to run python Server
```bash
cd digital-wallets
cd server
python app.py
```

Step 2: Open a terminal to run react 
 ```bash
 cd digital-wallets
npm start
```

Visit localhost:3000 on your browser to access the website.

## Environment Variables
Details about variables set in config.json<br /><br />
**DB_HOST** : Host of mysql server. use "localhost" if on a local machine.<br />
**DB_USER** : Name of the mysql user to be used. use "root" by default.<br />
**DB_PASSWORD** : Password of mysql user.<br />
**BACKEND_URI** : URL of backend server. Python server runs on port 5000 by default. <br /> Use "http://localhost:5000" by default.<br />
**ETHERSCAN_TESTNET_API_KEY** : API key for etherscan testnet. Change if required.<br />
**RIPPLE_TESTNET_URI** : Ripple testnet uri. Doesnot require change.<br />
**INFURA_PROJECT_ID** : Infura project id. Change if required.<br />
**ETHERSCAN_API_KEY** : Etherscan API key. Change if required.<br />
**MORALIS_API_KEY** : Moralis API key. Change if required.<br />
**COINBASE_APKI_KEY** : Coinbase API key. Change if required.<br />
**gitCOIN_TESTNET_EXPLORER** : URL for gitcoin testnet explorer. Doesnot require change<br />
**ETHEREUM_TESTNET_EXPLORER** : URL for Ethereum testnet explorer. Doesnot require change<br />
**RIPPLE_TESTNET_EXPLORER** : URL for Ripple testnet explorer. Doesnot require change<br />

## Complete deployment on an Ubunto 22.04 machine.

### **Setup**

Step 1: Update apt
 ```bash
sudo apt-get update
sudo apt-get updgradeRIPPLE_TESTNET_EXPLORER
```  

Step 2: Install mysql-server : https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04
 ```bash
sudo apt install mysql-server
sudo systemctl start mysql.service
sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
exit
mysql -u root -p
```  

Step 3: Install Python3.9 : https://www.linuxcapable.com/how-to-install-python-3-9-on-ubuntu-22-04-lts/
```bash
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install python3.9 -y
sudo apt install python3.9-dev -y
sudo apt install python3.9-venv -y
sudo apt install python3.9-distutils -y
sudo apt install python3.9-lib2to3 -y
```

Step 4: Install pip for Python3.9
```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3.9 get-pip.py
```

Step 5: Install Nodejs and npm
```bash
sudo apt install nodejs
sudo apt install npm
```

Step 6: Change openssl.cnf to allow legacy support. Go to etc/ssl . From home, 
```bash
cd ..
cd ..
cd etc
cd ssl
```

Step 7: Open openssl.cnf with a text editor
```bash
nano openssl.cnf
```

Make sure these configurations are present. Link to thread : https://github.com/openssl/openssl/issues/16994
```bash
openssl_conf = openssl_init

[openssl_init]
providers = provider_sect

[provider_sect]
default = default_sect
legacy = legacy_sect

[default_sect]
activate = 1

[legacy_sect]
activate = 1
```

### **Installation**
Step 1: Clone the git repo to ubuntu machine.
```bash
git clone repo
```

Step 2: Move into project folder
```bash
cd digital-wallets
```

Step 3: Install React dependencies
```bash
npm install
npm install react-scripts
```

Step 4: Go into server folder
```bash
cd server
```

Step 5: Install Python dependencies
```bash
python3.9 -m pip install -r requirements.txt
```

Step 6: Edit config.json to add your mysql credentials.

### **Deployment**

Step 1: Open a terminal in project folder and run the following command to start a react dev server.
```bash
cd digital-wallets
npm start
```

Step 2: Go into server folder and start a new terminal and run the following command to start a dev python server.
```bash
cd server
python3.9 app.py
```

If react is unable to access the server, try
```bash
python3.9 -m flask run -h 0.0.0.0
```

## Known Errors
1. This only works with Python3.9. Python 3.8 produces some error related to bitcoin and ethereum, but may be solvable. Python3.10 produces a error related to a Mapping class.
2. On windows, C++ 14 build tools will be required to use web3.py
3. 