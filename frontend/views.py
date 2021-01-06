from django.http import HttpResponse
from django.template import loader

# This is only an example to document how you might, we can delete this once we have some cog stuff in
def exampleBackend():
    # Import KoalaBot like this
    import KoalaBot
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

# exampleBackend()

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

def cogs(request):
    loadTemplate = loader.get_template('cogs.html')
    return HttpResponse(loadTemplate.render({}, request))
    
