# KoalaBotFrontend

KoalaBot Frontend web application

### Prerequisites

1. Install [npm](https://www.npmjs.com/get-npm)

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

Ensure node/npm is installed

```
cd KoalaBotFrontend
```

Install our node dependencies

```
npm install
```

### Running the frontend server

Run the frontend server

```
npm start
```

## Running the backend server

TODO
