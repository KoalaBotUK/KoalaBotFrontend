from django.http import HttpResponse
from django.template import loader

import KoalaBot

"""
# This is only an example to document how you might, we can delete this once we have some cog stuff in
def exampleBackend():
    # Import KoalaBot like this
    from KoalaBot import database_manager

    # Set up bot information like this
    database_manager = KoalaBot.database_manager
    bot = KoalaBot.commands.Bot(command_prefix=KoalaBot.COMMAND_PREFIX)

    # Import a cog like this
    # from cogs import TextFilter

    # Import a cog Database manager like this
    from cogs.TextFilter import TextFilterDBManager
    tf_database_manager = TextFilterDBManager(database_manager, bot)
    tf_database_manager.create_tables()

    try:
        tf_database_manager.new_filtered_text(1, "test", "banned", False)
    except Warning:
        print("Already added")

    print(tf_database_manager.get_filtered_text_for_guild(1))

#exampleBackend()
"""

class BaseCogFront:

    def __init__(self):
        bot = KoalaBot.commands.Bot(command_prefix=KoalaBot.COMMAND_PREFIX)

        #from cogs import BaseCog
    '''
    def load_cog_frontend (self, extension):
        """
        Loads a cog from the cogs folder
        :param extension: The name of the cog
        """
        try:
            self.bot.load_extension(self.COGS_DIR.replace("/", ".")+f'.{extension}')
            print(f"{extension} loaded successfully.")
        except Warning:
            print(f"Cog '{extension}' already loaded.")

    def unload_cog_frontend (self, extension):
        """
        Unloads a running cog
        :param extension: The name of the cog
        """
        try:
            if extension == "BaseCog":
                # Error message here to user
                print("Sorry, you can't unload the base cog")
            else:
                self.bot.unload_extension(self.COGS_DIR.replace("/", ".") + f'.{extension}')
                print(f"{extension} unloaded successfully.")
        except Warning:
            print(f"Error unloading cog {extension}.")
    '''

    def enable_koala_extesion(self, guild_id, koala_extension):
        if koala_extension.lower() in ["all"]:
            available_extensions = KoalaBot.database_manager.get_all_available_guild_extensions(guild_id)
            for extension in available_extensions:
                KoalaBot.database_manager.give_guild_extension(guild_id, extension[0])
        else:
            KoalaBot.database_manager.give_guild_extension(guild_id, koala_extension)

    def disable_koala_extension(self, guild_id, koala_extension):
        all_ext = KoalaBot.database_manager.get_enabled_guild_extensions(guild_id)
        if koala_extension.lower() in ["all"]:
            for ext in all_ext:
                KoalaBot.database_manager.remove_guild_extension(guild_id, ext[0])
        elif (koala_extension,) not in all_ext:
            raise NotImplementedError(f"{koala_extension} is not an enabled extension")
        KoalaBot.database_manager.remove_guild_extension(guild_id, koala_extension)

    def list_koala_extensions(self, guild_id):
        return KoalaBot.database_manager.get_all_available_guild_extensions(guild_id)

# Create your views here.

def homepage(request):
    loadTemplate = loader.get_template('home.html')
    return HttpResponse(loadTemplate.render({}, request))

def settings(request):
    loadTemplate = loader.get_template('settings.html')
    return HttpResponse(loadTemplate.render({}, request))

def twitch(request):
    loadTemplate = loader.get_template('twitch.html')
    return HttpResponse(loadTemplate.render({}, request))

def verify(request):
    loadTemplate = loader.get_template('verify.html')
    return HttpResponse(loadTemplate.render({}, request))

def socialAlert(request):
    loadTemplate = loader.get_template('social_alert.html')
    return HttpResponse(loadTemplate.render({}, request))