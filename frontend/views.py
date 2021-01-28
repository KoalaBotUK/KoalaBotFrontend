from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .forms import *

import KoalaBot

class TwitchAlert:

    def __init__(self):
        # Import a cog like this
        # from cogs import TextFilter
        database_manager = KoalaBot.database_manager
        bot = KoalaBot.commands.Bot(command_prefix=KoalaBot.COMMAND_PREFIX)

        from cogs.TwitchAlert import TwitchAlertDBManager
        self.ta_database_manager = TwitchAlertDBManager(database_manager, bot)
        self.ta_database_manager.create_tables()

    def view_ta_message(self, channel_id):
        try:
            message = self.ta_database_manager.get_default_message(channel_id)
        except Warning:
            print()
        return message


    def edit_ta_message(self, guild_id, channel_id, message, replace):
        try:
            self.ta_database_manager.new_ta(guild_id, channel_id, message, replace)
        except Warning:
            print()
        return ("Changed the TwitchAlert message {}".format(message))

    def add_user_to_ta(self, channel_id, twitch_username, custom_message, guild_id):
        try:
            self.ta_database_manager.add_user_to_ta(channel_id, twitch_username, custom_message, guild_id)
        except Warning:
            print()
        return ("Added user {} to the TwitchAlert with the message {}.".format(twitch_username, custom_message))

    def remove_user_from_ta(self, channel_id, twitch_username):
        try:
            self.ta_database_manager.remove_user_from_ta(channel_id, twitch_username)
        except Warning:
            print()
        return ("Removed user {} from the TwitchAlert.".format(twitch_username))

    def add_team_to_ta(self, channel_id, twitch_team, custom_message, guild_id=None):
        try:
            self.ta_database_manager.add_team_to_ta(channel_id, twitch_team, custom_message, guild_id)
        except Warning:
            print()
        return ("Added team {} to the TwitchAlert with the message {}.".format(twitch_team, custom_message))

    def remove_team_from_ta(self, channel_id, team_name):
        try:
            self.ta_database_manager.remove_team_from_ta(channel_id, team_name)
        except Warning:
            print()
        return ("Removed team {} from the TwitchAlert.".format(team_name))

    def list_twitch_alert_users(self, channel_id):
        try:
            twitch_alert_users = self.ta_database_manager.get_users_in_ta(channel_id)
        except Warning:
            print()
        return twitch_alert_users

    def list_twitch_alert_teams(self, channel_id):
        try:
            twitch_alert_teams = self.ta_database_manager.get_teams_in_ta(channel_id)
        except Warning:
            print()
        return twitch_alert_teams


def twitchForm():
    form = IDSettings()
    print(form.as_p())
# ta = TwitchAlert()
guild_id = 0
channel_id = 1

# print(ta.view_ta_message(channel_id))


# Create your views here.

def homepage(request):
    loadTemplate = loader.get_template('home.html')
    return HttpResponse(loadTemplate.render({}, request))


def settings(request):
    loadTemplate = loader.get_template('settings.html')
    return HttpResponse(loadTemplate.render({}, request))


def twitch(request):
    loadTemplate = loader.get_template('twitch.html')
    forms = []
    if request.method == 'POST':
        form = IDSettings(request.POST)
        form2 = MessageForm(request.POST)
        form3 = UserForm(request.POST)
        form4 = TeamForm(request.POST)
    else:
        form = IDSettings()
        form2 = MessageForm()
        form3 = UserForm()
        form4 = TeamForm()
        forms.append(form)
        forms.append(form2)
        forms.append(form3)
        forms.append(form4)

    return HttpResponse(loadTemplate.render({'forms': form}, request))


def verify(request):
    loadTemplate = loader.get_template('verify.html')
    return HttpResponse(loadTemplate.render({}, request))


def socialAlert(request):
    loadTemplate = loader.get_template('social_alert.html')
    return HttpResponse(loadTemplate.render({}, request))
