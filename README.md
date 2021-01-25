# KoalaBotFrontend
KoalaBot Frontend web application

### Prerequisites

The preferred way to run this webapp locally is by using [virtualenvwrapper](https://pypi.org/project/virtualenvwrapper/) to create a virtualenv for python3.

To do this:

1. Install [python3](https://docs.python.org/3/using/index.html)
2. Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html)

### Update Submodules

```
git submodule update --init --recursive
```

Set up `.env` inside submodule.

Before running the bot you will need to create a `.env` file in the root directory of this project. A template for this can be found here:

```python
# Discord Bot
DISCORD_TOKEN = AdiSc0RdT0k3N # A discord Token taken from the discord developers portal 
BOT_OWNER = 123456789 # A discord ID for the person who should have access to owner commands


# Twitch Alert
TWITCH_TOKEN = tw1tch70k3n # Twitch Token taken from the twitch developers portal
TWITCH_SECRET = tw1tch53cr3t # Twitch Secret taken from the twitch developers portal

# Verification
GMAIL_EMAIL = example@gmail.com # email for a gmail account
GMAIL_PASSWORD = example_password123 # password for the same gmail account
```

### Installing

Make a new virtual environment for the project

```
mkvirtualenv venv
```

Work on the virtual environment
```
workon venv
```
install the python3 dependencies
```
pip3 install -r requirements.txt
```

## Running the server
To run the server:
```
./runserver
```
